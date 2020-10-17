import { types } from '../types/types';
// asigna un tipo y payload para usar en mis reducers
export const eventAddNew = (event) => ({
    type: types.eventAddNew,
    payload: event
});

export const eventSetActive = (event) => ({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = () => ({ type: types.eventClearActiveEvent })

export const eventUpdated = (event) => ({
    type: types.eventUpdated,
    payload: event
});

export const eventDeleted = () => ({ type: types.eventDeleted });