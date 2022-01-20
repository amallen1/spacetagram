import React from "react";
import {
  CardContainer,
  ImageContainer,
  TextContainer,
  TextBox,
  Info,
} from "./CardStyles";
import LikeButton from "../LikeButton";

const Card = ({ item }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <img src={item.url} alt="Nasa" />
      </ImageContainer>

      <TextContainer>
        <h2>{item.title}</h2>
        <Info>
          <h3>{item.date}</h3>
          <LikeButton />
        </Info>

        <TextBox>
          <p>{item.explanation}</p>
        </TextBox>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
