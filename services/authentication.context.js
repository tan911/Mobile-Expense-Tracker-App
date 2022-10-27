import { loginRequest } from "./authentication.service";
import React, { createContext, Provider, useEffect } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onLogin = () => {
    loginRequest("dekeji1@gmail.com", "Paula2002")
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        console.log(user.email);
      })
      .catch((err) => {
        errorMessage = err.message;
        setError(errorMessage);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
