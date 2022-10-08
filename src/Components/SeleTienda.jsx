import React, { useState } from "react";
import styled from "styled-components";

const SeleTienda = ({ categorias, Sele }) => {
  const cambio = (e) => {
    Sele(e.target.value);
  };

  const Selec = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
  `;
  return (
    <Selec>
      {categorias && (
        <div className="select">
          <select onChange={cambio} name="" id="">
            <option defaultValue={"default"}>Todes</option>
            {categorias.map((op) => (
              <option defaultValue={op} key={op}>
                {op}
              </option>
            ))}
          </select>
        </div>
      )}
    </Selec>
  );
};

export default SeleTienda;
