import { combineReducers } from "redux";
import { RPSReducer } from "./RPSReducer";

// combina los reducers que seran mostrados en el state de mi store
export const rootReducer = combineReducers({
    RPS: RPSReducer
})