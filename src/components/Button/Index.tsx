import React, { ButtonHTMLAttributes } from 'react';
import * as Styled from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'outline' | 'primary';
}

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <Styled.Button variant={variant} {...props}>
      {children}
    </Styled.Button>
  );
}
