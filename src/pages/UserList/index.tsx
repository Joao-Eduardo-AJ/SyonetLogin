import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Index';
import * as Styled from './styles';
import { Card } from './components/Card';
import api from '../../api/api';

interface UserDataProps {
  id: string;
  email: string;
}

export function User() {
  const [data, setData] = useState<UserDataProps[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    api.get('/users').then(response => setData(response.data));
  }, []);

  return (
    <Styled.List>
      <h1>Usuários cadastrados</h1>
      <div className="listContainer">
        {data.map(user => (
          <Card key={user.id} email={user.email} id={user.id} />
        ))}
      </div>
      <div className="buttonContainer">
        <Button variant="primary" type="submit" onClick={() => navigate('/')}>
          Voltar ao cadastro
        </Button>
      </div>
    </Styled.List>
  );
}
