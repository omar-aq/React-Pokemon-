import React, { useEffect, useState } from "react";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
//components
import Header from "../Components/Header";
import PokemonCard from "../Components/PokemonCard";
import Filter from "../Components/Filter";
import NoData from "./NoData";

const Home = () => {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [onFilter, setOnFilter] = useState("");

  const getPokemons = async () => {
    const response = await fetch(loadMore);
    const pokemons = await response.json();
    console.log(pokemons.results);

    setLoadMore(pokemons.next);

    const getPokemonInfo = (results) => {
      results.forEach(async (pokemon) => {
        // console.log(pokemon.url);
        const res = await fetch(pokemon.url);
        const pokemonInfo = await res.json();
        // console.log(pokemonInfo);
        setPokemonsData((current) => [...current, pokemonInfo]);
      });
    };
    getPokemonInfo(pokemons.results);
  };

  const getSearch = (res) => {
    setOnFilter(res);
  };
  const search = (data) => {
    return data.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(onFilter)
    );
  };
  useEffect(() => {
    getPokemons();
    // eslint-disable-next-line
  }, []);
  return (
    <section className="all">
      <Container>
        <Header />
        <Filter getSearch={getSearch} />
        {!search(pokemonsData)[0] ? (
          <NoData />
        ) : (
          <PokemonCard data={search(pokemonsData)} />
        )}
        <div className="App-header">
          <Button variant="secondary" onClick={() => getPokemons()}>
            Load more
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Home;
