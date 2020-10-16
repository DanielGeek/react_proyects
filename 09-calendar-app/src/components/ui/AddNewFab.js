import React from 'react';
// despacho atributos al store para modificar
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

export const AddNewFab = () => {

    // poder acceder al state del store y modificarlo
    const dispatch = useDispatch();

    const handleClickNew = () => {
        // busca mis acción uiOpenModal y asigna true a modalOpen en el state de mi uiReducer
        dispatch(uiOpenModal());
    }
    return (
        <button
            className="btn btn-primary fab"
            onClick={handleClickNew}
        >
            <i className="fas fa-plus"></i>
        </button>
    )
}
