import { gql } from 'apollo-server-express';

const typeDefs = gql`
	type Todo {
		id: ID!
		title: String!
		description: String!
		completed: Boolean!
	}

	type Query {
		todos: [Todo]
		todo: Todo
	}

	type Mutation {
		addTodo(input: TodoInput!): Todo
		removeTodo(id: ID!): Todo
		completeTodo(id: ID!): Todo
		deleteTodo(id: ID!): Todo
	}
	input TodoInput {
		id: ID!
        title: String!
        description: String!
        completed: Boolean!
	}
`;

export default typeDefs;
