import React from "react";
import { Media, Label, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const PeliculasEncontradas = props => {
  const { peliculas } = props;

  return (
    <div>
      {peliculas.map(pelicula => (
        <Media key={pelicula.trackId}>
          <Media.Left>
            <img src={pelicula.artworkUrl100} alt="{pelicula.trackName}" />
          </Media.Left>
          <Media.Body>
            <Media.Heading>
              {pelicula.trackName} <small>{pelicula.primaryGenreName}</small>{" "}
              <Label>{pelicula.contentAdvisoryRating}</Label>
            </Media.Heading>
            <p>{pelicula.longDescription}</p>
            <Button bsSize="xsmall" href={pelicula.previewUrl}>
              Ver
            </Button>
          </Media.Body>
        </Media>
      ))}
    </div>
  );
};

PeliculasEncontradas.propTypes = {
  peliculas: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PeliculasEncontradas;
