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

  // const { city, country } = search;

  // cuando consult pase a true sera ejecutado lo que esta dentro de useEffect
  useEffect(() => {

    // const fetchAPI = async () => {
    //   https://openweathermap.org/data/2.5/find?q=Puerto%20Varas&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric
    // }

    // fetchAPI();
  }, [consult])

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
