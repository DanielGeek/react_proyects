import { fetchRPS } from "../helpers/fetch";
import { types } from "../types/types";

// return accion para iniciar el juego
export const showStart = () => ({ type: types.showStart });

export const showHome = () => ({ type: types.showHome });

export const setUpdateGamer1 = (gamer1) => ({
    type: types.setUpdateGamer1,
    payload: gamer1
});

export const updateRounds = (rounds) => ({
    type: types.updateRounds,
    payload: rounds
});

// guardar ganador en la bd
export const winnerStartAddNew = (data) => {
    return async (dispatch) => {

        try {
            const resp = await fetchRPS('rps', data, 'POST');
            const body = await resp.json();
            // si se guardo en la bd,  asigno al evento el id generado en la bd y el user para agregarlos al state 
            if (body.ok) {

                // asgino al state de redux el winner
                dispatch(winnerAddNew(body.winner));

            }

        } catch (error) {
            console.log(error);
        }
    }
}

const winnerAddNew = (name) => ({
    type: types.winnerAddNew,
    payload: name
});

// obtener ganadores de la bd
export const winnersStartLoading = () => {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const resp = await fetchRPS('rps');
            const body = await resp.json();

            const winners = body.winners;

            dispatch(winnersLoaded(winners));
            
            dispatch(loading(false));

        } catch (error) {
            console.log(error);
        }
    }
}

// agregar al state de redux los winners obtinos de la bd
const winnersLoaded = (winners) => ({
    type: types.winnersLoaded,
    payload: winners
});

export const loading = (loading) => ({
    type: types.loading,
    payload: loading
});
