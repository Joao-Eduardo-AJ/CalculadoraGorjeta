import React from 'react';
import * as Styled from './styles';
export interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Card>{children}</Styled.Card>
    </Styled.Wrapper>
  );
};
