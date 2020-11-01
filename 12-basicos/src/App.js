import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App(props) {

  // Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <>
      <Header titulo="Tienda Virtual" />
      <Footer fecha={fecha} />
    </>
  );
}

export default App;
