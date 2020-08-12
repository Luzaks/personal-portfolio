import styled, { keyframes } from 'styled-components';

const Back = styled.div`
  width: 100%;
  height: 100%;
`;

const line = keyframes`
0% {
  top: -50%;
}
100% {
  top: 110%;
}
`;

const Line = styled.div`
  position: absolute;
  width: 1px;
  height: 1100vh;
  top: 0;
  left: 50%;
  background: rgba(255, 255, 255, 0.1);
  z-index: 0;
  overflow: hidden;
  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
    animation: ${line} 25s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier( 0.93, 0.97, 0.93, 0.97 );
  }
  &:nth-child(1) {
    margin-left: -25%;
    &::after {
      animation-delay: 2s
    }
  }
  &:nth-child(3) {
    margin-left: 25%;
    &::after{
      animation-delay: 2.5s;
    }
  }
`;



export {
  Back,
  Line
}
