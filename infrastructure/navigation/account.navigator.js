import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";
import { AuthenticationContext } from "../../services/authentication.context";
import { LoadingScreen } from "../../screens/LoadingScreen";

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => {
  const { isAuthenticated, isLoggedOut } = useContext(AuthenticationContext);

  return (
    <>
      {!isAuthenticated && !isLoggedOut ? (
        <LoadingScreen />
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </>
  );
};
