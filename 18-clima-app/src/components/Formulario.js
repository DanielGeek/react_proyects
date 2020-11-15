import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Error } from './Error';

export const Formulario = ({ search, setSearch, saveConsult }) => {

    const [error, saveError] = useState(false);

    // extract city and country
    const { city, country } = search;

    // function put the elements in the state
    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }
    // user submit form
    const handleSubmit = e => {
        e.preventDefault();

        // validator
        if (city.trim() === '' || country.trim() === ' ') {
            saveError(true);
            return;
        }

        saveError(false);

        saveConsult(true);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">City: </label>
            </div>

            <div className="input-field col s12">
                <select
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >
                    <option value="">-- Select Country --</option>
                    <option value="AR">Argentina</option>
                    <option value="CL">Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="PE">Perú</option>
                    <option value="VE">Venezuela</option>

                </select>
                <label htmlFor="country">Country: </label>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >look for weather
                </button>
            </div>
        </form>
    )
}

Formulario.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    saveConsult: PropTypes.func
}