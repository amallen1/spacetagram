import React from "react";
import styled from "styled-components/macro";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingIconthing = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 100%;
  border: 10px dashed white;
  animation: spin 5s linear infinite;

  @keyframes spin {
    100% {
      transform: rotateZ(360deg);
    }
  }
`;

const TextDiv = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingIcon = () => {
  return (
    <Container>
      <LoadingIconthing></LoadingIconthing>
      <TextDiv>Loading...</TextDiv>
    </Container>
  );
};

export default LoadingIcon;
