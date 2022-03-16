import { useState, useEffect } from "react";
import axios from "axios";
import AllPokemons from "./components/AllPokemons";
import { AppStyles } from "./appStyles";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  async function createPokemon() {
    const res = await axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(response => response.data.results);

    res.map(async pokemon => {
      let res = [];
      res = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then(response => response.data);
      setPokemonData(current => [...current, res]);
    });
  }

  useEffect(() => {
    createPokemon();
  }, []);

  return (
    <AppStyles>
      {pokemonData.map((pokemon, index) => (
        <AllPokemons
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.types[0].type.name}
          image={pokemon.sprites.other.dream_world.front_default}
          key={index}
        />
      ))}
    </AppStyles>
  );
}

export default App;
