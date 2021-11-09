import axios from 'axios';
const { REACT_APP_API_KEY } = process.env;

export function getMovies() {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-01-01&primary_release_date.lte=2021-08-11&sort_by=vote_average.desc&api_key=${REACT_APP_API_KEY}`
  );
}

export function searchMovies(query) {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
}
