import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import LoadingIcon from "./components/LoadingIcon";
import { Container, LoadingContainer } from "./AppStyles";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?start_date=2022-01-01&end_date&api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  };

  return (
    <main>
      {loading ? (
        <Container height={"100vh"}>
          <LoadingContainer>
            <LoadingIcon />
          </LoadingContainer>
        </Container>
      ) : (
        <Container>
          {data.map((item, index) => {
            if (item.media_type === "image") {
              return <Card item={item} key={index} />;
            }
          })}
        </Container>
      )}
    </main>
  );
};

export default App;
