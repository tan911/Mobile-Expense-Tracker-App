import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { StyleSheet, Text } from "react-native";

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
} from "../components/account.styles";

import { AuthenticationContext } from "../../../services/authentication.context";
import { GlobalColor } from "../../../constants/color";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountContainer>
      <AuthInputWrapper>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
      </AuthInputWrapper>

      <AuthInputWrapper>
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
      </AuthInputWrapper>

      {error && (
        <ErrorContainer size="large">
          <Text>{error}</Text>
        </ErrorContainer>
      )}
      {!isLoading ? (
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => onLogin(email, password)}
        >
          Login
        </AuthButton>
      ) : (
        <ActivityIndicator animating={true} color={Colors.blue300} />
      )}

      <Spacer style={styles.registerWrapper}>
        <Text>Don't have an account?</Text>
        <Text
          mode="contained"
          onPress={() => navigation.navigate("Register")}
          style={styles.registerLink}
        >
          Sign Up
        </Text>
      </Spacer>
    </AccountContainer>
  );
};

const styles = StyleSheet.create({
  registerWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },

  registerLink: {
    color: GlobalColor.colors.blue500,
    marginLeft: 5,
  },
});
