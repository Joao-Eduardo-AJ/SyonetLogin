import React, { createContext, useContext } from 'react';
import api from '../api/api';
import { randomId } from '../utils/randomId';
export interface UserContextProps {
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
  function handleCreateUser(
    email: string,
    password: string,
    callback: () => void,
  ) {
    const body = {
      id: randomId(),
      email,
      password,
    };

    api.post('/register', body).then(() => {
      callback();
    });
  }

  return (
    <UserContext.Provider value={{ handleCreateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserData() {
  const context = useContext(UserContext);
  return context;
}
