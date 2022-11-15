import React from "react";
import styled from "styled-components";
import { AiFillDelete } from "react-icons/ai";

const StyledPC = styled.section`
  height: 5rem;
  display: flex;
  margin-bottom: 0.5rem;

  .img {
    min-width: 5rem;
    margin-right: 0.5rem;
    height: 100%;
    position: static;
  }
  img {
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;
  }

  h3 {
    margin: 0;
    margin-bottom: 5px;
    width: 13rem;

    height: 1.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  p {
    margin: 0;
    margin-bottom: 5px;
  }

  .tite {
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .Dele {
    cursor: pointer;
  }
`;

const ProductCard = ({ product, deleteCard }) => {
  return (
    <StyledPC>
      <div className="img">
        <img src={product.image} alt="" />
      </div>
      <div>
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <div className="tite">
          <div></div>
          <AiFillDelete
            className="Dele"
            onClick={() => deleteCard(product.id)}
          />
        </div>
      </div>
    </StyledPC>
  );
};

export default ProductCard;
