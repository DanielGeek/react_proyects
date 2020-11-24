import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pelicula from "./Pelicula";
import { Saludo } from "./Saludo";

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Saludo} exact />
            <Route path="/peliculas" component={Pelicula} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
