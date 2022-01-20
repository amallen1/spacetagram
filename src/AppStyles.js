import styled from "styled-components/macro";

export const Container = styled.div`
  border-radius: 10px;
  padding: 3rem 1.625rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: ${(props) => props.height};

  @media (min-width: 750px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: initial;
  }

  @media (min-width: 1000px) {
    column-gap: 3rem;
  }
`;
