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
    
  }
  .main-header{
    width: 100%;
    max-height: 4rem;
  }

  .mt{
     padding-top: 4rem;
     padding-bottom: 4rem;
  }

  @media screen and (min-width:1024px) {
    body{
       background-size: 100% 100%;
    }
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
