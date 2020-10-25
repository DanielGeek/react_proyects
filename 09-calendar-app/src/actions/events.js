import Swal from 'sweetalert2';

import { fetchConToken } from '../helpers/fetch';
import { prepareEvents } from '../helpers/prepareEvents';
import { types } from '../types/types';

// guardar evento en bd
export const eventStartAddNew = (event) => {
    return async (dispatch, getState) => {

        const { uid, name } = getState().auth;

        try {
            const resp = await fetchConToken('events', event, 'POST');
            const body = await resp.json();
            // si se guardo en la bd,  asigno al evento el id generado en la bd y el user para agregarlos al state 
            if (body.ok) {
                event.id = body.evento.id;
                event.user = {
                    _id: uid,
                    name: name
                }

                // asgino al state de redux el evento
                dispatch(eventAddNew(event));

            }

        } catch (error) {
            console.log(error);
        }
    }
}


// asigna un tipo y payload para usar en mis reducers
const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = () => ({ type: types.eventClearActiveEvent })

// actualizar evento en la bd
export const eventStartUpdate = (event) => {
    return async (dispatch) => {

        try {
            const resp = await fetchConToken(`events/${event.id}`, event, 'PUT');
            const body = await resp.json();

            if (body.ok) {
                // si todo sale bien actualizo en evento en el state de redux
                dispatch(eventUpdated(event));
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

// actualiza el evento en el state de redux
const eventUpdated = (event) => ({
    type: types.eventUpdated,
    payload: event
});

// eliminar un evento en la bd
export const eventStartDelete = () => {
    return async (dispatch, getState) => {

        //obtengo el id del evento activo a eliminar
        const { id } = getState().calendar.activeEvent;

        try {
            const resp = await fetchConToken(`events/${id}`, {}, 'DELETE');
            const body = await resp.json();

            if (body.ok) {
                // si todo sale bien elimino el evento en el state de redux
                dispatch(eventDeleted());
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

// eliminar un evento del state en redux
const eventDeleted = () => ({ type: types.eventDeleted });

// obtener eventos de la bd
export const eventStartLoading = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchConToken('events');
            const body = await resp.json();

            const events = prepareEvents(body.eventos);

            dispatch(eventLoaded(events));

        } catch (error) {
            console.log(error);
        }
    }
}
// agregar al state de redux los eventos obtinos de la bd
const eventLoaded = (events) => ({
    type: types.eventLoaded,
    payload: events
});

export const eventLogout = () => ({ type: types.eventLogout })