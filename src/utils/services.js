import axios from 'axios';
const { REACT_APP_BASE_URL, REACT_APP_RECENT_MOVIES, REACT_APP_API_KEY } =
  process.env;

export function getMovies() {
  return axios.get(
    `${REACT_APP_BASE_URL}${REACT_APP_RECENT_MOVIES}&api_key=${REACT_APP_API_KEY}`
  );
}

export function searchMovies(query) {
  return axios.get(
    `${REACT_APP_BASE_URL}/search/movie?api_key=${REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
}
