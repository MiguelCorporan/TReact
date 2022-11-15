import React, { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const ContextoAppGlobal = createContext();
const ContextoApp = ({ children }) => {
  const [ChangeMode, setChangeMode] = useState(false);

  const CambioModo = () => {
    setChangeMode(!ChangeMode);
  };

  const blanco = {
    textColor: "#000000",
    BGcolor: "#c71d1d",
    BColor: "#000",
  };

  const negro = {
    textColor: "#ffffff",
    BGcolor: "#000",
    Bcolor: "#fff",
  };

  const theme = ChangeMode ? negro : blanco;

  return (
    <ContextoAppGlobal.Provider value={{ theme, CambioModo, ChangeMode }}>
      {children}
    </ContextoAppGlobal.Provider>
  );
};

export { ContextoAppGlobal };
export default ContextoApp;
