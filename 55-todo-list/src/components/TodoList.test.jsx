import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import TodoList from './TodoList';

describe('TodoList', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  });
  it('adds a todo', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
    const input = getByTestId('todo-input');
    const button = getByTestId('todo-button');
    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(button);
    const todoList = getByTestId('todo-list');
    expect(todoList.textContent).toBe('Test Todo');
  });
});
