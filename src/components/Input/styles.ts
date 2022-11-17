import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spaces[2]};

    label {
      font-size: 1rem;
      font-weight: 500;
      color: ${theme.colors.gray100};
    }

    input {
      background-color: ${theme.colors.gray100};
      color: ${theme.colors.gray600};
      border: 1px solid ${theme.colors.gray300};
      border-radius: 8px;
      padding: ${theme.spaces[3]} ${theme.spaces[4]};
      width: 100%;
      font-weight: 400;
      font-size: 0.875rem;
      transition: all 0.2s;
      outline: none;
      cursor: default;
      :disabled ;
    }
  `}
`;
