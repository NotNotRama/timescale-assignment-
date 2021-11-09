import { CardsContainer, MovieContainer, Card, Score, Error } from '../styles';

export function Movies({
  movies,
  setMovie,
  setModal,
  getMoviesError,
  searchMoviesError,
}) {
  if (getMoviesError)
    return <Error>There was an error while getting the movies</Error>;
  if (searchMoviesError)
    return <Error>There was an error while searching for movies</Error>;

  return (
    <MovieContainer>
      <h1>Most Recent Movies</h1>
      <CardsContainer>
        {movies.map((movie) => {
          return (
            <Card
              onClick={() => {
                setModal((state) => !state);
                setMovie(movie);
              }}
            >
              <Score>
                <p>{movie.vote_average}</p>
              </Score>
              <div>
                <img
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                <div>
                  <p>{movie.title}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </CardsContainer>
    </MovieContainer>
  );
}
