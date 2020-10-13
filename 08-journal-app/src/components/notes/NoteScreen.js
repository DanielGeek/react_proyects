import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NotesAppBar } from './NotesAppBar';
import { useForm } from '../../hooks/useForm';
import { activeNote } from '../../actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    // selecciono del store el state de nota activa
    const { active: note } = useSelector(state => state.notes);
    // uso mi hook personalizado para el formulario y agregar al estado la nota
    const [formValues, handleInputChange, reset] = useForm(note);
    // desestructuro para obtener el body y title
    const { body, title } = formValues;

    // almaceno el id actual para comparar si cambia
    const activeId = useRef(note.id);

    // se ejecuta cada vez que cambien los datos del formulario
    useEffect(() => {
        if (note.id !== activeId.current) {
            //si cambio el id, obtengo la nueva nota en mi hook
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset])

    // cuando cambie el formValues ejecuta el efecto
    useEffect(() => {
        // actualiza la nota activa en el state de Redux
        dispatch(activeNote(formValues.id, { ...formValues }))

    }, [formValues, dispatch])


    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                {
                    // si la img existe la muestro
                    (note.url)
                    && (
                        <div className="notes__image">
                            <img
                                src={note.url}
                                alt="imagen"
                            />
                        </div>
                    )
                }

            </div>

        </div>
    )
}
