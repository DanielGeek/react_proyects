import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export class FormaSaludo extends Component {

    alEnviarForma = e => {
        const nombre = e.target.nombre.value;
        e.preventDefault();
        if (typeof nombre === "string" && nombre.length > 0) {
            this.props.alObtenerNuevoNombre(nombre);
            e.target.nombre.value = "";
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.alEnviarForma}>
                    <FormGroup>
                        <ControlLabel>Nombre</ControlLabel>
                        <FormControl type="text" id="nombre" name="nombre" />
                        <br />
                        <Button type="submit">Saludar</Button>
                    </FormGroup>
                </form>
            </div>
        )
    }
}

export default FormaSaludo
    ;