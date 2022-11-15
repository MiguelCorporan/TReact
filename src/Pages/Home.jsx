import React from "react";
import styled from "styled-components";
import Img1 from "../assets/bg.jpg";
import Content from "../Components/Content";

const PDiv = styled.div`
  width: 100%;

  box-sizing: border-box;
  background-image: url(../src/assets/bg.jpg);
  background-repeat: no-repeat;
  background-position: right;
  min-height: 100vh;
  background-size: auto 100%;
  overflow-y: hidden;

  flex-grow: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding-left: 3rem;
  padding-top: 4rem;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 780px) {
  }
`;

const Home = () => {
  return (
    <PDiv>
      <div className="filter">
        <Content />
      </div>
    </PDiv>
  );
};

export default Home;
