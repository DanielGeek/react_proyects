import React, { Fragment, useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';

import axios from 'axios';

function App() {

  // definir el state para almacenar letras a buscar
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  // almacena la latra obtenida de la api
  const [letra, guardarLetra] = useState('');

  // cuando cambie el state de busqueda letra y tenga algo el obj ejecuta la consulta a la api
  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const resultado = await axios(url);

      guardarLetra(resultado.data.lyrics);
      console.log(letra);
    }
    consultarApiLetra();

  }, [busquedaletra]);

  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
    </Fragment>
  );
}

export default App;
