import React from "react";
import { Link } from "react-router-dom";
import { BsHouseDoorFill, BsFillPeopleFill, BsCartFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import styled from "styled-components";
import ColorTheme from "./ColorTheme";

const Nav = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: static;
  background-color: #19d3c3;
  border-bottom: 1px solid #000;
  position: fixed;

  .uno {
    font-size: 2rem;
    color: #000;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .nav {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #19d3c3;
    border-top: 1px solid #000;
  }
  @media screen and (min-width: 780px) {
    .nav {
      position: static;
      background-color: #19d3c3;
      border: none;
    }
  }
`;

const Navegation = () => {
  return (
    <Nav>
      <header className="main-header">
        <h2>Tu tienda</h2>
        <nav className="nav">
          <Link to="/">
            <BsHouseDoorFill className="uno" />
          </Link>
          <Link to="about">
            <BsFillPeopleFill className="uno" />
          </Link>
          <Link to="shop">
            <FaShoppingBag className="uno" />
          </Link>
          <Link to="card">
            <BsCartFill className="uno" />
          </Link>
        </nav>
        <div className="icn">
          <ColorTheme />
        </div>
      </header>
    </Nav>
  );
};

export default Navegation;
