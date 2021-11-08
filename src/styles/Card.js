import styled from 'styled-components';

export const Card = styled.li`
  /* width: 20rem; */
  padding: 1rem;
  position: relative;

  div {
    img {
      border-radius: 7px 7px 0px 0px;
      height: 23rem;
      width: 20rem;
    }

    div {
      width: 20rem;
      margin-top: -3px;
      padding: 5px;
      box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      p {
        font-family: Inter;
        text-align: center;
        width: 20rem;
        font-size: 1.4rem;
        font-weight: bold;
        line-height: 2.6rem;
        letter-spacing: -0.01em;
        color: #000000;
      }
    }
  }
`;
