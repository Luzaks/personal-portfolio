import styled, { keyframes } from 'styled-components';

const Back = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
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

const Default = styled.div`
  width: 100%;
  height: 100%;
`;

const Head = styled.div`
  padding: 0 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 72px;
  min-height: auto;
`;

const DevName = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const DevNameCont = styled.div`
  position: relative;
  width: fit-content;
  font-family: 'Navada Outline', cursive;
  font-size: 30px;
  letter-spacing: 0.4rem;
  color: #33CCFF;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export {
  Back,
  Line,
  Default,
  Head,
  DevName,
  DevNameCont,
}
