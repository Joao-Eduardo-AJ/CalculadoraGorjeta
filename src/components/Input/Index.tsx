import { InputHTMLAttributes } from 'react';
import * as Styled from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <Styled.Wrapper>
      <label>{label}</label>
      <input {...props} />
    </Styled.Wrapper>
  );
}
