import React from "react";
import lost from "../assets/pokemon_confused.png";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";

const NoData = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={lost} alt="confused" />
      </div>
      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>There is no pokemon with that name load more and try again</p>
      </Alert>
    </div>
  );
};

export default NoData;
