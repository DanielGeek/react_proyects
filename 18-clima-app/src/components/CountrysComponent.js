import React from 'react';
import PropTypes from 'prop-types';

export const CountrysComponent = ({ countryAPI }) => {

    return (
        <option value={countryAPI.alpha2Code}>
            {countryAPI.name}
        </option>
    )
}

CountrysComponent.propTypes = {
    countryAPI: PropTypes.object.isRequired,
}

