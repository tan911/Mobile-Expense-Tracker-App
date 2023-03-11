import { StatusBar } from 'expo-status-bar';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
// upper navigation
import ExpenseContextProvider from './store/expense-context';
import { Navigation } from './infrastructure/navigation';
import { AuthenticationContextProvider } from './services/authentication.context';
import { SafeArea } from './util/safe-area.component';
import { AuthContext, AuthContextProvider } from './store/auth-context';
import { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token');

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    <AppLoading />;
  }
  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AuthContextProvider>
        <ExpenseContextProvider>
          <Root />
        </ExpenseContextProvider>
      </AuthContextProvider>
    </>
  );
}
