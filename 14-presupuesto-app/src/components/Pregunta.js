import React, { useState } from 'react';
import Error from './Error';

const Pregunta = () => {

    // definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // Funcicón que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    // Submit para definit el presupuesto
    const agregrarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        // Si se pasa la validación
        guardarError(false);

    }

    return (
        <>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}

            <form onSubmit={agregrarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </>
    );
}

export default Pregunta;