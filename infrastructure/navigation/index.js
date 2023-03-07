import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './app.navigator';
import { AccountNavigator } from './account.navigator';

import { AuthenticationContext } from '../../services/authentication.context';
import { ActivityIndicator } from 'react-native-paper';
import { LoadingScreen } from '../../screens/LoadingScreen';
import { View } from 'react-native';
import { RegisterScreen } from '../../features/account/screens/register.screen';
import { LoginScreen } from '../../features/account/screens/login.screen';
import { AuthContext } from '../../store/auth-context';
import { authenticatte } from '../../features/account/util/auth';

export const Navigation = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx.isAuthenticated);
  return (
    <NavigationContainer>
      {authCtx.isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
