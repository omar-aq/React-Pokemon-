import React from "react";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <>
      <Spinner animation="border" variant="info" />
    </>
  );
};

export default Loading;
