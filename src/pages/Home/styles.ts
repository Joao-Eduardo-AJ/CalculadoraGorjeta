import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    width: 100%;

    h1 {
      font-size: 1.5rem;
      color: ${theme.colors.gray100};
    }

    h2 {
      margin-top: ${theme.spaces[8]};
      font-size: 1rem;
      color: ${theme.colors.gray100};
      cursor: default;
    }

    footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .inputContainer {
      display: flex;
      flex-direction: column;
      gap: ${theme.spaces[4]};
      margin-top: ${theme.spaces[12]};
    }

    .componentsContainer {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      gap: ${theme.spaces[2]};
    }

    .container {
      display: flex;
      flex-direction: column;
    }

    .count {
      max-width: ${theme.spaces[14]};
      background-color: ${theme.colors.gray700};
      color: ${theme.colors.gray100};
      border: none;
      text-align: center;
    }

    .campos {
      cursor: auto;
    }

    #txtRes {
      text-align: right;
    }

    #res {
      font-size: ${theme.spaces[8]};
      max-width: ${theme.spaces[64]};
    }
  `}
`;
