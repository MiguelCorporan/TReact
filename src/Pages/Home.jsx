import React from "react";
import styled from "styled-components";
import Img1 from "../assets/Super1.jpg";

const PDiv = styled.div`
  width: 100%;
  min-height: calc(100vh - 8rem);

  flex-grow: 2;

  background-image: url(${Img1});

  padding-top: 4rem;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
    color: #ffffff;
    font-weight: bold;
    border: 3px solid #f1f1f1;
    z-index: 2;
    width: 80%;
    padding: 20px;
    text-align: center;
  }

  .filter {
    min-height: calc(100vh - 8rem);
    min-width: 100%;
    display: grid;
    place-items: center;
    background-color: #00000062;
  }

  @media screen and (min-width: 780px) {
    /* min-height: calc(90vh); */

    h1 {
      width: 60%;
    }

    .filter {
      min-height: calc(100vh - 4rem);
    }
  }
`;

const Home = () => {
  return (
    <PDiv>
      <div className="filter">
        <h1>Aqui encontraras todo lo que buscas!</h1>
      </div>
    </PDiv>
  );
};

export default Home;
