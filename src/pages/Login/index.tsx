import { useState, FormEvent } from 'react';
import { Button } from '../../components/Button/Index';
import { Input } from '../../components/Input/Index';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';
import api from '../../api/api';

interface ErrorProps {
  email: string;
  password: string;
}

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({} as ErrorProps);

  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const body = {
      email,
      password,
    };

    api
      .post('/login', body)
      .then(response => {
        navigate('/user');
      })
      .catch(error => {
        if (error.response.status === 400) {
          const errorsData = {
            email: 'Email inválido',
            password: 'Senha inválida',
          };

          setErrors(errorsData);
        }
      });
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <h1>Login de usuário</h1>
      <div className="inputContainer">
        <Input
          label="Email:"
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          onFocus={() => setErrors({} as ErrorProps)}
          error={errors.email}
        />
        <Input
          label="Senha:"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          onFocus={() => setErrors({} as ErrorProps)}
          error={errors.password}
        />
      </div>
      <div className="buttonContainer">
        <Button variant="primary" type="submit">
          Fazer login
        </Button>
      </div>
    </Styled.Form>
  );
}
