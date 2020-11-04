import React, { useState } from 'react';

const Pregunta = () => {

    // definir el state
    const [cantidad, guardarCantidad] = useState(0);

    // Funcicón que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10))
    }

    // Submit para definit el presupuesto
    const agregrarPresupuesto = e => {
        e.preventDefault();

        // Validar

        // Si se pasa la validación

    }

    return (
        <>
            <h2>Coloca tu presupuesto</h2>

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