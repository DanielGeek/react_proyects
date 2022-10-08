import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';

import { EntriesContext, entriesReducer } from './';

interface Props {
    children?: React.ReactNode;
}
export interface EntriesState {
    entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
      {
        _id: uuidv4(),
        description: 'Pending: Excepteur mollit nisi eu do sunt sit ut ut mollit quis aliquip.',
        status: 'pending',
        createAt: Date.now(),
      },
      {
        _id: uuidv4(),
        description: 'In-Progress: Eu mollit eiusmod est elit in duis enim id.',
        status: 'in-progress',
        createAt: Date.now() - 1000000,
      },
      {
        _id: uuidv4(),
        description: 'Finished: Consectetur aliquip incididunt sit laboris aute sunt do ex Lorem minim ullamco.',
        status: 'finished',
        createAt: Date.now() - 100000,
      },
    ],
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