import React, { useContext } from "react";
import styled from "styled-components";
import { ContextoCardGlobal } from "./ContextoCard";
import ProductCard from "./ProductCard";

const CardStyled = styled.div`
  background-color: #ffffff;
  position: absolute;
  right: 0;
  top: 4rem;
  width: 20rem;
  transform: ${({ isVisible }) =>
    isVisible ? "translateX(0%)" : "translateX(100%)"};
  transition: transform 0.5s;
  height: 50vh;
  overflow-y: auto;
  border-radius: 8px;
`;

const Card = ({ isVisible }) => {
  const { Card, deleteCard } = useContext(ContextoCardGlobal);
 
  return (
    <CardStyled isVisible={isVisible}>
      {Card &&
        Card.map((product) => (
          <ProductCard product={product} deleteCard={deleteCard} />
        ))}
    </CardStyled>
  );
};

export default Card;
