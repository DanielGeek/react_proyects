import React, { useEffect, useState } from 'react';
import { Formulario } from './componentes/Formulario';

function App() {

  // state de la app
  const [busqueda, guardarBusqueda] = useState('');

  useEffect(() => {
    // para que no se ejecute la primera vez que cargue
    const consultarAPI = async () => {

      if (busqueda === '') return;

      const encodeBusqueda = encodeURI(busqueda);

      const imagenesPorPagina = 30;
      const key = '7266055-828ec0333b465c750bdc5c8c9';
      const url = `https://pixabay.com/api/?key=${key}&q=${encodeBusqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const { hits } = resultado;
      guardarBusqueda(hits);
    }
    consultarAPI();
  }, [busqueda])

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>

        <Formulario
          guardarBusqueda={guardarBusqueda}
        />
      </div>
    </div>
  );
}

export default App;
