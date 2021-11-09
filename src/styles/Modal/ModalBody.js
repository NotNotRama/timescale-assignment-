import styled from 'styled-components';

export const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  justify-content: space-between;

  img {
    width: 26rem;
    height: 38rem;
  }

  div {
    padding: 2rem;

    p {
      margin-top: 1rem;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.01em;
    }
  }
`;
