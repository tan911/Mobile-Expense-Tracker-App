import React, { useState, useContext } from "react";

import { ActivityIndicator, Colors } from "react-native-paper";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
  Spacer,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication.context";
import { StyleSheet, Text } from "react-native";
import { GlobalColor } from "../../../constants/color";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);
  return (
    <AccountContainer>
      <AuthInput
        label="E-mail"
        value={email}
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(u) => setEmail(u)}
      />

      <AuthInput
        label="Password"
        value={password}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(p) => setPassword(p)}
      />
      <AuthInput
        label="Repeat Password"
        value={repeatedPassword}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(p) => setRepeatedPassword(p)}
      />
      {error && (
        <ErrorContainer size="large">
          <Text variant="error">{error}</Text>
        </ErrorContainer>
      )}
      {!isLoading ? (
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => onRegister(email, password, repeatedPassword)}
        >
          Register
        </AuthButton>
      ) : (
        <ActivityIndicator animating={true} color={Colors.blue300} />
      )}
      <Spacer style={styles.signInWrapper} size="large">
        <Text>Already have any account?</Text>

        <Text
          style={styles.signInLink}
          onPress={() => navigation.navigate("Login")}
        >
          Sign In
        </Text>
      </Spacer>
    </AccountContainer>
  );
};

const styles = StyleSheet.create({
  signInWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "auto",
  },

  signInLink: {
    color: GlobalColor.colors.blue500,
    marginLeft: 5,
  },
});
