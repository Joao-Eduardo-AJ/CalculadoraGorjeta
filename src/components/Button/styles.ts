import styled, { css } from 'styled-components';
import { ButtonProps } from './Index';

export const Button = styled.button<ButtonProps>`
  ${({ theme }) => css`
    border: 0;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s;

    :hover {
      background-color: ${theme.colors.gray400};
    }
  `};
`;
