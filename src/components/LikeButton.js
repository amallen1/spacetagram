import React, { useState } from "react";
import styled from "styled-components/macro";

const Button = styled.div`
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  background-color: gray;
  cursor: pointer;
  position: relative;
  color: #ffffff;
  text-align: center;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  overflow: hidden;

  :after {
    content: "";
    background: white;
    display: block;
    position: absolute;
    padding-top: 150%;
    padding-left: 200%;
    margin-left: -50px !important;
    margin-top: -50%;
    opacity: 0;
    transition: all 0.8s;
  }

  :active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }

  :hover {
    background-color: #a1a1a1;
  }
`;

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <Button onClick={toggleLike}>{liked ? "Liked" : "Like"}</Button>
    </div>
  );
};

export default LikeButton;
