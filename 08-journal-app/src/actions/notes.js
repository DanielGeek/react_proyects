import { db } from "../firebase/firebase-config";
import { types } from '../types/types';
import { loadNotes } from "../helpers/loadNotes";

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
        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        dispatch(activeNote(doc.id, newNote));
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {

        const notes = await loadNotes(uid);
        // guardar en el state de Redux las notas del user
        dispatch(setNotes(notes));

    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});
// guarda la nota activa
export const startSaveNote = (note) => {
    return async (dispatch, getState) => {

        // obtengo el uid del state
        const { uid } = getState().auth;

        if( !note.url) {
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
    }
}