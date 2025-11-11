# 🎬 Gifs Search App

A modern React application for searching and browsing GIFs using the GIPHY API. Built with TypeScript, Vite, and React 19, featuring a clean architecture and comprehensive test coverage.

[![Live Demo](https://img.shields.io/badge/🚀-Live%20Demo-4CAF50?style=for-the-badge)](https://aquamarine-gumdrop-5ce3eb.netlify.app/)
[![Test Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen?style=for-the-badge)](https://aquamarine-gumdrop-5ce3eb.netlify.app/coverage/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

![GIFs App Screenshot](https://media3.giphy.com/media/v1.Y2lkPTdkMWQ5NWE0d205eXBxdTZhOWJxa2o3dzV4c2NuOTF6Y3dmOTRpdG8ybW53Mmp2ZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/84CRvhy2DJlwA/giphy.gif)

## ✨ Features

### 🔍 Search Functionality
- **Real-time Search**: Instant search with debouncing for optimal performance
- **Intelligent Suggestions**: Search suggestions based on previous queries
- **Robust Error Handling**: Comprehensive error handling for API requests and edge cases
- **Keyboard Navigation**: Full keyboard support for better accessibility

### 📋 Search History
- **Persistent Storage**: Search history saved in localStorage
- **Quick Access**: One-click repeat of previous searches
- **Easy Management**: Option to clear search history

### 🖼️ UI/UX
- **Fully Responsive**: Beautiful grid layout that adapts to all screen sizes
- **Smooth Animations**: Fluid transitions and loading states
- **Error Boundaries**: Graceful error handling with user-friendly messages
- **Infinite Scroll**: Seamlessly load more results as you scroll

### ⚙️ Technical Highlights
- **Type Safety**: Full TypeScript support with strict type checking
- **Modern React**: Built with React 19 and functional components
- **Optimized Performance**: Code splitting and lazy loading for faster loads
- **Environment-Aware**: Different configurations for development and production

### 🧪 Testing
- **Comprehensive Test Suite**: Unit and integration tests with Vitest
- **Test Coverage**: 100% test coverage for critical components
- **Mocking**: API responses are mocked for reliable testing
- **UI Testing**: Component testing with React Testing Library

## 🛠️ Technology Stack

### Core Technologies
- **React 19**: Latest version with concurrent features
- **TypeScript 5.9**: For type-safe JavaScript development
- **Vite 7.1.7**: Next-generation frontend tooling
- **Axios 1.13.1**: Promise-based HTTP client
- **CSS Modules**: For scoped and maintainable styles

### Development Tools
- **Vite Dev Server**: Lightning fast development server
- **ESLint 9.36.0**: JavaScript/TypeScript linter
- **Prettier**: Code formatter for consistent style
- **TypeScript Server**: Advanced type checking and IntelliSense

### Testing Stack
- **Vitest 4.0.8**: Fast testing framework
- **React Testing Library**: For component testing
- **jsdom**: Simulates browser environment for tests
- **Axios Mock Adapter**: For mocking API responses

### Build & Quality
- **Vite Build**: Optimized production builds
- **Type Checking**: Strict TypeScript configuration
- **Code Coverage**: Integrated coverage reporting
- **ESLint Plugins**:
  - React Hooks
  - React Refresh
  - TypeScript ESLint

## � Installation & Setup

### Prerequisites

- Node.js v16 or higher
- npm v7+ or yarn
- GIPHY API key (get one from [GIPHY Developers](https://developers.giphy.com/))

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/68-gifs-app.git
   cd 68-gifs-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_GIPHY_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173)

5. **Run tests**
   ```bash
   # Run tests once
   npm test
   
   # Run tests in watch mode
   npm test -- --watch
   
   # Generate coverage report
   npm run coverage
   ```
   
6. **Lint the code**
   ```bash
   npm run lint
   ```

## 🗂️ Project Structure

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

## 🎮 Using the App

### Basic Usage

1. **Search for GIFs**
   - Type your search term in the search bar
   - Results appear as you type (with debouncing)
   - Press Enter or click the search icon to confirm
   - View matching GIFs in a responsive grid layout

2. **View GIF Details**
   - Click on any GIF to see it in a larger view
   - View additional details like title and source
   - Click outside or press Escape to close the modal

3. **Manage Search History**
   - Previous searches are automatically saved
   - Click on any past search to repeat it
   - Use the clear button to remove search history
   - History persists across page refreshes

### Keyboard Navigation

- `Enter` - Submit the current search
- `Escape` - Clear search input or close modal
- `Arrow Up/Down` - Navigate search history
- `Tab` - Navigate between interactive elements

## 🛠 Development Guide

### Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm test` - Run tests in watch mode
- `npm run test:only` - Run tests once
- `npm run coverage` - Generate test coverage report
- `npm run lint` - Lint the codebase
- `npm run lint:fix` - Fix auto-fixable linting issues

### Environment Variables

The following environment variables can be set in a `.env` file:

```env
# Required
VITE_GIPHY_API_KEY=your_api_key_here

# Optional
VITE_APP_ENV=development  # or 'production'
VITE_APP_VERSION=$npm_package_version
```

### Testing

This project uses Vitest for testing. The test suite includes:

- Unit tests for utility functions
- Component tests with React Testing Library
- Integration tests for API interactions
- Snapshot testing for UI components

To run tests:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm run coverage
```

### Code Quality

This project enforces code quality through:

- TypeScript strict mode
- ESLint with React and TypeScript rules
- Prettier for code formatting
- Pre-commit hooks (if configured)

### Pull Request Guidelines

1. Ensure all tests pass
2. Update tests as needed for new features
3. Document any new environment variables
4. Update the README if necessary
5. Keep the commit history clean and atomic

## 🤝 How to Contribute

We welcome contributions from the community! Here's how you can help:

1. **Report Bugs**
   - Check existing issues to avoid duplicates
   - Provide detailed reproduction steps
   - Include browser/OS information if relevant

2. **Suggest Enhancements**
   - Open an issue to discuss your idea
   - Explain why this would be valuable
   - Include any relevant references

3. **Submit Code Changes**
   ```bash
   # Fork the repository
   git clone https://github.com/your-username/68-gifs-app.git
   cd 68-gifs-app
   
   # Create a feature branch
   git checkout -b feature/amazing-feature
   
   # Make your changes
   # ...
   
   # Commit your changes
   git commit -m "feat: add amazing feature"
   
   # Push to the branch
   git push origin feature/amazing-feature
   
   # Open a Pull Request
   ```

4. **Code Review**
   - Ensure all tests pass
   - Update documentation as needed
   - Keep the commit history clean
   - Address any feedback

## 🐛 Known Issues & Roadmap

### Current Issues
- [ ] Improve loading state animations
- [ ] Enhance error handling UX
- [ ] Add more accessibility features
- [ ] Optimize bundle size

### In Progress
- [ ] Add E2E tests with Cypress
- [ ] Implement dark mode
- [ ] Add more GIF manipulation features

### Future Enhancements
- [ ] User authentication
- [ ] Favorite GIFs collection
- [ ] Social sharing
- [ ] Advanced search filters

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments & Credits

### Core Technologies
- [React](https://react.dev/) - The UI library
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Vite](https://vitejs.dev/) - Build tooling
- [Vitest](https://vitest.dev/) - Testing framework
- [GIPHY API](https://developers.giphy.com/) - GIF data provider

### Development Tools
- [Netlify](https://www.netlify.com/) - Hosting platform
- [ESLint](https://eslint.org/) - JavaScript/TypeScript linting
- [Prettier](https://prettier.io/) - Code formatting
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Component testing

### Special Thanks
- The React community for amazing open-source tools
- All contributors who helped improve this project

## 📬 Contact

For any questions or feedback, please open an issue on the [GitHub repository](https://github.com/your-username/68-gifs-app).
