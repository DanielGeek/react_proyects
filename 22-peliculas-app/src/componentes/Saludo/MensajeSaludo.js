import React, { Component } from "react";
import PropTypes from "prop-types";

export class MensajeSaludo extends Component {
  render() {
    const { nombre, mensaje } = this.props;

    return (
      <div>
        <h1>Hola {nombre}!!</h1>
        <p>{mensaje}</p>
      </div>
    );
  }
}

MensajeSaludo.propTypes = {
  nombre: PropTypes.string.isRequired,
  mensaje: PropTypes.string.isRequired
};

export default MensajeSaludo;
