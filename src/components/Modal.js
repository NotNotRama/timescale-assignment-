import { ModalContainer } from '../styles/';

export function Modal({ setModal, movie }) {
  console.log('movie', movie);
  return (
    <ModalContainer>
      <div>
        <h1>{movie.title}</h1>
        <p>Release date: {movie.release_date}</p>
        <p>{movie.overview}</p>
        <p>
          {movie.vote_average}/10 ({movie.vote_count} votes)
        </p>
        <img
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <button onClick={() => setModal((state) => !state)}>
          Turn off modal
        </button>
      </div>
    </ModalContainer>
  );
}
