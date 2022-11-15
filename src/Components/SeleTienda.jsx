import React, { useState } from "react";
import styled from "styled-components";

const SeleTienda = ({ categorias, Sele }) => {
  const cambio = (e) => {
    Sele(e.target.value);
  };

  const Selec = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;

    .Sele {
      border-radius: 10px;
    }
  `;
  return (
    <Selec>
      {categorias && (
        <div className="select">
          <select onChange={cambio} name="" id="" className="Sele">
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
