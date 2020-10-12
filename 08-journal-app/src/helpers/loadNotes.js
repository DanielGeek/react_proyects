import { db } from "../firebase/firebase-config";


export const loadNotes = async (uid) => {

    const notesSnap = await db.collection(`${ uid }/journal/notes`).get();
    const notes = [];
    // recorre todas las notas asociada al uid
    notesSnap.forEach( snapHijo => {
        // inserto cada nota en el array de notes
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    console.log(notes);

    return notes;
}