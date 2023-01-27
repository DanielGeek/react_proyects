import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Todo, TodoState } from './store';
import { toggleTodo, addTodo, removeTodo } from './store';

export const TodoList: React.FC = () => {
  const todos = useSelector<TodoState, Todo[]>(state => state.todos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleTodoClick = useCallback((id: string) => {
    dispatch(toggleTodo(id));
  }, [dispatch]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleAddTodo = useCallback(() => {
    if (inputValue) {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  }, [dispatch, inputValue]);

  const handleRemoveTodo = useCallback((id: string) => {
    dispatch(removeTodo(id));
  }, [dispatch]);

  return (
    <div>
      <div className='container'>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul className='todo-list'>
        {todos.map(todo => (
          <li
            className="todo-item"
            key={todo.id}
            onClick={() => handleTodoClick(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};