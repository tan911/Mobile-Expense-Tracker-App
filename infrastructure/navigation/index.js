import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";

import { AuthenticationContext } from "../../services/authentication.context";
import { ActivityIndicator } from "react-native-paper";
import { LoadingScreen } from "../../screens/LoadingScreen";
import { View } from "react-native";

export const Navigation = () => {
  // const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
