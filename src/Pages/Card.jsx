import React from "react";
import { useState } from "react";
import { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ContextoCardGlobal } from "../Components/ContextoCard";
import { ContextoAppGlobal } from "../Components/ContextoApp";

const Contn = styled.div`
  /* background-color: aqua; */
  margin-top: 4rem;
`;

const Titl = styled.h3`
  color: #000;
  font-size: 2rem;
  text-align: center;
  /* margin-top: 4.5rem; */
`;

const CardS = styled.div`
  width: 18rem;
  height: 25rem;
  border: 1px solid rgba(59, 58, 58, 0.46);
  border-radius: 5px;
  box-shadow: -5px 3px 5px gray;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  padding: 5px;
  overflow: auto;
  background-color: #ffffff;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(16, 200, 228, 0.3);
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #08c0f9;
  }

  .tarjeta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #d1d1d1;
    border-radius: 20px;
    text-align: center;
    margin-bottom: 10px;
    padding: 3px;
  }

  .figurete {
    width: 30%;
    height: 4rem;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .Dat {
    width: 30%;
    height: 90%;
  }

  .Tite {
    width: 100%;
    height: 2.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bn-d {
    width: 30%;
  }

  .dele {
    border-radius: 5px;
    background-color: #f49c9c;
    cursor: pointer;
  }

  .dele:active {
    background-color: #e46363;
  }

  .con {
    font-weight: bold;
  }
  /* 
  @media screen and (min-width: 780px) {
    background-color: #ffffff;
  } */
`;

const Card = () => {
  const { Card, deleteCard } = useContext(ContextoCardGlobal);
  const { theme } = useContext(ContextoAppGlobal);
  const [Conte, setConte] = useState("");
  console.log(theme);

  return (
    <Contn>
      <Titl>Tus cosas</Titl>
      <CardS theme={theme}>
        {Card.map((Date) => (
          <div className="tarjeta">
            <figure className="figurete">
              <img src={Date.image} alt="" />
            </figure>
            <div className="Dat">
              <p className="Tite">{Date.title}</p>
              <p className="Pre">${Date.price}</p>
            </div>
            <div className="bn-d">
              <button className="dele" onClick={() => deleteCard(Date.id)}>
                Delete
              </button>
              <p className="con">{Date.count}</p>
            </div>
          </div>
        ))}
      </CardS>
    </Contn>
  );
};

export default Card;
