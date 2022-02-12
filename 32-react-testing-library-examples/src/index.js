import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { noteReducer } from './reducers/noteReducer';

const store = createStore(noteReducer);

store.dispatch({
  type: '@notes/created',
  payload: {
    content: 'I like the classes with Dani',
    important: true,
    id: 1
  }
})

store.dispatch({
  type: '@notes/created',
  payload: {
    content: 'But i need learn',
    important: false,
    id: 2
  }
})

const App = () => {
  const state = store.getState();

  return (
    <ul>
      {
        state.map(note => {
          return <li key={note.id}>
            {note.content}
            <strong>
              {
                note.important
                  ? 'important'
                  : 'not important'
              }
            </strong>
          </li>
        })
      }
    </ul>
  )
}

const renderApp = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}

renderApp()
store.subscribe(renderApp)