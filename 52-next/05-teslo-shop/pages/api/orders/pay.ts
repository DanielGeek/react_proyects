import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

type Data = {
    message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch ( req.method ) {
      case 'POST':
          return payOrder(req, res);
    
      default:
          res.status(200).json({ message: 'Bad request' })
    }
}

const getPaypalBearerToken = async (): Promise<string | null> => {
    try {

    const { NEXT_PUBLIC_PAYPAL_CLIENT_ID, PAYPAL_SECRET } = process.env;

    const base64Token = Buffer.from( NEXT_PUBLIC_PAYPAL_CLIENT_ID + ":" +  PAYPAL_SECRET).toString("base64");
    const response = await fetch(process.env.PAYPAL_OAUTH_URL || "", {
                       method: "POST",
                       headers: {
                          "Content-Type": 
                             "application/x-www-form-urlencoded",
                           Accept: "application/json",
                           Authorization: "Basic " + base64Token
                       },
                       body: "grant_type=client_credentials"
                    });

    const { access_token } = await response.json();
    return access_token;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
      } else {
        console.log(error);
      }
      return null;
    }
  };

const payOrder = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    const paypalBearerToken = await getPaypalBearerToken();

    if ( !paypalBearerToken ) {
        return res.status(400).json({ message: 'Could not confirm paypal token' })
    }
    
    return res.status(200).json({ message: paypalBearerToken })
}