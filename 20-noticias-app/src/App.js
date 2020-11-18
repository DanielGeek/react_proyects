import React, { Fragment, useState } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';

const App = () => {

  // para guardar la categoria seleccionada y enviada en el componente Formulario
  const [categoria, guardarCategoria] = useState('');
  console.log(categoria);
  return (
    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
      </div>
    </Fragment>
  );
}

export default App;
