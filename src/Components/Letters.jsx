import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContextoCardGlobal } from "./ContextoCard";

const Contenedor = styled.div`
  max-width: 960px;
  display: grid;
  grid-template-columns: 280px;
  grid-auto-rows: 460px;
  grid-gap: 2rem;
  justify-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media screen and (min-width: 1024px) {
    grid-template-columns: 280px 280px 280px;
  }
`;

const Tarjetas = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 5px;
  padding-bottom: 0.5rem;


  figure {
 
    height: 280px;
    margin-left: auto;
    margin-right: auto;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .Inter {
    display: flex;
    justify-content: space-around;
    text-decoration: none;
    font-weight: bold;
    color: #020202;
  }

  .Inter a {
    text-decoration: none;
    font-weight: bold;
    color: #020202;
  }

  .titl {
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-weight: bold;
    height: 4rem;
  }

  .Add {
    cursor: pointer;
  }

  .Add:hover {
    color: #35b973;
  }

  .Ver:hover {
    color: #35b9b7;
  }
`;

const Letters = ({ Valor }) => {
  const { AddCard } = useContext(ContextoCardGlobal);

  return (
    <Contenedor>
      {Valor &&
        Valor.map((DataV) => (
          <Tarjetas>
            <figure>
              <img src={DataV.image} alt="" />
            </figure>
            <div>
              <p className="titl">{DataV.title}</p>
            </div>
            <div>
              <p>${DataV.price}</p>
            </div>
            <div className="Inter">
              <div className="Add" onClick={() => AddCard(DataV)} id={DataV.id}>
                Agregar
              </div>
              <Link to={`/shop/${DataV.id}`}>
                <div className="Ver">Detalles</div>
              </Link>
            </div>
          </Tarjetas>
        ))}
    </Contenedor>
  );
};

export default Letters;
