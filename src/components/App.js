import { useMovies, useSearch } from '../hooks/';

function App() {
  const [movies, setMovies, getMoviesError] = useMovies();
  const [input, setInput, searchMoviesError] = useSearch(setMovies);
  console.log('movies', movies);
  if (getMoviesError)
    return <div>There was an error while getting the movies</div>;
  if (searchMoviesError)
    return <div>There was an error while searching for movies</div>;

  return (
    <div>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <ul>
        {movies?.map((movie) => {
          return <li>{movie.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
