import React, { InputHTMLAttributes } from 'react';
import * as Styled from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string;
}

export function Input({ label, icon, error, ...props }: InputProps) {
  return (
    <Styled.Wrapper disabled={props.disabled} error={error}>
      <label>{label}</label>
      <input {...props} />
      {error && <span>{error}</span>}
    </Styled.Wrapper>
  );
}
