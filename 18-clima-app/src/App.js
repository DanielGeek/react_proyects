import React, { Fragment, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { Error } from './components/Error';
import { Clima } from './components/Clima';

function App() {

  // state form
  const [search, setSearch] = useState({
    city: '',
    country: ''
  });

  // cambia a true cuando se envian los datos de la ciudad y pais
  const [consult, saveConsult] = useState(false);
  // crear estado con los datos obtenidos de la api
  const [resultAPI, saveResultAPI] = useState({});
  // manejar el code devuelto de la respuesta de la api
  const [errorCode, saveErrorCode] = useState({
    codeError: null,
    message: null,
  });

  const { codeError, message } = errorCode;

  const { city, country } = search;

  // cuando consult pase a true sera ejecutado lo que esta dentro de useEffect
  useEffect(() => {

    if (consult) {

      const fetchAPI = async () => {
        const appId = '222cf87daab352594fbac11284c15353';
        const encodeCity = encodeURI(city);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeCity},${country}&appid=${appId}`;

        const resp = await fetch(url);
        const result = await resp.json();
        saveResultAPI(result);
        saveConsult(false);

        // detecta si hubo resultado con los datos de la consulta
        if (result.cod === "404") {
          saveErrorCode({
            codeError: result.cod,
            message: result.message
          });
        } else {
          saveErrorCode({
            codeError: null,
            message: null
          });
        }
      }

      fetchAPI();
    }
  }, [consult, city, country, resultAPI, saveErrorCode])

  // carga condicional de Componente
  let ComponentCondicional;
  if (codeError) {
    ComponentCondicional = <Error mensaje={message} />
  } else {
    ComponentCondicional = <Clima resultAPI={resultAPI} />
  }

  return (
    <Fragment>
      <Header
        titulo='Clima React App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                search={search}
                setSearch={setSearch}
                saveConsult={saveConsult}
              />
            </div>
            <div className="col m6 s12">
              {ComponentCondicional}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
