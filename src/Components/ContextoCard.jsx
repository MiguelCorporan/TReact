import React from "react";
import { useState } from "react";
import { createContext } from "react";
const ContextoCardGlobal = createContext();

const ContextoCard = ({ children }) => {
  const [Card, setCard] = useState([]);

  // console.log(Card, "Hola");

  const AddCard = (DataV) => {
    const isIn = Card.find((P) => P.id == DataV.id);
    if (isIn) {
      const result = Card.map((P) =>
        P.id == DataV.id ? { ...P, count: P.count + 1 } : P
      );
      setCard(result);
      //  return;
    } else {
      setCard((D) => [...D, { ...DataV, count: 1 }]);
    }
  };

  const deleteCard = (id) => {
    let isIn = Card.find((P) => P.id == id);

    if (isIn.count == 1) {
      const res = Card.filter((P) => P.id != id);
      setCard(res);
    } else {
      isIn = { ...isIn, count: isIn.count - 1 };
      const res = Card.map((P) => (P.id == id ? isIn : P));
      setCard(res);
      //console.log(isIn);
    }
  };

  return (
    <ContextoCardGlobal.Provider value={{ Card, AddCard, deleteCard }}>
      {children}
    </ContextoCardGlobal.Provider>
  );
};

export { ContextoCardGlobal };
export default ContextoCard;
