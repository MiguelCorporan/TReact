import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Letters from "../Components/Letters";
import SeleTienda from "../Components/SeleTienda";

const Dv = styled.div`
  background-color: #d9dadf;
`;

const Shop = ({}) => {
  const [Valor, seTValor] = useState(null);
  const [SeleCambio, setSeleCambio] = useState(null);
  const [SeleCambioB, setSeleCambioB] = useState(null);

  useEffect(() => {
    const Purl = !SeleCambio
      ? "https://fakestoreapi.com/products"
      : `https://fakestoreapi.com/products/category/${SeleCambio}`;

    const llamada = async () => {
      const Pllamada = await fetch(Purl);
      const Cllamada = await Pllamada.json();

      seTValor(Cllamada);
    };

    llamada();
  }, [SeleCambio]);

  useEffect(() => {
    const Curl = `https://fakestoreapi.com/products/categories`;

    const LlamdadaB = async () => {
      const Bllmada = await fetch(Curl);
      const Cllamada = await Bllmada.json();
      console.log(Cllamada);
      setSeleCambioB(Cllamada);
    };

    LlamdadaB();
  }, []);

  return (
    <Dv className="mt">
      {Valor && <SeleTienda categorias={SeleCambioB} Sele={setSeleCambio} />}
      {Valor && <Letters Valor={Valor} />}
    </Dv>
  );
};

export default Shop;
