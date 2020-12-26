import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer"

import { AGREGAR_TAREA, TAREAS_PROYECTO, VALIDAR_TAREA } from "../../types";

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
            { id: 2, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
            { id: 3, nombre: "Elegir Plataformas de pago", estado: false, proyectoId: 3 },
            { id: 4, nombre: "Elegir Hosting", estado: true, proyectoId: 4 },
            { id: 5, nombre: "Elegir Plataforma", estado: true, proyectoId: 2 },
            { id: 6, nombre: "Elegir Colores", estado: false, proyectoId: 3 },
            { id: 7, nombre: "Elegir Plataformas de pago", estado: false, proyectoId: 4 },
            { id: 8, nombre: "Elegir Hosting", estado: true, proyectoId: 1 },
            { id: 9, nombre: "Elegir Plataforma", estado: true, proyectoId: 2 },
            { id: 10, nombre: "Elegir Colores", estado: false, proyectoId: 3 },
            { id: 11, nombre: "Elegir Plataformas de pago", estado: false, proyectoId: 4 },
            { id: 12, nombre: "Elegir Hosting", estado: true, proyectoId: 3 },
            { id: 13, nombre: "Elegir Hosting", estado: true, proyectoId: 4 }
        ],
        tareasproyecto: null,
        errortarea: false
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // Crear las funciones

    //Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // Valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;