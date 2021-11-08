import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    background-color: white;
    padding: 100px;
    display: flex;
    width: 70%;
    height: 70%;
    flex-direction: column;

    img {
      height: 10rem;
      width: 10rem;
    }
  }
`;
