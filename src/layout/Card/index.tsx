import React from 'react';
import * as Styled from './styles';
import imageSource from '../../assets/svg/logo-syonet.svg';

export interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => (
  <Styled.Wrapper>
    <Styled.Card>
      <header>
        <img src={imageSource} />
      </header>
      {children}
    </Styled.Card>
  </Styled.Wrapper>
);
