import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: solid 1px;

  @media only screen and (max-width: 600px) {
    border-bottom: none;
    svg {
      display: none;
    }
  }
`;
