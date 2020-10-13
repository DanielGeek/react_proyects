import Swal from 'sweetalert2';

import { db } from "../firebase/firebase-config";
import { types } from '../types/types';
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from '../helpers/fileUpload';

// react-journal

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

        if (!note.url) {
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

        // refrezca la vista de la nota actualizada
        dispatch(refreshNote(note.id, noteToFirestore));
        Swal.fire('Save', note.title, 'success');
    }
}
// actualiza la nota en el front-end
export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});

// subir img
export const startUploading = ( file ) => {
    return async (dispatch, getState) => {

        const { active:activeNote } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });
        // sube la img a cloudinary y obtengo su url
        const fileUrl = await fileUpload(file);
        // asigno la url a la nota activa
        activeNote.url = fileUrl;
        // actualizo la nota activa en firebase
        dispatch( startSaveNote(activeNote));

        Swal.close();
    }
}

export const startDeleting = ( id ) => {
    return async (dispatch, getState) => {
        // obtengo el id del usuario
        const uid = getState().auth.uid;
        // borro el registro de la bd en firebase
        await db.doc(`${ uid }/journal/notes/${ id }`).delete();
        // borro la nota del state
        dispatch(deleteNote(id));
    }
}
// elimina la nota del state
export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})