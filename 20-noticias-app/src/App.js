import React, { Fragment, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { ListadoNoticias } from './components/ListadoNoticias';

const App = () => {

  // para guardar la categoria seleccionada y enviada en el componente Formulario
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  // siempre que cambie categoria hago la consulta a la api con las noticias de esa categoria
  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=b82a3cb041f6486fa88ffc698454acfa`

      const respuesta = await fetch(url);
      const { articles } = await respuesta.json();
      guardarNoticias(articles);

    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
