import React, { useState, useContext } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Alert, StyleSheet, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  AuthInputWrapper,
  ErrorContainer,
  Title,
  Spacer,
} from '../components/account.styles';

import { AuthenticationContext } from '../../../services/authentication.context';
import { GlobalColor } from '../../../constants/color';
import { login } from '../util/auth';
import LoadingOverlay from '../../../components/UI/LoadingOverlay';
import KeyboardDismiss from '../../../components/UI/KeyboardDismiss';
import { AuthContext } from '../../../store/auth-context';

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler() {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
      setIsAuthenticating(false);
    } catch (error) {
      console.log(error.response?.data ?? error.toJSON());
      const errorMessage = error.response.data.error.message;
      Alert.alert('Login Failed', errorMessage, 'please try again');

      setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay message="Logging In.." />;
  } else {
    return (
      <>
        <KeyboardDismiss>
          <AccountContainer>
            <AuthInputWrapper>
              <AuthInput
                placeholder="E-mail"
                value={email}
                textContentType="emailAddress"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(u) => setEmail(u)}
              />
            </AuthInputWrapper>

            <AuthInputWrapper>
              <AuthInput
                placeholder="Password"
                value={password}
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(p) => setPassword(p)}
              />
            </AuthInputWrapper>
            <Text onPress={() => {}} style={{ marginLeft: 'auto', marginRight: 30 }}>
              Forgot Passowrd?
            </Text>

            {!isAuthenticating ? (
              <AuthButton icon="lock-open-outline" mode="contained" onPress={loginHandler}>
                Login
              </AuthButton>
            ) : (
              <ActivityIndicator animating={true} color={Colors.blue300} />
            )}
          </AccountContainer>
        </KeyboardDismiss>
        <Spacer style={styles.registerWrapper}>
          <Text>Don't have an account?</Text>
          <Text
            mode="contained"
            onPress={() => navigation.navigate('Register')}
            style={styles.registerLink}
          >
            Sign Up
          </Text>
        </Spacer>
      </>
    );
  }
};

const styles = StyleSheet.create({
  registerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
  },

  registerLink: {
    color: GlobalColor.colors.blue500,
    marginLeft: 5,
  },
  error: {
    color: GlobalColor.colors.rose500,
  },
});
