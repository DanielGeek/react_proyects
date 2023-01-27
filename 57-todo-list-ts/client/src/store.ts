import { createSlice, configureStore, getDefaultMiddleware, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

const todoSlice = createSlice({
  name: 'todo',
  initialState: { todos: [] } as TodoState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now().toString(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      },
  }
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export const configureAppStore = () => {
  const store = configureStore({
    reducer: todoSlice.reducer,
    middleware: [...getDefaultMiddleware()]
  });

  return store;
};