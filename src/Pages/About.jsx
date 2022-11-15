import React from "react";
import styled from "styled-components";
import { ContextoAppGlobal } from "../Components/ContextoApp";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useContext } from "react";

import bg from "../assets/bg.jpg";

const AllCont = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: right;
  min-height: 100vh;
  background-size: auto 100%;
  overflow-y: hidden;
  background-size: cover;
`;

const AllCon = styled.div`
  margin-top: 8rem;

  padding: 3px;

  h3 {
    margin-left: 0.5rem;
    color: ${({ theme: { textColor } }) => textColor};
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Questrial", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }

  p {
    color: ${({ theme: { textColor } }) => textColor};
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-weight: bold;
  }

  div {
    width: 50%;
    padding-left: 0.5rem;
  }

  .Redes {
    margin-top: 4rem;
  }

  .re {
    font-size: 4rem;
  }

  @media screen and (min-width: 780px) {
    h3 {
      font-size: 2rem;
      margin-left: 4rem;
      margin-bottom: 3rem;
    }
    div {
      padding-left: 4rem;
    }
    p {
      font-size: 1.2rem;
      width: 50%;
    }
  }
`;

const About = () => {
  const { theme } = useContext(ContextoAppGlobal);

  return (
    <AllCont>
      <AllCon theme={theme} className="Scr">
        <h3>Nosotros somos tu tienda</h3>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
            distinctio voluptatibus accusantium consectetur sed soluta maxime
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
            distinctio voluptatibus accusantium consectetur sed soluta maxime
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
            distinctio voluptatibus accusantium consectetur sed soluta maxime
            ©Miguel Corporan
          </p>
        </div>
        <div className="Redes">
          <BsFacebook className="re" />
          <AiFillInstagram className="re" />
          <AiFillTwitterCircle className="re" />
          <AiFillLinkedin className="re" />
        </div>
      </AllCon>
    </AllCont>
  );
};

export default About;
