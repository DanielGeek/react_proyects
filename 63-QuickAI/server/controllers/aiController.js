import OpenAI from "openai";
import sql from "../configs/db.js";
import axios from "axios";
import { v2 as cloudinary } from "cloudinary";
import FormData from 'form-data';
import fs from 'fs';
import pdf from 'pdf-parse/lib/pdf-parse.js';

const AI = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

export const generateArticle = async (req, res) => {
  try {
    const { userId } = req.auth();
    const { prompt, length } = req.body;
    const plan = req.plan;
    const free_usage = req.free_usage;

    if (plan !== 'premium' && free_usage >= 10) {
      return res.json({ success: false, error: "Limit reached. Upgrade to continue." })
    }

    const response = await AI.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [{
        role: "user",
        content: prompt,
      }],
      temperature: 0.7,
      max_tokens: length,
    });

    const content = response.choices[0].message.content;

    await sql`INSERT INTO creations (user_id, prompt, content, type) VALUES (${userId}, ${prompt}, ${content}, 'article')`;

    if (plan !== 'premium') {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          free_usage: free_usage + 1,
        }
      });
    }

    res.json({ success: true, data: content });

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, error: error.message });
  }
}

export const generateBlogTitle = async (req, res) => {
  try {
    const { userId } = req.auth();
    const { prompt } = req.body;
    const plan = req.plan;
    const free_usage = req.free_usage;

    if (plan !== 'premium' && free_usage >= 10) {
      return res.json({ success: false, error: "Limit reached. Upgrade to continue." })
    }

    const response = await AI.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [{
        role: "user",
        content: prompt,
      }],
      temperature: 0.7,
      max_tokens: 100,
    });

    const content = response.choices[0].message.content;

    await sql`INSERT INTO creations (user_id, prompt, content, type) VALUES (${userId}, ${prompt}, ${content}, 'article')`;

    if (plan !== 'premium') {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          free_usage: free_usage + 1,
        }
      });
    }

    res.json({ success: true, data: content });

  } catch (error) {
    console.log(error.message);
    res.json({ success: false, error: error.message });
  }
}

export const generateImage = async (req, res) => {
  try {
    const { userId } = req.auth();
    const { prompt, publish } = req.body;
    const plan = req.plan;

    if (plan !== 'premium') {
      return res.json({ success: false, error: "This feature is only available for premium subscriptions" });
    }

    const formData = new FormData();
    formData.append('prompt', prompt);

    const { data } = await axios.post(
      'https://clipdrop-api.co/text-to-image/v1',
      formData, {
      headers: { 'x-api-key': process.env.CLIPDROP_API_KEY, },
      responseType: 'arraybuffer',
    }
    );

    const base64Image = `data:image/png;base64,${Buffer.from(data, 'binary').toString('base64')}`;
    const { secure_url } = await cloudinary.uploader.upload(base64Image);

    await sql`
      INSERT INTO creations (user_id, prompt, content, type, publish)
      VALUES (${userId}, ${prompt}, ${secure_url}, 'image', ${publish ?? false})
    `;

    res.json({ success: true, content: secure_url });

  } catch (error) {
    let apiErrorMessage = error.message;

    if (error.response) {
      try {
        const rawData = error.response.data;
        if (rawData instanceof Buffer) {
          apiErrorMessage = rawData.toString('utf8');
        } else if (typeof rawData === 'object') {
          apiErrorMessage = JSON.stringify(rawData);
        } else {
          apiErrorMessage = String(rawData);
        }
      } catch (parseErr) {
        console.error("Error parsing API error:", parseErr);
      }
    }

    console.error("API Error:", apiErrorMessage);

    res
      .status(error.response?.status || 500)
      .json({
        success: false,
        error: apiErrorMessage
      });
  }
};

export const removeImageBackground = async (req, res) => {
  try {
    const { userId } = req.auth();
    const image = req.file;
    const plan = req.plan;
    const { prompt } = req.body;

    if (plan !== 'premium') {
      return res.json({ success: false, error: "This feature is only available for premium subscriptions" });
    }

    const formData = new FormData();
    formData.append('prompt', prompt);

    const { secure_url } = await cloudinary.uploader.upload(image.path, {
      transformation: [
        {
          effect: 'background_removal',
          background_removal: 'remove_the_background'
        }
      ]
    });

    await sql`
      INSERT INTO creations (user_id, prompt, content, type)
      VALUES (${userId}, 'Remove background from image', ${secure_url}, 'image')`;

    res.json({ success: true, content: secure_url });

  } catch (error) {
    let apiErrorMessage = error.message;

    if (error.response) {
      try {
        const rawData = error.response.data;
        if (rawData instanceof Buffer) {
          apiErrorMessage = rawData.toString('utf8');
        } else if (typeof rawData === 'object') {
          apiErrorMessage = JSON.stringify(rawData);
        } else {
          apiErrorMessage = String(rawData);
        }
      } catch (parseErr) {
        console.error("Error parsing API error:", parseErr);
      }
    }

    console.error("API Error:", apiErrorMessage);

    res
      .status(error.response?.status || 500)
      .json({
        success: false,
        error: apiErrorMessage
      });
  }
};

export const removeImageObject = async (req, res) => {
  try {
    const { userId } = req.auth();
    const { object } = req.body;
    const image = req.file;
    const plan = req.plan;

    if (plan !== 'premium') {
      return res.status(403).json({
        success: false,
        error: "This feature is only available for premium subscriptions"
      });
    }

    if (!image) {
      return res.status(400).json({
        success: false,
        error: "No image file provided"
      });
    }

    if (!object) {
      return res.status(400).json({
        success: false,
        error: "No object specified for removal"
      });
    }

    const { public_id } = await cloudinary.uploader.upload(image.path);

    const imageUrl = cloudinary.url(public_id, {
      transformation: [{ effect: `gen_remove:${object}` }],
      resource_type: 'image'
    });

    if (!imageUrl) {
      throw new Error('Failed to process image for object removal');
    }

    await sql`
      INSERT INTO creations (user_id, prompt, content, type)
      VALUES (${userId}, ${`Remove ${object} from image`}, ${imageUrl}, 'image_object_removed')`;

    res.json({
      success: true,
      content: imageUrl
    });

  } catch (error) {
    console.error('API Error:', error.message);

    let apiErrorMessage = error.message;

    if (error.response) {
      try {
        const rawData = error.response.data;
        if (rawData instanceof Buffer) {
          apiErrorMessage = rawData.toString('utf8');
        } else if (typeof rawData === 'object') {
          apiErrorMessage = JSON.stringify(rawData);
        } else {
          apiErrorMessage = String(rawData);
        }
      } catch (parseErr) {
        console.error("Error parsing API error:", parseErr);
      }
    }

    res.status(error.response?.status || 500).json({
      success: false,
      error: apiErrorMessage
    });
  }
};

export const resumeReview = async (req, res) => {
  try {
    const { userId } = req.auth();
    const resume = req.file;
    const plan = req.plan;

    if (plan !== 'premium') {
      return res.json({ success: false, error: "This feature is only available for premium subscriptions" });
    }

    if (resume.size > 5 * 1024 * 1024) {
      return res.json({ success: false, error: "Resume file size exceeds allowed size (5MB)." });
    }

    const dataBuffer = fs.readFileSync(resume.path);
    const pdfData = await pdf(dataBuffer);

    const prompt = `Review the following resumen and provide constructive feedback on its strengths, weaknesses, and areas for improvement. Resumen Content:\n\n${pdfData.text}`

    const response = await AI.chat.completions.create({
      model: "gemini-2.0-flash",
      messages: [{
        role: "user",
        content: prompt,
      }],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const content = response.choices[0].message.content;

    await sql`
      INSERT INTO creations (user_id, prompt, content, type)
      VALUES (${userId}, 'Review the uploaded resume', ${content}, 'resume-review')`;

    res.json({ success: true, content });

  } catch (error) {
    let apiErrorMessage = error.message;

    if (error.response) {
      try {
        const rawData = error.response.data;
        if (rawData instanceof Buffer) {
          apiErrorMessage = rawData.toString('utf8');
        } else if (typeof rawData === 'object') {
          apiErrorMessage = JSON.stringify(rawData);
        } else {
          apiErrorMessage = String(rawData);
        }
      } catch (parseErr) {
        console.error("Error parsing API error:", parseErr);
      }
    }

    console.error("API Error:", apiErrorMessage);

    res
      .status(error.response?.status || 500)
      .json({
        success: false,
        error: apiErrorMessage
      });
  }
};