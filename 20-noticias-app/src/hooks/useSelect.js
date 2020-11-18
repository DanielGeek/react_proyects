import React, { useState } from 'react';

export const useSelect = (stateInicial, opciones) => {
    console.log(stateInicial, opciones)
    // state del custom hook
    const [state, actualizarState] = useState('');
    const SelecNoticias = () => (
        <select
            className="browser-default"
        >
            <option value="">Seleccione</option>
        </select>
    );
    return [state, SelecNoticias, actualizarState];
}
