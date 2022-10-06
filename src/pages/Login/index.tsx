import { Button } from '../../components/Button/Index';
import { Input } from '../../components/Input/Index';
import * as Styled from './styles';

export function Login() {
  return (
    <Styled.Form>
      <h1>Login de usuário</h1>
      <div className="inputContainer">
        <Input label="Email:" type="email"></Input>
        <Input label="Senha:" type="password"></Input>
      </div>
      <div className="buttonContainer">
        <Button variant="primary" type="submit">
          Fazer login
        </Button>
      </div>
    </Styled.Form>
  );
}
