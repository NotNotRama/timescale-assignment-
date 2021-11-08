import { useState, useEffect } from 'react';

import { searchMovies, getMovies } from '../utils/services';

export function useSearch(setMovies) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (input !== '') {
        searchMovies(input)
          .then((res) => {
            setError(false);
            setMovies(res.data.results);
          })
          .catch(() => {
            setError(true);
          });
      }

      if (input === '') {
        getMovies()
          .then((res) => {
            setError(false);
            setMovies(res.data.results);
          })
          .catch(() => {
            setError(true);
          });
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [input, setMovies]);

  return [input, setInput, error];
}
