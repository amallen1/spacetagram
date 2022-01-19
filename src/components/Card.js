import React from "react";
import styled from "styled-components/macro";

const CardContainer = styled.div`
  margin-bottom: 4rem;
  background-color: silver;
  border-radius: 10px;
  max-width: 325px;
  column-gap: 0.5rem;
  box-shadow: 3px 5px 8px 4px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
  border-radius: 10px;

  img {
    width: 100%;
    height: 12.5rem;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
`;

const TextContainer = styled.div`
  padding: 1.5rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 20px;
  }

  h3 {
    font-size: 16px;
  }

  p {
    overflow: scroll;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  button {
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 10px;
    background-color: gray;
    cursor: pointer;
  }

  button:hover {
    background-color: lightgray;
  }
`;

const TextBox = styled.div`
  height: 200px;
  overflow: scroll;
`;

const Card = ({ item }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={item.url} alt="Nasa" />
      </ImageContainer>

      <TextContainer>
        <h2>{item.title}</h2>
        <Row>
          <h3>{item.date}</h3>
          <button>Like</button>
        </Row>

        <TextBox>
          <p>{item.explanation}</p>
        </TextBox>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
