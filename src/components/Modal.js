import {
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalBody,
} from '../styles/Modal';
import { ReactComponent as CloseIcon } from '../images/close-icon.svg';

export function Modal({ setModal, movie }) {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <h1>{movie.title}</h1>
          <CloseIcon onClick={() => setModal((state) => !state)} />
        </ModalHeader>
        <ModalBody>
          <img
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
          <div>
            <p>
              <b>Release date:</b> {movie.release_date}
            </p>
            <p>{movie.overview}</p>
            <p>
              <b>{movie.vote_average}</b>/10 ({movie.vote_count} votes)
            </p>
          </div>
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  );
}
