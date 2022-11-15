import React from "react";
import Navegation from "./Navegation";
import styled from "styled-components";

const ElHeader = styled.header`
  width: 4.5rem;
  height: 40px;
`;

const Header = () => {
  return (
    <ElHeader>
      <Navegation />
    </ElHeader>
  );
};

export default Header;
