import { useState, useEffect } from 'react';
import { getMovies } from '../utils/services';

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getMovies()
      .then((res) => {
        setError(false);
        setMovies(res.data.results);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  return [movies, setMovies, error];
}
