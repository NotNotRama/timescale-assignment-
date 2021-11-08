import { useMovies, useSearch } from '../hooks/';
import { Movies, Search, Modal } from './';
import { useState } from 'react';
import { Container } from '../styles';

function App() {
  const [movies, setMovies, getMoviesError] = useMovies();
  const [input, setInput, searchMoviesError] = useSearch(setMovies);
  const [modal, setModal] = useState(false);
  const [movie, setMovie] = useState({});

  if (getMoviesError)
    return <div>There was an error while getting the movies</div>;
  if (searchMoviesError)
    return <div>There was an error while searching for movies</div>;

  return (
    <Container>
      {modal && <Modal movie={movie} setModal={setModal} />}
      <Search input={input} setInput={setInput} />
      <Movies movies={movies} setMovie={setMovie} setModal={setModal} />
    </Container>
  );
}

export default App;
