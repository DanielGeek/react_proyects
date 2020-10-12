import { db } from "../firebase/firebase-config";
import { types } from '../types/types';

export const startNewNote = () => {
    return async (dispatch, getState) => {
        // getState obtiene todos los estados
        // obtenego el id del usuario logeado
        const { uid } = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        // creo una nueva nota en la bd de firebase
        const doc = await db.collection(`${ uid }/journal/notes`).add( newNote );

        dispatch(activeNote(doc.id, newNote));
    }
}

export const activeNote = (id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});