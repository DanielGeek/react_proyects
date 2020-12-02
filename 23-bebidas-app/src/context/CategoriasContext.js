import React, { createContext, useState } from "react";

// Crear el Context
export const CategoriasContext = createContext();

// Provider es donde se encuentran las funciones y state
const CategoriasProvider = props => {
  // crear el state del Context
  const [hola, guardarHola] = useState("hola desde state");

  // los value estaran disponibles en todos mis componentes
  return (
    <CategoriasContext.Provider
      value={{
        hola
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
