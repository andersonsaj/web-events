import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
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
    color: #a2195b;
    text-decoration: none;
    transition: color 0.2s;
    font-size: 18px;
    align-items: center;
    margin-bottom: 1%;
    margin-right: 85%;
    margin-top: 1%;

    svg {
      margin-right: 8px;
    }

    &:hover {
      color: ${shade(0.2, '#A2195B')};
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
  margin-top: 80px;
  max-width: 600px;
  width: 100%;

  .div-event {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    select {
      color: #a2195b;
      border-radius: 10px 0 0 10px;
    }
    button {
      width: 30%;
      background: #a2195b;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#a2195b')};
      }
    }

    transition: transform 0s;

    &:hover {
      transform: translateX(0px);
    }
  }

  h1 {
    color: #a2195b;
    align-items: center;
    justify-content: center;
    margin-left: 21%;
    margin-bottom: 5%;
  }

  div {
    margin-bottom: 20px;
    background: #a2195b;
    transition: transform 0.2s;
    border-radius: 5px;
    & + div {
      margin-top: 16px;
    }
    &:hover {
      transform: translateX(10px);
    }

    strong {
      font-size: 20px;
      color: #ffffff;
      margin-left: 20px;
    }
  }

  animation: ${appearFromRight} 1s;
`;
export const Background = styled.div`
  flex: 1;
  display: flex;
  background-size: cover;
  background: #a2195b;
  max-width: 261px;
  margin-left: 1%;
`;
