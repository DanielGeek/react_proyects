
import { IResolvers } from '@graphql-tools/utils';
import Todo from '../models/Todo';


const resolvers: IResolvers = {
  Query: {
    async todos() {
      return await Todo.find();
    },
    async todo(_, { id }) {
      return await Todo.findById(id);
    },
  },
  Mutation: {
    async addTodo(_, { input }) {
      try {
        const todo = new Todo(input);
        console.log(todo)
        return await todo.save();
      } catch (error) {
        console.log(error)
      }
    },
    async deleteTodo(_, { id }) {
      return await Todo.findByIdAndDelete(id);
    },
  },
};

export default resolvers;
