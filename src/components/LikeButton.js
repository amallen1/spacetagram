import React, { useState } from "react";
import styled from "styled-components/macro";

const Button = styled.div`
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 10px;
  background-color: gray;
  cursor: pointer;

  position: relative;
  color: #ffffff;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;

  :after {
    content: "";
    background: white;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -50px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }

  :active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
`;

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    if (liked === false) {
      setLiked(!liked);
    } else {
      setLiked(!liked);
    }
  };

  return (
    <div>
      <Button onClick={toggleLike}>{liked ? "Liked" : "Like"}</Button>
    </div>
  );
};

export default LikeButton;
