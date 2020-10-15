import { types } from "../types/types";

// return accion para abrir el modal
export const uiOpenModal = () => ({ type: types.uiOpenModal });
// return accion para cerrar el modal
export const uiCloseModal = () => ({ type: types.uiCloseModal }); 