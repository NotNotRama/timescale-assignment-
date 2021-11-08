import { SearchContainer, Input } from '../styles/';

import { ReactComponent as Logo } from '../images/logo.svg';

export function Search({ input, setInput }) {
  return (
    <SearchContainer>
      <Logo />
      <Input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Search for a movie"
      />
    </SearchContainer>
  );
}
