import { combineReducers } from "redux";
import { calendarReducer } from "./calendarReducer";

import { uiReducer } from "./uiReducer";

// combina los reducers que seran mostrados en el state de mi store
export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer
    // TODO: CalendarReducer
})