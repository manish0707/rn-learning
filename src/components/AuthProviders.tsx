import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {useState} from 'react';
import {createContext} from 'react';

export type User = {username: string} | null;

interface IAuthContext {
  user: User;
  login: (userData: {username: string; password: string}) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface AuthProvidersProps {}

export const AuthProviders: React.FC<AuthProvidersProps> = ({children}) => {
  const [user, setUser] = useState<User>(null);

  async function login({username}: {username: string; password: string}) {
    try {
      // making a api call for loging in user
      const {user: loggedInUser, token} = {
        user: {username},
        token: 'abcxyz',
      };
      await AsyncStorage.setItem('authToken', token);
      setUser(loggedInUser);
    } catch (e) {
      console.error(e.message);
    }
  }

  function logout() {
    try {
      // make a api call for logout
      const apiResponse = true;
      if (apiResponse) {
        setUser(null);
        AsyncStorage.removeItem('authToken');
      }
    } catch (e) {
      console.error(e.message);
    }
  }
  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
