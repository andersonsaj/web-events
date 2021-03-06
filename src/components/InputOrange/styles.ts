import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #ffffff;
  border-radius: 10px;
  border: 2px solid #fff;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  color: #8692a6;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #f18c00;
      border-color: #f18c00;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #f18c00;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    &::placeholder {
      color: #bfbfbf;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
