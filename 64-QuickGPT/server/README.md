# QuickGPT Server

![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248)
![OpenAI](https://img.shields.io/badge/AI-OpenAI-412991)
![Stripe](https://img.shields.io/badge/Payment-Stripe-008CDD)

## 📖 About This Project

QuickGPT Server is the backend API for the QuickGPT AI-powered chat application. Built with Node.js and Express, it provides a robust REST API that handles user authentication, chat management, AI text generation, AI image generation, credit management, and payment processing through Stripe.

The server integrates with OpenAI's GPT models for intelligent text generation, ImageKit for AI-powered image generation and storage, and MongoDB for persistent data storage. It implements a credit-based system where users purchase subscription plans to access AI services.

## 🌐 Live Server

**Production URL**: https://quick-gpt-server-seven-nu.vercel.app/

## ✨ Key Features

### 🔐 Authentication & User Management
- **JWT Authentication**: Secure token-based authentication system
- **User Registration**: Create new user accounts with encrypted passwords
- **User Login**: Authenticate users and issue JWT tokens
- **Password Encryption**: Bcrypt hashing for secure password storage
- **Protected Routes**: Middleware to verify JWT tokens on protected endpoints

### 💬 Chat Management
- **Create Chats**: Initialize new chat sessions for users
- **Get Chats**: Retrieve all chats for a specific user, sorted by most recent
- **Delete Chats**: Remove unwanted chat conversations
- **Persistent Storage**: All chats stored in MongoDB with timestamps

### 🤖 AI Message Processing
- **Text Generation**: Integration with OpenAI's Gemini 2.0 Flash model
- **Image Generation**: AI-powered image creation using ImageKit
- **Credit Deduction**: Automatic credit deduction (1 for text, 2 for images)
- **Message History**: Store all messages with timestamps and metadata
- **Image Publishing**: Option to publish generated images to community gallery

### 💳 Credits & Payment System
- **Subscription Plans**: Three tiers (Basic, Pro, Premium) with different credit amounts
- **Stripe Integration**: Secure payment processing with Stripe Checkout
- **Webhook Handling**: Process payment confirmations via Stripe webhooks
- **Transaction Tracking**: Store all transactions in database
- **Credit Balance**: Real-time credit tracking per user

### 🖼️ Image Management
- **ImageKit Integration**: Cloud-based image storage and AI generation
- **Image Upload**: Automatic upload of generated images to ImageKit
- **Image Optimization**: Images optimized for web delivery
- **Community Gallery**: Retrieve published images from all users

## 🛠️ Technologies Used

### Backend Framework
- **Node.js**: JavaScript runtime for server-side development
- **Express 5.1.0**: Fast, minimalist web framework for Node.js
- **Mongoose 8.19.1**: MongoDB object modeling for Node.js

### AI & Image Services
- **OpenAI 6.5.0**: Integration with OpenAI's GPT models (Gemini 2.0 Flash)
- **ImageKit 7.1.1**: AI image generation and cloud storage service

### Payment Processing
- **Stripe 19.1.0**: Payment processing and subscription management
- **Svix 1.77.0**: Webhook signature verification

### Authentication & Security
- **JSON Web Token 9.0.2**: Token-based authentication
- **Bcrypt.js 3.0.2**: Password hashing and encryption
- **CORS 2.8.5**: Cross-Origin Resource Sharing middleware

### Utilities
- **Axios 1.12.2**: HTTP client for external API requests
- **Dotenv 17.2.3**: Environment variable management
- **Nodemon 3.1.10**: Development server with auto-restart

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database (local or cloud)
- OpenAI API key
- ImageKit account and credentials
- Stripe account and API keys

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 64-QuickGPT/server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.development` file with your configuration:
```env
# Server Configuration
PORT=3000

# Database
MONGODB_URI=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# ImageKit
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

4. Start the development server:
```bash
npm run server
```

The server will start on `http://localhost:3000`

### Production Deployment

```bash
npm start
```

## 📁 Project Structure

```
server/
├── configs/
│   ├── db.js              # MongoDB connection configuration
│   ├── imageKit.js        # ImageKit client setup
│   └── openai.js          # OpenAI client configuration
├── controllers/
│   ├── chatController.js      # Chat CRUD operations
│   ├── creditController.js    # Credit plans and purchases
│   ├── messageController.js   # AI message processing
│   ├── userController.js      # User authentication
│   └── webhook.js             # Stripe webhook handler
├── middlewares/
│   └── auth.js            # JWT authentication middleware
├── models/
│   ├── Chat.js            # Chat schema and model
│   ├── Transaction.js     # Transaction schema and model
│   └── User.js            # User schema and model
├── routes/
│   ├── chatRoutes.js      # Chat endpoints
│   ├── creditRoutes.js    # Credit and payment endpoints
│   ├── messageRoutes.js   # Message endpoints
│   └── userRoutes.js      # User authentication endpoints
├── .env.development       # Environment variables
├── package.json           # Dependencies and scripts
└── server.js              # Application entry point
```

## 🔌 API Endpoints

### Authentication
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - Login and receive JWT token
- `GET /api/user/profile` - Get user profile (protected)

### Chat Management
- `POST /api/chat/create` - Create a new chat (protected)
- `GET /api/chat/all` - Get all user chats (protected)
- `DELETE /api/chat/delete` - Delete a chat (protected)

### Messages
- `POST /api/message/text` - Generate AI text response (protected)
- `POST /api/message/image` - Generate AI image (protected)
- `GET /api/message/community` - Get published community images

### Credits & Payments
- `GET /api/credit/plans` - Get available subscription plans
- `POST /api/credit/purchase` - Purchase a plan (creates Stripe checkout)
- `POST /api/stripe` - Stripe webhook endpoint

## 💾 Database Models

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  credits: Number (default: 5),
  createdAt: Date,
  updatedAt: Date
}
```

### Chat Model
```javascript
{
  userId: ObjectId (ref: User),
  userName: String,
  name: String,
  messages: [{
    role: String,
    content: String,
    timestamp: Number,
    isImage: Boolean,
    isPublished: Boolean
  }],
  createdAt: Date,
  updatedAt: Date
}
```

### Transaction Model
```javascript
{
  userId: ObjectId (ref: User),
  planId: String,
  amount: Number,
  credits: Number,
  isPaid: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

## 💰 Subscription Plans

### Basic Plan
- **Price**: $10
- **Credits**: 100
- **Features**: 100 text generations, 50 image generations, Standard support, Access to basic models

### Pro Plan
- **Price**: $20
- **Credits**: 500
- **Features**: 500 text generations, 200 image generations, Priority support, Access to pro models, Faster response time

### Premium Plan
- **Price**: $30
- **Credits**: 1000
- **Features**: 1000 text generations, 500 image generations, 24/7 VIP support, Access to premium models, Dedicated account manager

## 🔒 Security Features

- **Password Hashing**: All passwords encrypted with bcrypt
- **JWT Tokens**: Secure token-based authentication
- **CORS Protection**: Configured CORS for allowed origins
- **Environment Variables**: Sensitive data stored in environment variables
- **Webhook Verification**: Stripe webhook signature verification
- **Protected Routes**: Middleware authentication on sensitive endpoints

## 🧪 Testing

Test the API using tools like Postman or cURL:

```bash
# Health check
curl http://localhost:3000/

# Register user
curl -X POST http://localhost:3000/api/user/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'

# Login
curl -X POST http://localhost:3000/api/user/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

## 📝 License

This project is licensed under the ISC License.
