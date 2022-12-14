import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Index';
import { Input } from '../../components/Input/Index';
import * as Styled from './styles';
import { ErrorProps, validationRegister } from './validation/index';
import { Modal } from '../../components/Modal/Index';
import { useUserData } from '../../context/UserContext';

export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({} as ErrorProps);
  const [modalVisible, setModalVisible] = useState(false);

  const { handleCreateUser } = useUserData();

  const navigate = useNavigate();

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
    handleCreateUser(email, password, () => setModalVisible(true));
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
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          error={errors.password}
          onFocus={() => setErrors({})}
        />
        <Input
          label="Confirme sua Senha:"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
          error={errors.confirmPassword}
          onFocus={() => setErrors({})}
        />
      </div>
      <div className="buttonContainer">
        <Button
          variant="outline"
          type="button"
          onClick={() => navigate('/login')}
        >
          Já sou usuário
        </Button>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
        {modalVisible && <Modal />}
      </div>
    </Styled.Form>
  );
}
