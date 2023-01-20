import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../actions';

import './todoList.css';

function TodoList() {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleChange = e => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <div className="todo-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
            data-testid="todo-input"
            className="todo-input"
            type="text"
            value={newTodo}
            onChange={handleChange}
        />
        <button data-testid="todo-button" className="todo-button" type="submit">Add Todo</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li className="todo-item" key={index}>
            <div data-testid="todo-list">
              {todo}
            </div>
            <button className="remove-button" onClick={() => dispatch(removeTodo(index))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
