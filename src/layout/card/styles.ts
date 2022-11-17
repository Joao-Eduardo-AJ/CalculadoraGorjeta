import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    width: 439px;
    padding: ${theme.spaces[12]} ${theme.spaces[8]};
    background-color: ${theme.colors.gray700};
    border-radius: 1rem;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.4);
  `}
`;
