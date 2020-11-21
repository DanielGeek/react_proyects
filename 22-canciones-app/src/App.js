import React, { Fragment, useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';

import axios from 'axios';
import { Cancion } from './components/Cancion';

function App() {

  // definir el state para almacenar letras a buscar
  const [busquedaletra, guardarBusquedaLetra] = useState({});
  // almacena la latra obtenida de la api
  const [letra, guardarLetra] = useState('');
  // guardar info del artista en el state
  const [info, guardarInfo] = useState({});

  // cuando cambie el state de busqueda letra y tenga algo el obj ejecuta la consulta a la api
  useEffect(() => {
    if (Object.keys(busquedaletra).length === 0) return;

    const consultarApiLetra = async () => {
      const { artista, cancion } = busquedaletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, info] = await Promise.all([axios(url), axios(url2)]).catch(
        (error) => {

        }
      );

      guardarLetra(letra.data.lyrics);
      guardarInfo(info.data.artistss[0]);
    }

    consultarApiLetra();

  }, [busquedaletra]);

  return (
    <Fragment>
      <Formulario
        guardarBusquedaLetra={guardarBusquedaLetra}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">

          </div>
          <div className="col-md-6">
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
