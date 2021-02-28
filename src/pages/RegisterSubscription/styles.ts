import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  a {
    display: flex;
    color: #1565d8;
    text-decoration: none;
    transition: color 0.2s;
    font-size: 18px;
    align-items: center;
    margin-bottom: 5%;
    margin-right: 85%;
    margin-top: -14%;

    svg {
      margin-right: 8px;
    }

    &:hover {
      color: ${shade(0.2, '#1565D8')};
    }
  }
`;
const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  animation: ${appearFromRight} 1s;

  h1 {
    color: #1565d8;
  }

  form {
    margin: 20px 0;
    width: 340px;
    text-align: center;
    margin-bottom: 0;

    select {
      margin-bottom: 10px;
    }

    p {
      margin-top: 10px;
      display: flex;
      margin-left: -1%;
      color: #003380;
    }

    input {
      color: #1565d8;
    }

    button {
      margin-top: 16px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background-size: cover;
  background: #1565d8;
  max-width: 261px;
  margin-left: 1%;
`;
