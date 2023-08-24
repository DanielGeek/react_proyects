export const getEnvVariables = () => {

  // import.meta.env;
  const VITE_MODE = import.meta.env.MODE;

  return {
    // ...import.meta.env
    VITE_MODE: import.meta.env.MODE,
    VITE_API_URL: VITE_MODE == 'development' ? "http://localhost:4000/api" : import.meta.env.VITE_API_URL
  }
}