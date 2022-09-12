import React from "react";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const Filter = ({ getSearch }) => {
  return (
    <div className="App-header">
      <Form.Control
        onChange={(e) => getSearch(e.target.value)}
        type="text"
        placeholder="Pokemon Name"
      />
    </div>
  );
};

export default Filter;
