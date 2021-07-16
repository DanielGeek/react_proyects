import { types } from "../../types/types";


export const chatReducer = ( state, action ) => {

  console.log(action);

  switch ( action.type ) {

    case types.usersLoaded:
      return {
        ...state,
        users: [...action.payload]
      }

    default:
        return state;
  }
}