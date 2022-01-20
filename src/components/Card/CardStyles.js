import styled from "styled-components/macro";

export const CardContainer = styled.div`
  margin-bottom: 4rem;
  background-color: silver;
  border-radius: 10px;
  max-width: 325px;
  column-gap: 0.5rem;
  box-shadow: 3px 1px 15px 4px rgba(255, 255, 255, 0.5);
`;

export const ImageContainer = styled.div`
  border-radius: 10px;

  img {
    width: 100%;
    height: 12.5rem;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
`;

export const TextContainer = styled.div`
  padding: 1.5rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 20px;
  }

  h3 {
    font-size: 16px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const TextBox = styled.div`
  height: 200px;
  overflow: scroll;
`;
