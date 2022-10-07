import * as Styled from './styles';
import imageSource from '../../assets/svg/check.svg';
import { Button } from '../Button/Index';

export const Modal = () => (
  <Styled.Wrapper>
    <Styled.Modal>
      <header>
        <img src={imageSource} />
      </header>
      <h1>Usuário cadastrado com sucesso</h1>
      <Button variant="primary">Fechar</Button>
    </Styled.Modal>
  </Styled.Wrapper>
);
