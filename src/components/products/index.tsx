import styled from "styled-components";

import React from "react";

import Card from "../card";

const CardContainer = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 0 20px;
  margin: 0;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 640px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const Products: React.FC = () => {
  return (
    <div>
      <CardContainer>
        <Card />
      </CardContainer>
    </div>
  );
};

export default Products;
