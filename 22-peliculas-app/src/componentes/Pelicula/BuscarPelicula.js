import React from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const BuscarPelicula = props => {
  const { peliculaPorBuscar } = props;

  return (
    <Form inline onSubmit={peliculaPorBuscar}>
      <FormGroup>
        <FormControl
          type="text"
          name="peliculaPorBuscar"
          placeholder="¿Qué película buscas?"
        />
      </FormGroup>{" "}
      <Button type="submit">Buscar</Button>
    </Form>
  );
};

BuscarPelicula.propTypes = {
  peliculaPorBuscar: PropTypes.func.isRequired
};

export default BuscarPelicula;
