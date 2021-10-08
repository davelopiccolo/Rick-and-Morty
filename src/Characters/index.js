import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Character from "./Character";
import axios from "axios";

export default function Characters({ page }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      const url = `https://rickandmortyapi.com/api/character?page=${page}`;
      const response = await axios.get(url);
      response.status === 200 && setCharacters(response.data.results);
    }

    fetchCharacters();
  }, [page]);

  return (
    <Container fixed sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {characters?.map((character) => (
          <Grid item xs={3} key={character.id}>
            <Character character={character} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
