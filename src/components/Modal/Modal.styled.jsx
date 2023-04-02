import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  position: fixed;
`;

export const ImageWrap = styled.div`
  opacity: 1;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LargeImage = styled.img`
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 350px;
  opacity: 1;
  visibility: visible;
`;
