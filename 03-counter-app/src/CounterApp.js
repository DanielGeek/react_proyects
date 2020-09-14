import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';
// comando para crear un functional component rafcp
// Funtional component
const CounterApp = ({ value }) => {

    // handleAdd
    const handleAdd = (e) => {
        console.log(e)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            <button onClick={ handleAdd }>+1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;