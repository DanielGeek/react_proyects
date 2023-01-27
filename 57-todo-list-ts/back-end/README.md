# example mutation

## https://studio.apollographql.com/sandbox/explorer

`
mutation AddTodo {
  addTodo(input: {
    id: 123
    title: "comer"
    description: "Comer pan"
    completed: false
  }) {
    id
    title
    description
    completed
  }
}
`
