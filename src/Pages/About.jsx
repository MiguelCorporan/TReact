import React from "react";
import styled from "styled-components";
import { ContextoAppGlobal } from "../Components/ContextoApp";
import { useContext } from "react";

const AllCon = styled.div`
  margin-top: 6rem;
  text-align: center;

  h3 {
    color: ${({ theme: { textColor } }) => textColor};
  }

  p {
    color: ${({ theme: { textColor } }) => textColor};
  }

  div {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }

  @media screen and (min-width: 780px) {
    p {
      text-align: center;
      width: 40%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const About = () => {
  const { theme } = useContext(ContextoAppGlobal);

  return (
    <AllCon theme={theme} className="Scr">
      <h3>Nosotros somos tu tienda</h3>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
          distinctio voluptatibus accusantium consectetur sed soluta maxime
          fugiat esse? Consequuntur labore blanditiis non, pariatur quas eos!
          Blanditiis itaque iusto ipsum reiciendis! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Quaerat libero amet adipisci unde
          maiores, sint, mollitia dignissimos quod nesciunt aliquam porro
          laborum perferendis culpa, quisquam earum maxime qui officia illo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magnam
          optio eligendi. Quae sequi ipsam aliquam provident facere maiores sed
          ut recusandae sunt quas quo ratione in, alias ipsum illo. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dolorum laborum
          reiciendis nostrum incidunt maxime voluptatem a autem vitae obcaecati
          voluptatum enim, quae tempore est ipsum perspiciatis fugit ex maiores
          optio!
        </p>
      </div>
    </AllCon>
  );
};

export default About;
