import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export class FormaSaludo extends Component {
    render() {
        return (
            <div>
                <form>
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