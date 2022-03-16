import React from "react";
import { Container } from "./styles";

export default function AllPokemons({ id, name, image, type }) {
  return (
    <Container>
      <div>
        <section>
          <small>#0 {id}</small>
        </section>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <small>Type: {type}</small>
      </div>
    </Container>
  );
}
