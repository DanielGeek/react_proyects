import Axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// crear el context
export const ModalContext = createContext();

export const ModalProvider = props => {
  // state del provider
  const [idreceta, guardarIdReceta] = useState(null);
  const [infoReceta, guardarInfoReceta] = useState({});

  // una vez que tenemos una receta, llamar la api
  useEffect(() => {
    const obtenerReceta = async () => {
      // la primera vez no existe id salimos
      if (!idreceta) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

      const resultado = await Axios.get(url);

      guardarInfoReceta(resultado.data.drinks[0]);
    };
    obtenerReceta();
  }, [idreceta]);

  return (
    <ModalContext.Provider
      value={{
        infoReceta,
        guardarIdReceta,
        guardarInfoReceta
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
