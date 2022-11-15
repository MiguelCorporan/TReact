import React, { useState } from "react";
import { Link } from "react-router-dom";
import {

  BsCartFill,
  BsFacebook,
} from "react-icons/bs";

import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import styled from "styled-components";

import Card from "./Card";

const Nav = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: static;
  background-color: transparent;
  position: fixed;
  padding: 10px;

  h2 {
    width: 8rem;
    font-family: "Mukta", sans-serif;
    font-family: "Secular One", sans-serif;
  }

  .uno {
    font-size: 2rem;
    color: #000;
    margin-left: 1rem;
    margin-right: 1rem;
    cursor: pointer;
  }
  .socials {
    display: flex;
    gap: 0.5rem;
  }
  .icn {
    display: flex;
    gap: 0.5rem;
  }
  .nav {
    position: absolute;
    top: 4rem;
    width: 80%;
    left: 10%;
    display: flex;
    justify-content: space-around;
  }

  .nav a {
    text-decoration: none;
    font-family: "Mukta", sans-serif;
    color: #000000;
  }
  @media screen and (min-width: 780px) {
    .nav {
      left: 25%;
      width: 50%;
      border: none;
    }
  }
`;

const Navegation = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Nav>
      <header className="main-header">
        <div className="socials">
          <BsFacebook />
          <AiFillInstagram />
          <AiFillTwitterCircle />
          <AiFillLinkedin />
        </div>
        <h2>Tu tienda</h2>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="shop">Store</Link>
        </nav>
        <div className="icn">
          <BsCartFill className="uno" onClick={() => setIsVisible((I) => !I)} />
          <Card isVisible={isVisible} />
        </div>
      </header>
    </Nav>
  );
};

export default Navegation;
