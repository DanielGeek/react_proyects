import Axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// Crear el Context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriasProvider = props => {
  // crear el state del Context
  const [categorias, guardarCategorias] = useState([]);

  // ejecutar el llamado a la api al terminar de cargar el componente, ejecuta el useEffect
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

      const categorias = await Axios.get(url);

      guardarCategorias(categorias.data.drinks);
    };
    obtenerCategorias();
  }, []);

  // los value estaran disponibles en todos mis componentes
  return (
    <CategoriasContext.Provider
      value={{
        categorias
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
