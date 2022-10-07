import { Button } from '../../components/Button/Index';
import * as Styled from './styles';
import { useNavigate } from 'react-router-dom';

export function User() {
  const navigate = useNavigate();
  return (
    <Styled.List>
      <h1>Lista de usuários</h1>
      <div className="buttonContainer">
        <Button variant="primary" type="submit" onClick={() => navigate('/')}>
          Voltar ao cadastro
        </Button>
      </div>
    </Styled.List>
  );
}
