import { types } from "../../types/types";


// const initialState = {
//   uid: '', // UID user to send message
//   activeChat: null,
//   users: [], // All users from bd
//   messages: [], // chat selected
// }


export const chatReducer = ( state, action ) => {

  switch ( action.type ) {

    case types.usersLoaded:
      return {
        ...state,
        users: [...action.payload]
      }

    case types.activedChat:
      if ( state.activeChat === action.payload ) return state;

      return {
        ...state,
        activeChat: action.payload,
        messages: []
      }

    case types.newMessage:
      if ( state.activeChat === action.payload.from ||
            state.activeChat === action.payload.to
        ) {
          return {
            ...state,
            messages : [ ...state.messages , action.payload ]
          }
      } else {
        return state;
      }

    case types.loadedMessages:
      return {
        ...state,
        messages: [ ...action.payload ]
      }

    default:
        return state;
  }
}