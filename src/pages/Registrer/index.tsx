import { FormEvent, useState } from 'react';
import { Button } from '../../components/Button/Index';
import { Input } from '../../components/Input/Index';
import * as Styled from './styles';
import { ErrorProps, validationRegister } from './validation/index';

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({} as ErrorProps);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const body = {
      email,
      password,
      confirmPassword,
    };

    const errors = await validationRegister(body);
    if (errors) {
      return setErrors(errors);
    }
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <h1>Cadastro de usuário</h1>
      <div className="inputContainer">
        <Input
          label="Email:"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          error={errors.email}
          onFocus={() => setErrors({})}
        />
        <Input
          label="Senha:"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          error={errors.password}
          onFocus={() => setErrors({})}
        />
        <Input
          label="Confirme sua Senha:"
          name="confirmPassword"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
          error={errors.confirmPassword}
          onFocus={() => setErrors({})}
        />
      </div>
      <div className="buttonContainer">
        <Button variant="outline" type="button">
          Já sou usuário
        </Button>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </div>
    </Styled.Form>
  );
}
