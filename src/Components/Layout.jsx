import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import About from "../Pages/About";
import Card from "../Pages/Card";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";

import Navegation from "./Navegation";
import Product from "./Product";

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .main-header {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
  }

  .dRSATZ {
    top: 0;
    left: 0;
    right: 0;
    position: relative;
  }

  .icn {
    margin-right: 1rem;
  }

  .uno {
    font-size: 2rem;
  }

  h2 {
    margin-right: -4rem;
    width: 8rem;
    font-size: 1.7rem;
  }

  @media screen and (min-width: 780px) {
    .main-header {
      border-top: none;
    }
    h2 {
      margin-right: 0;
    }
  }
`;

const Layout = () => {
  return (
    <Router>
      <LayoutStyled>
        <Navegation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:product" element={<Product />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </LayoutStyled>
    </Router>
  );
};

export default Layout;
