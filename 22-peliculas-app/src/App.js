import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Saludo } from './Saludo';

export class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Saludo} />
                </Switch>
            </Router>
        );
    }
}

export default App;