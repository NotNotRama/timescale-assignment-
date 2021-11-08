import styled from 'styled-components';

export const CardsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-template-rows: repeat(3, 30rem);
  /* grid-gap: 2rem; */
  /* background-color: yellow; */
  list-style-type: none;
`;
