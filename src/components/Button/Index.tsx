import React, { ButtonHTMLAttributes } from 'react';
import * as Styled from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return <Styled.Button {...props}>{children}</Styled.Button>;
}
