import styled from 'styled-components';

export const Input = styled.input`
  width: 18rem;
  padding: grey;
  border: 1px;
  font-size: 12px;
  box-shadow: 0px 0px 2px black;
  text-indent: 10px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 3rem;
  }
`;
