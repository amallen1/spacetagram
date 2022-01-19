import React from "react";
import styled from "styled-components/macro";

const HeaderSection = styled.header`
  background-color: #f4f4f4;
  display: flex;
  justify-content: space-between;
  padding: 1.5625rem 1.125rem;
  box-shadow: 0px 1px 15px 5px rgba(0,0,0,0.25);

  h1 {
    font-size: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  @media (min-width: 750px) {
    padding: 1.5625rem 3rem;
  }

  @media (min-width: 800px) {
    padding: 1.5625rem 5rem;
  }
`;

const Header = () => {
  return (
    <HeaderSection>
      <h1>Spacetagram</h1>
      <h1>Likes</h1>
    </HeaderSection>
  );
};

export default Header;
