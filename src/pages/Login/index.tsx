import { useState, useEffect, FormEvent } from 'react';
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
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(30);

  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (count === 3) return;

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

        setCount(prevState => prevState + 1);
      });
  }

  useEffect(() => {
    if (count === 3) {
      setErrors({} as ErrorProps);
    }
  }, [count]);

  useEffect(() => {
    if (count === 3) {
      setTimeout(() => {
        if (time !== 0) {
          setTime(prevState => prevState - 1);
        } else {
          setTime(30);
          setCount(0);
        }
      }, 1000);
    }
  }, [count, time]);

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
          disabled={count === 3}
        />
        <Input
          label="Senha:"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          onFocus={() => setErrors({} as ErrorProps)}
          error={errors.password}
          disabled={count === 3}
        />
        {count === 3 && (
          <span>
            Próxima tentativa em <strong>{time}</strong> segundos
          </span>
        )}
      </div>
      <div className="buttonContainer">
        <Button variant="primary" type="submit" disabled={count === 3}>
          Fazer login
        </Button>
      </div>
    </Styled.Form>
  );
}
