import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  async function createPokemon() {
    const res = await axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(response => response.data.results);

    res.map(async pokemon => {
      const res = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then(response => response.data);
      setPokemonData(res);
    });
  }

  console.log(pokemonData);

  useEffect(() => {
    createPokemon();
  }, []);

  return (
    <div>
      {/* {pokemonData.map(pokemon => {
        <li key={pokemon.id}>
          <h1>{pokemon.name}</h1>
        </li>;
      })} */}
    </div>
  );
}

export default App;
