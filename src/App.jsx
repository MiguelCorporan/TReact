import { useState } from "react";
import { Router } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Layout from "./Components/Layout";
import styled, { createGlobalStyle } from "styled-components";
import { ContextoAppGlobal } from "./Components/ContextoApp";
import { useContext } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    position: relative;
    box-sizing: border-box;
     background-color:${({ theme: { BGcolor } }) => BGcolor}
  }
  .main-header{
  /*   position: fixed;
    top: 0;
    left: 0; */
    width: 100%;
    max-height: 4rem;
    background-color:aquamarine;
  }
 /*  .main-nav{
    position: fixed;
    bottom: 0;
   min-height: 4rem;
    background-color:aquamarine;
    width: 100%;
  } */
  .mt{
     padding-top: 4rem;
     padding-bottom: 4rem;
  }
`;

function App() {
  const { theme } = useContext(ContextoAppGlobal);
  console.log(theme);

  return (
    <>
      <GlobalStyle theme={theme} />
      <Layout />
    </>
  );
}

export default App;
