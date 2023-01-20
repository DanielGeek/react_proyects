export const addTodo = (text) => {
    return {
      type: 'ADD_TODO',
      text
    }
  }
  export const removeTodo = (index) => {
    return {
      type: 'REMOVE_TODO',
      index
    }
  }
  