import React from "react";
import styled from "styled-components/macro";

const HeaderSection = styled.header`
  background-color: #cfcfcf;
  text-align: center;
  padding: 1rem;

  h1 {
    font-size: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-style: italic;
  }
`;

const Header = () => {
  return (
    <HeaderSection>
      <h1>Spacetagram</h1>
    </HeaderSection>
  );
};

export default Header;
