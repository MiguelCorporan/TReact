import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ContentStyled = styled.section`
  .title {
    margin-top: 2.5rem;
    margin-bottom: 3rem;
    font-size: 4rem;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    padding: 0.8rem 1.6rem;
    border: 4px solid #000000;
    color: #000000;
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
  }

  strong {
    font-size: 1.5rem;
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
  }

  h1 {
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Questrial", sans-serif;
  }
`;

const Content = () => {
  return (
    <ContentStyled>
      <strong>NEW ARREVALS</strong>
      <h1 className="title">
        Forma milkyaway
        <br /> ivory chair
      </h1>
      <Link to="/shop">SHOP NOW</Link>
    </ContentStyled>
  );
};

export default Content;
