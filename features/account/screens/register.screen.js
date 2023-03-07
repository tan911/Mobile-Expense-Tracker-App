import React, { useState, useContext } from 'react';

import { ActivityIndicator, Colors } from 'react-native-paper';

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
  Spacer,
} from '../components/account.styles';
import { AuthenticationContext } from '../../../services/authentication.context';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { GlobalColor } from '../../../constants/color';
import { createUser } from '../util/auth';
import LoadingOverlay from '../../../components/UI/LoadingOverlay';
import { AuthContext } from '../../../store/auth-context';

export const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const signupHandler = async (email, password) => {
    if (password === repeatedPassword) {
      setIsAuthenticating(true);
      try {
        const token = await createUser(email, password);
        authCtx.authenticate(token);
        setIsAuthenticating(false);
      } catch (error) {
        // console.error(error.response?.data ?? error.toJSON());

        const errorMessage = error.response.data.error.message;
        Alert.alert('Authentication Failed', errorMessage, 'please try again');
        setIsAuthenticating(false);
      }
    } else {
      setError('Passwords do no match');
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user.." />;
  } else {
    return (
      <>
        <AccountContainer>
          <AuthInput
            placeholder="Username"
            value={username}
            textContentType="username"
            keyboardType="default"
            autoCapitalize="none"
            onChangeText={(u) => setUsername(u)}
          />

          <AuthInput
            placeholder="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />

          <AuthInput
            placeholder="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
          <AuthInput
            placeholder="Repeat Password"
            value={repeatedPassword}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatedPassword(p)}
          />
          <View>
            <Text>{error && error}</Text>
          </View>
          <AuthButton icon="email" mode="contained" onPress={() => signupHandler(email, password)}>
            Register
          </AuthButton>
        </AccountContainer>
        <Spacer style={styles.signInWrapper} size="large">
          <Text>Already have any account?</Text>

          <Text style={styles.signInLink} onPress={() => navigation.navigate('Login')}>
            Sign In
          </Text>
        </Spacer>
      </>
    );
  }
};

const styles = StyleSheet.create({
  signInWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
  },

  signInLink: {
    color: GlobalColor.colors.blue500,
    marginLeft: 5,
  },
});
