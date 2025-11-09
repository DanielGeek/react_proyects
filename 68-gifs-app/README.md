# 🎬 Gifs Search App

A modern React application for searching and browsing GIFs using the GIPHY API. Built with TypeScript, Vite, and React 19.

[![Live Demo](https://img.shields.io/badge/🚀-Live%20Demo-4CAF50?style=for-the-badge)](https://aquamarine-gumdrop-5ce3eb.netlify.app/)

![GIFs App Screenshot](https://media3.giphy.com/media/v1.Y2lkPTdkMWQ5NWE0d205eXBxdTZhOWJxa2o3dzV4c2NuOTF6Y3dmOTRpdG8ybW53Mmp2ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/84CRvhy2DJlwA/giphy.gif)

## ✨ Features

- 🔍 **Search Functionality**
  - Real-time search with debouncing
  - Search suggestions based on previous queries
  - Error handling for API requests

- 📋 **Search History**
  - Persistent search history using localStorage
  - Quick access to previous searches
  - Clear history option

- 🖼️ **UI/UX**
  - Responsive grid layout that works on all devices
  - Smooth animations and transitions
  - Loading states and error boundaries
  - Infinite scroll for browsing more results

- ⚙️ **Technical**
  - Type-safe with TypeScript
  - Optimized performance with React 19
  - Environment-based configuration
  - Code splitting and lazy loading

- 🚀 **Development**
  - Fast refresh development experience with Vite
  - ESLint and Prettier for code quality
  - Strict TypeScript configuration

## 🛠️ Technologies Used

- **Frontend Framework**: React 19
- **Language**: TypeScript 5.9
- **Bundler**: Vite 7.1.7
- **HTTP Client**: Axios 1.13.1
- **Styling**: CSS Modules
- **Linting**: 
  - ESLint 9.36.0
  - TypeScript ESLint 8.45.0
  - React Hooks plugin
- **State Management**: React Hooks (useState, useEffect, useReducer)
- **Development Tools**:
  - Vite Dev Server
  - React Developer Tools
  - TypeScript Server

## � Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher) or yarn (v1.22 or higher)
- GIPHY API key (get one from [GIPHY Developers](https://developers.giphy.com/))

## �🚀 Getting Started

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

## �️ Project Structure

```
src/
├── gifs/
│   ├── actions/           # Action creators and async logic
│   │   └── get-gifs-by-query.action.ts  # Handles GIF search logic
│   │
│   ├── api/               # API client configuration
│   │   └── giphy.api.ts   # GIPHY API client setup
│   │
│   ├── components/        # Reusable UI components
│   │   ├── GifList.tsx    # Displays grid of GIFs
│   │   └── PreviousSearches.tsx  # Shows search history
│   │
│   ├── hooks/             # Custom React hooks
│   │   └── useGifs.tsx    # Manages GIFs state and search
│   │
│   └── interfaces/        # TypeScript type definitions
│       ├── gif.interface.ts      # GIF data structure
│       └── giphy.response.ts     # GIPHY API response types
│
├── shared/                # Shared components and utilities
│   ├── components/        # Reusable UI components
│   │   ├── CustomHeader.tsx  # Application header
│   │   └── SearchBar.tsx     # Search input component
│   └── styles/            # Global styles and themes
│
├── counter/               # Example counter feature
│   ├── components/        # Counter components
│   └── hooks/             # Counter related hooks
│
├── mock-data/             # Mock data for development
│   └── gifs.mock.ts       # Sample GIF data
│
├── App.tsx                # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## � Deployment

The application is deployed on Netlify and can be accessed at:
[https://aquamarine-gumdrop-5ce3eb.netlify.app/](https://aquamarine-gumdrop-5ce3eb.netlify.app/)

### How to Deploy

1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the contents of the `dist` directory to your preferred hosting service (Netlify, Vercel, GitHub Pages, etc.)

## 🎮 Usage

### Basic Usage

1. **Search for GIFs**
   - Enter a search term in the search bar
   - Press Enter or click the search button
   - View the results in a responsive grid

2. **View GIF Details**
   - Click on any GIF to view it in a larger size
   - See the title and other details

3. **Search History**
   - Previous searches are saved automatically
   - Click on any previous search to repeat it
   - Clear your search history with the clear button

### Keyboard Shortcuts

- `Enter` - Submit search
- `Escape` - Clear search input
- `Arrow Keys` - Navigate through search history

## 🛠 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_GIPHY_API_KEY=your_api_key_here
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- [ ] Loading state could be more visually appealing
- [ ] Error handling could be more user-friendly
- [ ] Add tests for better code coverage

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [GIPHY API](https://developers.giphy.com/) for providing the GIF data
- [Vite](https://vitejs.dev/) for the amazing build tooling
- [React](https://react.dev/) for the UI library
- [Netlify](https://www.netlify.com/) for the hosting platform

## 📬 Contact

For any questions or feedback, please open an issue on the [GitHub repository](https://github.com/your-username/68-gifs-app).
