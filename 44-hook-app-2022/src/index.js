import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>
);

