import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ContextoCardGlobal } from "./ContextoCard";
import { Link } from "react-router-dom";
import { ContextoAppGlobal } from "./ContextoApp";

const Hola = styled.div`
  margin-top: 6rem;
  text-align: center;
`;

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ElBoton = styled.button`
  margin-top: 10px;
  text-align: center;
  border-radius: 5px;
  background-color: #5050e3c1;
`;

const Tarjetas = styled.div`
  width: 18rem;
  height: 34rem;
  border: 1px solid rgba(59, 58, 58, 0.46);
  border-radius: 20px;
  box-shadow: -5px 3px 5px gray;
  text-align: center;
  background-color: ${({ theme: { BColor } }) => BColor};
  margin-left: auto;
  margin-right: auto;

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

  .Atras {
    text-align: center;
    cursor: pointer;
  }

  .Ad {
    background-color: #ade8ad;
    cursor: pointer;
  }

  .Ad:active {
    background-color: #60e760;
  }
`;

const Product = () => {
  const { product } = useParams();
  const [Valores, setValores] = useState(null);
  // console.log(Valores);
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
    <>
      {Valores && (
        <SectionStyled theme={theme}>
          <Hola> {Valores.title}</Hola>;
          <Tarjetas>
            <figure>
              <img src={Valores.image} alt="" />
            </figure>
            <div>
              <p className="titl">{Valores.title}</p>
            </div>
            <div>{Valores.description}</div>
            <div>
              <p>${Valores.price}</p>
            </div>
            <div className="Inter">
              <button
                className="Ad"
                onClick={() => AddCard(Valores)}
                id={Valores.id}
              >
                Agregar
              </button>
            </div>
          </Tarjetas>
          <Link to={`/shop/`}>
            <ElBoton>Atras</ElBoton>
          </Link>
        </SectionStyled>
      )}
    </>
  );
};

export default Product;
