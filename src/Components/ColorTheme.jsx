import React from "react";
import { useContext } from "react";
import { useState } from "react";
import styled from "styled-components";
import { ContextoAppGlobal } from "./ContextoApp";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const Algo = styled.div`
  /*  position: absolute;
  top: 4rem;
  left: 0; */

  .sol {
    font-size: 2rem;
  }

  .luna {
    font-size: 2rem;
  }
`;

const ColorTheme = () => {
  const { CambioModo, ChangeMode } = useContext(ContextoAppGlobal);
  console.log(ChangeMode);

  return (
    <Algo
      onClick={() => {
        CambioModo();
      }}
    >
      {!ChangeMode ? (
        <BsFillMoonFill className="luna" color={ChangeMode ? "#fff" : "#000"} />
      ) : (
        <BsSunFill className="sol" color={ChangeMode ? "#fff" : "#000"} />
      )}
    </Algo>
  );
};

export default ColorTheme;
