import React, { Fragment, useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';

import axios from 'axios';
import { Cancion } from './components/Cancion';
import { Info } from './components/Info';

function App() {

  // definir el state para almacenar letras a buscar
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  // almacena la latra obtenida de la api
  const [letra, guardarLetra] = useState('');
  // guardar info del artista en el state
  const [info, guardarInfo] = useState({});
  const [error, guardarError] = useState(false);

  // cuando cambie el state de busqueda letra y tenga algo el obj ejecuta la consulta a la api
  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      axios.all([
        axios.get(url),
        axios.get(url2)
      ]).then(axios.spread((letra, informacion) => {
        if (letra.data.lyrics)
          guardarLetra(letra.data.lyrics);
        guardarInfo(informacion.data.artists[0]);
      })).catch(error => {
        console.log(error);
        guardarError(true);
      });
      guardarError(false);

      // CON ESTA LINEA EVITAMOS LOOP
      guardarBusquedaLetra({});
    }

    consultarApiLetra();

  }, [busquedaletra, info]);

  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />

      {error ?
        <p className="alert alert-danger text-center p-2">Algo salio mal</p>
        :
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <Info
                info={info}
              />
            </div>
            <div className="col-md-6">
              <Cancion
                letra={letra}
              />
            </div>
          </div>
        </div>
      }

    </Fragment>
  );
}

export default App;
