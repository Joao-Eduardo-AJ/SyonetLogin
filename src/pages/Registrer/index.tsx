import { Button } from '../../components/Button/Index';
import { Input } from '../../components/Input/Index';
import * as Styled from './styles';

export function Register() {
  return (
    <Styled.Form>
      <h1>Cadastro de usuário</h1>
      <div className="inputContainer">
        <Input label="Email:" type="email"></Input>
        <Input label="Senha:" type="password"></Input>
        <Input label="Confirme sua Senha:" type="password"></Input>
      </div>
      <div className="buttonContainer">
        <Button variant="outline">Já sou usuário</Button>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </div>
    </Styled.Form>
  );
}
