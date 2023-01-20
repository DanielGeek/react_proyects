const initialState = {
    todos: []
  }
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.text]
        }
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: state.todos.filter((_, i) => i !== action.index)
        }
      default:
        return state
    }
  }
  export default todoReducer;
  