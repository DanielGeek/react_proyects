import React, { useEffect, useState } from 'react';
import { Formulario } from './componentes/Formulario';
import { ListadoImagenes } from './componentes/ListadoImagenes';

function App() {

  // state de la app
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(1);

  console.log(paginaactual, totalpaginas, guardarPaginaActual)

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

      const { hits, totalHits } = resultado;

      // calcular el total de paginas
      const calcularTotalPaginas = Math.ceil(totalHits / imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPaginas);
      guardarImagenes(hits);
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

      <div className="row justify-content-center">
        <ListadoImagenes
          imagenes={imagenes}
        />
      </div>
    </div>
  );
}

export default App;
