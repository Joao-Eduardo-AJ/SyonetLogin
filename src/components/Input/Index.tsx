import React, { InputHTMLAttributes } from 'react';
import * as Styled from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

export function Input({ label, icon, ...props }: InputProps) {
  return (
    <Styled.Wrapper disabled={props.disabled}>
      <label>{label}</label>
      <input {...props} />
    </Styled.Wrapper>
  );
}
