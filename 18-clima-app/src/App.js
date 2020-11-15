import React, { Fragment, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';

function App() {

  // state form
  const [search, setSearch] = useState({
    city: '',
    country: ''
  });

  const [consult, saveConsult] = useState(false);

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

        console.log(result);
      }

      fetchAPI();
      saveConsult(false);
    }
  }, [consult, city, country])

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
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
