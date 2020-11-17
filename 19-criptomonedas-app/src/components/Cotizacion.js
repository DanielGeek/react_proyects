import React from 'react';
import PropTypes from 'prop-types';

export const Cotizacion = ({ resultado }) => {

    if (Object.keys(resultado).length === 0) return null;

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = resultado;

    return (
        <div>
            <p>El precio es: <span>{PRICE}</span></p>
            <p>Precio más alto del día: <span>{HIGHDAY}</span></p>
            <p>Precio más bajo del día: <span>{LOWDAY}</span></p>
            <p>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></p>
            <p>Última Actualización: <span>{LASTUPDATE}</span></p>
        </div>
    )
}

Cotizacion.propTypes = {
    resultado: PropTypes.object.isRequired
}
