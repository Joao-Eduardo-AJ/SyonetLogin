import * as Styled from './styles';
import imageSource from '../../assets/svg/check.svg';
import { Button } from '../Button/Index';
import { useNavigate } from 'react-router-dom';

export function Modal() {
  const navigate = useNavigate();

  return (
    <Styled.Wrapper>
      <Styled.Modal>
        <header>
          <img src={imageSource} />
        </header>
        <h1>Usuário cadastrado com sucesso</h1>
        <Button variant="primary" onClick={() => navigate('/user')}>
          Fechar
        </Button>
      </Styled.Modal>
    </Styled.Wrapper>
  );
}
