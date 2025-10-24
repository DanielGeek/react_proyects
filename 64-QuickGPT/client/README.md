# QuickGPT - AI-Powered Chat Application

![QuickGPT](https://img.shields.io/badge/React-19.1.1-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.14-38bdf8)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646cff)
![License](https://img.shields.io/badge/license-MIT-green)

## 📖 About This Project

QuickGPT is a modern, full-stack AI-powered chat application that combines conversational AI with image generation capabilities. Built with React and powered by OpenAI's GPT models and ImageKit's AI image generation, this application provides users with an intuitive interface to interact with artificial intelligence for both text-based conversations and creative image generation.

The application features a credit-based system where users can purchase subscription plans to access AI services, manage multiple chat sessions simultaneously, and share their AI-generated images with a community gallery.

## 🌐 Live Client

**Production URL**: quick-gpt-nine-tau.vercel.app

## ✨ Key Features

### 🤖 AI Capabilities
- **Intelligent Text Generation**: Powered by Gemini 2.0 Flash model for natural, context-aware conversations
- **AI Image Generation**: Create high-quality images from text descriptions using ImageKit AI
- **Real-time Responses**: Instant AI responses with streaming support
- **Markdown Support**: Rich text formatting with code syntax highlighting using Prism.js

### 💬 Chat Management
- **Multiple Chat Sessions**: Create and manage unlimited chat conversations
- **Chat History**: Persistent storage of all conversations with timestamps
- **Search Functionality**: Quickly find specific chats or messages
- **Chat Deletion**: Remove unwanted conversations
- **Auto-naming**: Chats are automatically named based on content

### 🎨 User Interface
- **Modern Design**: Clean, intuitive interface with gradient backgrounds
- **Dark/Light Theme**: Toggle between dark and light modes for comfortable viewing
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile
- **Sidebar Navigation**: Easy access to all chats and features
- **Mobile Menu**: Collapsible sidebar for mobile devices

### 💳 Credits & Subscriptions
- **Credit System**: Pay-per-use model (1 credit for text, 2 credits for images)
- **Multiple Plans**: Basic (100 credits), Pro (500 credits), Premium (1000 credits)
- **Stripe Integration**: Secure payment processing
- **Real-time Balance**: Track your credit usage in real-time

### 🌐 Community Features
- **Image Gallery**: Browse AI-generated images from the community
- **Publishing**: Share your generated images with others
- **User Profiles**: See who created each image

### 🔐 Authentication & Security
- **User Authentication**: Secure login and registration system
- **JWT Tokens**: Token-based authentication for API requests
- **Protected Routes**: Secure access to user-specific features

## 🛠️ Technologies Used

### Frontend Stack
- **React 19.1.1**: Latest version of React for building the user interface
- **React Router DOM 7.9.4**: Client-side routing and navigation
- **TailwindCSS 4.1.14**: Utility-first CSS framework for styling
- **Vite 7.1.7**: Next-generation frontend build tool for fast development
- **Axios 1.12.2**: HTTP client for API requests
- **React Hot Toast 2.6.0**: Beautiful toast notifications
- **React Markdown 10.1.0**: Markdown rendering for AI responses
- **Prism.js 1.30.0**: Syntax highlighting for code blocks
- **Moment.js 2.30.1**: Date and time formatting

### Development Tools
- **ESLint 9.36.0**: Code linting and quality assurance
- **Vite Plugin React 5.0.4**: React support for Vite
- **TypeScript Types**: Type definitions for React

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Backend server running (see server README)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 64-QuickGPT/client
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.development` file with your configuration:
```env
VITE_API_URL=http://localhost:3000/api
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📁 Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons, and styles
│   ├── components/     # Reusable React components
│   │   ├── ChatBox.jsx    # Main chat interface
│   │   ├── Message.jsx    # Individual message component
│   │   └── Sidebar.jsx    # Navigation sidebar
│   ├── context/        # React Context for state management
│   │   └── AppContext.jsx # Global app state
│   ├── pages/          # Page components
│   │   ├── Community.jsx  # Community gallery
│   │   ├── Credits.jsx    # Credits and subscriptions
│   │   ├── Loading.jsx    # Loading screen
│   │   └── Login.jsx      # Authentication page
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Application entry point
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
```

## 🎯 Usage

1. **Sign Up/Login**: Create an account or log in to access the application
2. **Purchase Credits**: Buy a subscription plan to get credits
3. **Start Chatting**: Create a new chat and start conversing with AI
4. **Generate Images**: Use the image generation feature to create AI art
5. **Manage Chats**: Switch between chats, search, and delete as needed
6. **Share Images**: Publish your generated images to the community gallery

## 📚 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
