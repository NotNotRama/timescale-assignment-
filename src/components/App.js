import { useMovies, useSearch } from '../hooks/';
import { Movies, Search, Modal } from './';
import { useState } from 'react';
import { Container } from '../styles';

function App() {
  const [movies, setMovies, getMoviesError] = useMovies();
  const [input, setInput, searchMoviesError] = useSearch(setMovies);
  const [modal, setModal] = useState(false);
  const [movie, setMovie] = useState({});

  return (
    <Container>
      {modal && <Modal movie={movie} setModal={setModal} />}
      <Search input={input} setInput={setInput} />
      <Movies
        movies={movies}
        setMovie={setMovie}
        setModal={setModal}
        getMoviesError={getMoviesError}
        searchMoviesError={searchMoviesError}
      />
    </Container>
  );
}

export default App;
