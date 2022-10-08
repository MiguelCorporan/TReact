import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContextoCardGlobal } from "./ContextoCard";

const Contenedor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1rem;
  justify-items: center;

  @media screen and (min-width: 780px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Tarjetas = styled.div`
  width: 11rem;
  height: 19rem;
  border: 1px solid rgba(59, 58, 58, 0.46);
  border-radius: 20px;
  box-shadow: -5px 3px 5px gray;
  text-align: center;
  background-color: white;

  figure {
    width: 90%;
    height: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .inter {
    width: 90%;
  }

  .titl {
    width: 90%;
    height: 2.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .Add {
    border-radius: 5px;
    margin-right: 5px;
    background-color: #ade8ad;
    cursor: pointer;
  }

  .Ver {
    border-radius: 5px;
    background-color: #8fe2db;
    cursor: pointer;
  }

  .Ver:active {
    background-color: #45e1d4;
  }

  .Add:active {
    background-color: #6ae46a;
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
              <button
                className="Add"
                onClick={() => AddCard(DataV)}
                id={DataV.id}
              >
                Agregar
              </button>
              <Link to={`/shop/${DataV.id}`}>
                <button className="Ver">Ver mas...</button>
              </Link>
            </div>
          </Tarjetas>
        ))}
    </Contenedor>
  );
};

export default Letters;
