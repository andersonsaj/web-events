import { shade } from 'polished';
import styled, { css } from 'styled-components';

export const Header = styled.div`
  flex: 1;
  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
  background-color: #1565d8;
  height: 20vh;
  h1 {
    color: #ffffff;
    max-width: 500px;
    font-size: 40px;
  }
`;

export const Content = styled.div`
  div {
    background: #1565d8;
    width: 100%;
    max-width: 250px;
    align-items: center;

    margin-left: 38%;
    justify-content: center;
    margin-top: 20px;
    border-radius: 50px;

    h2 {
      color: #ffff;
      margin-left: 7px;
    }
  }
  .lista {
    background: #a2195b;
    height: 80px;
    border-radius: 40px;
    font-size: 32px;
    width: 100%;
    max-width: 800px;
    margin-left: 22%;

    margin-top: 50px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#a2195b')};
    }
  }
  .cadastrar {
    background: #f18c00;
    height: 80px;
    border-radius: 40px;
    font-size: 32px;
    width: 100%;
    max-width: 800px;
    margin-left: 22%;
    margin-top: 50px;
    transition: background-color 0.2s;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }

  button {
    height: 80px;
    border-radius: 40px;
    font-size: 32px;
    width: 100%;
    max-width: 800px;
    margin-left: 27%;
    margin-top: 50px;
  }
`;
