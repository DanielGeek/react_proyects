# First Steps React - Shopping Cart Demo

## 📋 Project Overview

This is a React learning project that demonstrates fundamental React concepts through a simple shopping cart application. The project showcases component composition, state management with hooks, TypeScript integration, CSS modules, and comprehensive testing practices.

## ✨ Features

- **Interactive Shopping Cart**: Dynamic item counter with add/remove functionality
- **State Management**: Uses React hooks (`useState`) for managing component state
- **TypeScript Integration**: Full TypeScript support with proper type definitions
- **CSS Modules**: Scoped styling using CSS modules to avoid style conflicts
- **Comprehensive Testing**: Unit tests with Vitest and React Testing Library
- **Test Coverage**: Configured with Vitest coverage reporting
- **Modern Build Tools**: Vite for fast development and optimized production builds

## 🛠️ Tech Stack

- **React 19.1.1**: Latest React version with modern features
- **TypeScript 5.9.3**: Type-safe JavaScript development
- **Vite 7.1.7**: Next-generation frontend tooling
- **Vitest 4.0.3**: Fast unit testing framework
- **React Testing Library 16.3.0**: Testing utilities for React components
- **SWC**: Fast TypeScript/JavaScript compiler for React Fast Refresh
- **ESLint**: Code linting and quality assurance

## 📁 Project Structure

```
67-first-steps-react/
├── src/
│   ├── shopping-cart/
│   │   ├── ItemCounter.tsx          # Main counter component
│   │   ├── ItemCounter.test.tsx     # Component tests
│   │   ├── ItemCounter.module.css   # Scoped styles
│   │   └── ItemCounter.css          # Alternative styles
│   ├── helpers/
│   │   ├── math.helper.ts           # Math utility functions
│   │   └── math.helper.test.ts      # Helper tests
│   ├── FirstStepsApp.tsx            # Main shopping cart app
│   ├── FirstStepsApp.test.tsx       # App tests
│   ├── MyAwesomeApp.tsx             # Demo component with React basics
│   ├── MyAwesomeApp.test.tsx        # Demo component tests
│   └── main.tsx                     # Application entry point
├── public/                          # Static assets
├── coverage/                        # Test coverage reports
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript configuration
├── eslint.config.js                 # ESLint configuration
└── package.json                     # Project dependencies
```

## 🧩 Components

### FirstStepsApp
The main application component that renders a shopping cart with multiple items. It demonstrates:
- Component composition
- Props passing
- Array mapping to render multiple components
- TypeScript interfaces for type safety

### ItemCounter
A reusable counter component for individual cart items featuring:
- **Props**: `name` (string) and `quantity` (number, default: 1)
- **State Management**: Local state for tracking count
- **User Interactions**: Increment (+1) and decrement (-1) buttons
- **Conditional Styling**: Item name turns red when quantity is 1
- **Validation**: Prevents count from going below 1

### MyAwesomeApp
A demonstration component showcasing React fundamentals:
- Variable interpolation in JSX
- Conditional rendering
- Array rendering
- Object serialization
- Inline and external styling
- TypeScript type definitions for styles

## 🧪 Testing

The project includes comprehensive test coverage using Vitest and React Testing Library:

### Test Files
- `ItemCounter.test.tsx`: Tests for counter component functionality
- `FirstStepsApp.test.tsx`: Tests for main app component with mocked dependencies
- `MyAwesomeApp.test.tsx`: Tests for demo component rendering
- `math.helper.test.ts`: Tests for utility functions

### Test Features
- Component rendering tests
- User interaction tests (button clicks)
- Snapshot testing
- Mock implementations
- Style validation
- Props validation

### Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run coverage
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 67-first-steps-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm test` - Run tests in watch mode
- `npm run test:ui` - Open Vitest UI for interactive testing
- `npm run coverage` - Generate test coverage report

## 📚 Learning Concepts

This project demonstrates the following React concepts:

1. **Component Architecture**: Building reusable, composable components
2. **Props & State**: Managing data flow and component state
3. **Hooks**: Using `useState` for state management
4. **TypeScript**: Type-safe React development with interfaces
5. **CSS Modules**: Scoped styling to prevent CSS conflicts
6. **Event Handling**: Responding to user interactions
7. **Conditional Rendering**: Dynamic UI based on state
8. **List Rendering**: Mapping arrays to components
9. **Testing**: Writing unit tests for React components
10. **Mocking**: Isolating components in tests

## 🎨 Styling Approach

The project uses CSS Modules for component styling:
- Scoped styles prevent global CSS conflicts
- Class names are automatically generated and unique
- Supports both camelCase and kebab-case class names
- Inline styles used for dynamic styling based on state

## 🔧 Configuration

### Vite Configuration
- React plugin with SWC for fast refresh
- Vitest integration for testing
- jsdom environment for DOM testing
- Global test utilities enabled

### TypeScript Configuration
- Strict type checking enabled
- Modern ES module support
- React JSX transform
- Path aliases configured

## 📝 Notes

- The project uses React 19.1.1 with the latest features
- SWC is used instead of Babel for faster compilation
- Test coverage reports are generated in the `coverage/` directory
- The main app (`FirstStepsApp`) is currently active in `main.tsx`
- `MyAwesomeApp` is commented out but available for reference

## 🤝 Contributing

This is a learning project. Feel free to experiment with:
- Adding new features to the shopping cart
- Implementing additional components
- Improving test coverage
- Enhancing styling and UI/UX
- Adding new utility functions

## 📄 License

This project is for educational purposes.
