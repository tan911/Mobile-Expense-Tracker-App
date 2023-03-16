import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
  isLoggedOut: false,
});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedOut, setIsLoggedOut] = useState();

  function authenticate(user) {
    setUser(user);
    console.log(user);
    const jsonUser = JSON.stringify(user);

    AsyncStorage.setItem('user', jsonUser);
  }

  function logout() {
    setUser(null);
    AsyncStorage.removeItem('user');
    setIsLoggedOut(true);
  }

  const value = {
    isAuthenticated: !!user,
    authenticate,
    logout,
    isLoggedOut,
    user,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
