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
  width: 100%;
  max-width: 750px;

  a {
    display: flex;
    color: #8692a6;
    text-decoration: none;
    transition: color 0.2s;
    font-size: 18px;
    align-items: center;
    margin-bottom: 7%;
    margin-right: 85%;

    svg {
      margin-right: 8px;
    }

    &:hover {
      color: ${shade(0.2, '#8692A6')};
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
    margin-top: 10px;
    color: #1565d8;
    margin-bottom: 10px;
  }
  h4 {
    margin-top: 8px;
    margin-bottom: 16px;
  }

  form {
    margin: 20px 0;
    width: 340px;
    text-align: center;
    margin-bottom: 30%;

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
  background: url(${backgroundImg}) no-repeat center;
`;
