import React from 'react';
import PropTypes from 'prop-types';

export const Clima = ({ resultAPI }) => {

    // extraer los valores
    const { name, main } = resultAPI;

    if (!name) return null;

    // Grados Kelvin
    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather of {name} is: </h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p>Maximum temperature:
                    {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span> &#x2103; </span>
                </p>
                <p>Minimum temperature:
                    {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span> &#x2103; </span>
                </p>
            </div>
        </div>
    );
}

Clima.propTypes = {
    resultAPI: PropTypes.object.isRequired
}
