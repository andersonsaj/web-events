import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  width: 100%;
  max-width: 750px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
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

  animation: ${appearFromLeft} 1s;

  h1 {
    margin-top: 10px;
    color: #1565d8;
    margin-bottom: 10px;
  }

  form {
    margin: 20px 0;
    width: 340px;
    text-align: center;

    input {
      color: #1565d8;
    }

    button {
      margin-top: 16px;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    place-content: center;
    align-items: center;
    margin-top: 10px;

    a {
      color: #1565d8;
      display: block;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#1565D8')};
      }
    }
  }
`;

export const BackgroundTop = styled.div`
  flex: 1;
  background-size: cover;
  background-color: #1565d8;
  max-height: 69px;
  width: 40%;
`;
export const BackgroundBottom = styled.div`
  flex: 1;
  background-size: cover;
  background-color: #1565d8;
  width: 40%;
  height: 800px;
`;

export const BackgroundLeft = styled.div`
  flex: 1;
  background-size: cover;
  background-color: #f18c00;
`;
export const BackgroundRight = styled.div`
  flex: 1;
  background-size: cover;
  background-color: #a2195b;
`;
