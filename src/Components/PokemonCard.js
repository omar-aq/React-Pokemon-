import React from "react";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//components
import Loading from "../Components/Loading";

const PokemonCard = ({ data }) => {
  return (
    <>
      {!data && <Loading />}
      <Row className="App App-header">
        {data.map((pokemon) => {
          const { name, id, sprites, types } = pokemon;
          const bgColor = types[0].type.name;
          // console.log(id, bgColor);
          return (
            <Col
              xs={8}
              sm={8}
              md={6}
              lg={4}
              xl={4}
              xxl={3}
              className="pt-5"
              key={id}
            >
              <Card className={bgColor}>
                <Card.Img
                  style={{ height: 200, width: 300 }}
                  variant="top"
                  src={sprites.other.dream_world.front_default}
                />
                <Card.Body>
                  <Card.Title>{id}</Card.Title>
                  <Card.Text>{name}</Card.Text>
                  <Link to={`/pokemon/${id}`}>
                    <Button variant="primary">More info</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default PokemonCard;
