import React from 'react';
import PropTypes from 'prop-types';

export const Imagen = ({ imagen }) => {

    // Extraer las variables
    const { largeImageURL, likes, previewURL, tags, views } = imagen;
    console.log(largeImageURL
        , likes
        , views)

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} alt={tags} className="card-imag-top" />
            </div>
        </div>)
}

Imagen.propTypes = {
    imagen: PropTypes.object.isRequired
}