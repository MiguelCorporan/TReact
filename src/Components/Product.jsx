import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ContextoCardGlobal } from "./ContextoCard";
import { Link } from "react-router-dom";
import { ContextoAppGlobal } from "./ContextoApp";

const Hola = styled.div`
  height: 100vh;
  background-color: #d9dadf;
`;

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
`;

const ElBoton = styled.button`
  margin-top: 10px;
  margin-left: 4rem;
  padding: 4px 10px 4px 10px;
  text-align: center;
  border: 1px solid #000;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
`;

const Tarjetas = styled.div`
  width: 50%;
  height: 20rem;
  display: flex;
  border-radius: 20px;
  text-align: center;

  background-color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;

  figure {
    width: 45rem;
    height: 80%;
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
    height: 2.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-weight: bold;
  }

  .dt {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .Atras {
    text-align: center;
    cursor: pointer;
  }

  .Ad {
    cursor: pointer;
    font-family: "Lato", sans-serif;
    font-family: "Mukta", sans-serif;
    font-family: "Poppins", sans-serif;
    font-family: "Questrial", sans-serif;
    font-weight: bold;
  }

  .Ad:active {
    color: #60e760;
  }
`;

const Product = () => {
  const { product } = useParams();
  const [Valores, setValores] = useState(null);

  const { AddCard } = useContext(ContextoCardGlobal);

  useEffect(() => {
    const Url = `https://fakestoreapi.com/products/${product}`;
    const OneCall = async () => {
      const CallOne = await fetch(Url);
      const OneProdu = await CallOne.json();
      setValores(OneProdu);
    };
    OneCall();
  }, []);

  const { theme } = useContext(ContextoAppGlobal);

  return (
    <Hola>
      {Valores && (
        <SectionStyled theme={theme}>
          <Link to={`/shop/`}>
            <ElBoton>Atras</ElBoton>
          </Link>

          <Tarjetas>
            <figure>
              <img src={Valores.image} alt="" />
            </figure>
            <div>
              <p className="titl">{Valores.title}</p>

              <div className="dt">{Valores.description}</div>
              <div>
                <p>${Valores.price}</p>
              </div>

              <div className="Inter">
                <p
                  className="Ad"
                  onClick={() => AddCard(Valores)}
                  id={Valores.id}
                >
                  Agregar
                </p>
              </div>
            </div>
          </Tarjetas>
        </SectionStyled>
      )}
    </Hola>
  );
};

export default Product;
