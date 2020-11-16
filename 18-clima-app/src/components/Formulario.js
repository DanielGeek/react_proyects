import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Error } from './Error';
import { CountrysComponent } from './CountrysComponent';

export const Formulario = ({ search, setSearch, saveConsult, countrysAPI }) => {

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


    console.log(countrysAPI.length);

    useEffect(() => {
        // para que funcione el select con los paises obtenidos por api
        // imitialize dropdown
        var elems = document.getElementById("country");
        window.M.FormSelect.init(elems, {});
    }, []);

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje="All fields are required" /> : null}
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
                    className="browser-default"
                    name="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                >

                    {
                        !countrysAPI.length ?
                            null
                            :
                            countrysAPI.map((countryAPI) => {
                                return <CountrysComponent key={countryAPI.alpha2Code} countryAPI={countryAPI} />
                            })
                    }

                    {/* <option value="">-- Select Country --</option>
                    <option value="AR">Argentina</option>
                    <option value="CL">Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="PE">Perú</option>
                    <option value="VE">Venezuela</option> */}

                </select>
                {/* <label htmlFor="country">Country: </label> */}
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Look for weather
                </button>
            </div>
        </form >
    )
}

Formulario.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    saveConsult: PropTypes.func,
    countrysAPI: PropTypes.array
}