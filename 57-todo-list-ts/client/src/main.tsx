import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { configureAppStore } from './store';
import { TodoList } from './TodoList';

import './index.css';

const store = configureAppStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <Provider store={store}>
        <TodoList />
      </Provider>
  </React.StrictMode>
)
