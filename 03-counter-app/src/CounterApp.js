import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';
// comando para crear un functional component rafcp
// Funtional component
const CounterApp = ({ value }) => {

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;