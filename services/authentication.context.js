import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState, createContext, useEffect } from "react";
import { auth } from "./authentication.service";
import { loginRequest } from "./authentication.service";
import { registerRequest } from "./authentication.service";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        console.log(u.email);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
        console.log(e);
      });
  };

  const onLogout = () => {
    setUser(null);
    signOut(auth);
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);

    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }

    registerRequest(email, password);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
