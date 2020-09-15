import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

// Funtional component
const PrimeraApp = ({ saludo, subtitulo = 'Soy un subtitulo' }) => {

    return (
        <>
            <h1>{ saludo }!!!</h1>
            {/* <pre>{ JSON.stringify( saludo, null, 3 ) }</pre> */}
            <p>{ subtitulo }</p>
            
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;