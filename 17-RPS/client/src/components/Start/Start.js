import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { showHome, setUpdateGamer1 } from '../../actions/RPS';
import './Start.css';

export const Start = ({ gamer1, setGamer1 }) => {

    const dispatch = useDispatch();

    const { name } = gamer1;

    // extraer los datos del state
    // const { name } = gamer1;

    // Leer los datos del formulario y Actualizar en el state
    const updateGamer1 = e => {

        // agregamos los nuevos datos en el atributo que corresponda
        setGamer1({
            ...gamer1,
            [e.target.name]: e.target.value
        })
    }

    const saveGamer1 = e => {
        e.preventDefault();

        if (name.trim() === '') {
            Swal.fire('Error', 'Your name is required', 'error');
            return;
        }
        dispatch(setUpdateGamer1(gamer1))
        localStorage.setItem('gamer', name);
        //TODO:Hacer dispatch para guardar el nombre del gamer
        // estado a false para que no muestre la pantalla de inicio
        dispatch(showHome());
        //showHome(false);
    }

    return (
        <Fragment >
            <div className="form-player">
                <h1>Enter Player Name</h1>
                <form onSubmit={saveGamer1} className="form-inline">
                    
                    <input
                        className="form-control mr-sm-2"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={updateGamer1}
                    />
                   
                    <button
                        type="submit"
                        className="btn btn btn-success my-2 my-sm-0"
                    >Start
                    </button>
                </form>
            </div>
        </Fragment>
    )
}
