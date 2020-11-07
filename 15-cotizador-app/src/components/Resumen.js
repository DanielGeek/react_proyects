import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { primeraLetrarMayuscula } from '../helper';


const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

export const Resumen = ({ datos }) => {

    // extraer de datos
    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '') return null;

    return (
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {primeraLetrarMayuscula(marca)}</li>
                <li>Plan: {primeraLetrarMayuscula(plan)}</li>
                <li>Año del Auto: {year} </li>
            </ul>
        </ContenedorResumen>
    )
}

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}