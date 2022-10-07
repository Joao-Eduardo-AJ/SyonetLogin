import React, { createContext, useContext, useState } from 'react';
import api from '../api/api';

export interface UserDataProps {
  id: string;
  email: string;
  password: string;
}

export interface UserContextProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  data: UserDataProps[];
  handleCreateUser: (
    email: string,
    password: string,
    callback: () => void,
  ) => void;
}

export interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext({} as UserContextProps);

export function UserProvider({ children }: UserProviderProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [data, setData] = useState<UserDataProps[]>([]);

  function handleCreateUser(
    email: string,
    password: string,
    callback: () => void,
  ) {
    const body = {
      id: data.length + 1,
      email,
      password,
    };

    api.post('/register', body).then(response => {
      setData(response.data);
      callback();
    });
  }

  return (
    <UserContext.Provider
      value={{
        confirmPassword,
        email,
        password,
        setConfirmPassword,
        setEmail,
        setPassword,
        data,
        handleCreateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserData() {
  const context = useContext(UserContext);
  return context;
}
