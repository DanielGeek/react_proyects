import React, { useState } from 'react';

export const Formulario = () => {

    const [search, setSearch] = useState({
        city: '',
        country: ''
    });

    // extract city and country
    const { city, country } = search;

    // function put the elements in the state
    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form>
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
                    <option value="CH">Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="PE">Perú</option>
                    <option value="VE">Venezuela</option>

                </select>
                <label htmlFor="country">País: </label>
            </div>
        </form>
    )
}
