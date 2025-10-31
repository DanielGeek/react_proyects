# Gifs Search App

A modern React application for searching and browsing GIFs using the GIPHY API. Built with TypeScript, Vite, and React 19.

![GIFs App Screenshot](https://media3.giphy.com/media/v1.Y2lkPTdkMWQ5NWE0d205eXBxdTZhOWJxa2o3dzV4c2NuOTF6Y3dmOTRpdG8ybW53Mmp2ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/84CRvhy2DJlwA/giphy.gif)

## ✨ Features

- 🔍 Search for GIFs using the GIPHY API
- 📋 View search history with quick access to previous searches
- 🖼️ Responsive grid layout for optimal viewing on all devices
- ⚡ Fast and efficient rendering with React 19
- 🎨 Clean and modern user interface
- 📱 Mobile-friendly design
- 🚀 Built with Vite for fast development and production builds

## 🛠️ Technologies Used

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Bundler**: Vite
- **HTTP Client**: Axios
- **Styling**: CSS Modules
- **Linting**: ESLint with TypeScript support
- **State Management**: React Hooks (useState)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- GIPHY API key (get one from [GIPHY Developers](https://developers.giphy.com/))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/68-gifs-app.git
   cd 68-gifs-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your GIPHY API key:
   ```env
   VITE_GIPHY_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎯 Project Structure

```
src/
├── gifs/
│   ├── actions/           # Action creators and async logic
│   ├── api/               # API client configuration
│   ├── components/        # Reusable UI components
│   └── interfaces/        # TypeScript type definitions
├── shared/                # Shared components and utilities
├── App.tsx               # Main application component
└── main.tsx              # Application entry point
```

## 📝 Usage

1. Enter a search term in the search bar and press Enter or click the search button
2. View the GIFs that match your search query
3. Click on any GIF to view it in a larger size
4. Access your previous searches below the search bar
5. Click on any previous search term to quickly search again

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [GIPHY API](https://developers.giphy.com/) for providing the GIF data
- [Vite](https://vitejs.dev/) for the amazing build tooling
- [React](https://react.dev/) for the UI library
