import React, { Fragment } from 'react';
import { Header } from './components/Header';

const App = () => {
  return (
    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />
      <div className="container white">
        <h1>Formulario aqui</h1>
      </div>
    </Fragment>
  );
}

export default App;
