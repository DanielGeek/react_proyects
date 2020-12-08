import React, { createContext, useState } from "react";

// crear el context
export const ModalContext = createContext();

export const ModalProvider = props => {
  // state del provider
  const [idreceta, guardarIdReceta] = useState(null);
  return (
    <ModalContext.Provider
      value={{
        guardarIdReceta
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
