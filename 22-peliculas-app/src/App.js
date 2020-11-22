import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

export class App extends Component {
    render() {
        const { nombre } = this.props;
        return (
            <Grid>
                <h1>Hola {nombre}!</h1>
                <p>Este es un mensaje</p>
            </Grid>
        );
    }
}

App.defaultProps = {
    nombre: "React"
};

export default App;