import React, { useReducer } from 'react';
import { EntriesContext, entriesReducer } from './';

interface Props {
    children?: React.ReactNode;
}
export interface EntriesState {
    entries: [];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [],
}

export const EntriesProvider:React.FC<Props> = ({ children }) => {

 const [state, dispatch] = useReducer( entriesReducer, ENTRIES_INITIAL_STATE)

 return (
   <EntriesContext.Provider value={{
     ...state,
   }}>
     { children }
   </EntriesContext.Provider>
 )
}