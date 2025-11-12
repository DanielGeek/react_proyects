# React Hooks Examples

A collection of React examples demonstrating various React Hooks and custom hooks in action. This project showcases different React patterns and best practices using functional components and hooks.

## 🚀 Features

- **useState**: Interactive traffic light component with state management
- **useEffect**: Automatic traffic light with timing effects
- **Custom Hooks**: Reusable hooks for counter and Pokemon data fetching
- **useRef**: Form input focus management
- **TypeScript**: Full TypeScript support for type safety
- **Tailwind CSS**: Modern styling with utility-first CSS

## 🛠️ Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- PokeAPI (for Pokemon examples)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/69-hooks-app.git
   cd 69-hooks-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🎯 Examples

### 1. useState - Traffic Light
A simple traffic light component that changes colors when buttons are clicked, demonstrating basic state management.

### 2. useEffect - Automatic Traffic Light
An enhanced traffic light that automatically cycles through colors using the `useEffect` hook for side effects.

### 3. Custom Hooks - Pokemon Viewer
Demonstrates creating and using custom hooks to fetch and display Pokemon data from the PokeAPI.

### 4. useRef - Focus Management
Shows how to use `useRef` to manage focus on form inputs programmatically.

## 📂 Project Structure

```
src/
├── 01-useState/         # Basic state management examples
│   └── TrafficLight.tsx
├── 02-useEffect/        # Side effect examples
│   ├── TrafficLightWithEffect.tsx
│   └── TrafficLightWithHook.tsx
├── 03-examples/         # Complex examples
│   └── PokemonPage.tsx
├── 04-useRef/           # Refs examples
│   └── FocusScreen.tsx
├── hooks/               # Custom hooks
│   ├── useCounter.tsx
│   ├── usePokemon.tsx
│   └── useTrafficLight.tsx
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Documentation](https://reactjs.org/docs/hooks-intro.html)
- [Tailwind CSS](https://tailwindcss.com/)
- [PokeAPI](https://pokeapi.co/)
