import styled from "styled-components/macro";
import Card from "./components/Card";
import Header from "./components/Header";
import LoadingIcon from "./components/LoadingIcon";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  border-radius: 10px;
  padding: 3rem 1.625rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 750px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: initial;
  }
`;
const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: navy;
  color: white;
`;

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
    console.log("in use effect");
  }, []);

  const fetchData = () => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?start_date=2022-01-01&end_date&api_key=HC4g1L44IMgrsE43aw42zljpuBBk8ol0xwKG9i9h"
      )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      });
  };
  return (
    <div>
      <Header />

      {loading ? (
        <LoadingContainer>
          <LoadingIcon />
        </LoadingContainer>
      ) : (
        <Container>
          {data.map((item, index) => {
            if (item.media_type === "image") {
              return <Card item={item} key={index} />;
            }
          })}
        </Container>
      )}
      <Footer>
        Brought to you by NASA's Astronomy Photo of the Day (APOD) API
      </Footer>
    </div>
  );
}

export default App;
