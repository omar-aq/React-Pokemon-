import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
//components
import Loading from "./Loading";
import Header from "./Header";
//bootstrap
import { ProgressBar, Container, Row, Col, Button } from "react-bootstrap";

const SinglePokemon = () => {
  const [singlePokemon, setSinglePokemon] = useState([]);
  let { userId } = useParams();

  const getSinglePokemon = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userId}`);
    const pokemons = await response.json();
    console.log({ pokemons });
    setSinglePokemon({ pokemons });
  };

  useEffect(() => {
    setTimeout(() => {
      getSinglePokemon();
    }, 500);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <Container>
        <section className="single-pokemon">
          {singlePokemon.pokemons && (
            <Row>
              <Col
                className={`info ${singlePokemon.pokemons.types[0].type.name}`}
              >
                <h3 className="hiding">#{singlePokemon.pokemons.id}</h3>
                <img
                  style={{ height: 300, width: 400 }}
                  src={
                    singlePokemon.pokemons.sprites.other.dream_world
                      .front_default
                  }
                  alt="pokemonImg"
                />
                <h2 className="hiding">{singlePokemon.pokemons.name}</h2>
              </Col>
              <Col className="info">
                <h4>Height-{singlePokemon.pokemons.height} Foot</h4>
                <h4>Weight-{singlePokemon.pokemons.weight} Kg</h4>
              </Col>
              <Col className="info">
                <ProgressBar
                  variant="success"
                  now={singlePokemon.pokemons.stats[0].base_stat}
                  label={`${singlePokemon.pokemons.stats[0].base_stat}%HP`}
                />
                <ProgressBar
                  variant="warning"
                  now={singlePokemon.pokemons.base_experience}
                  label={`${singlePokemon.pokemons.base_experience}%XP`}
                />
              </Col>
            </Row>
          )}
          {!singlePokemon.pokemons && <Loading />}
        </section>
        <div className="fn">
          <Link to={"/"}>
            <Button>Home</Button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default SinglePokemon;
