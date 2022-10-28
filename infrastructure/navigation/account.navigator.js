import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen headerMode="none" name="Main" component={AccountScreen} />
    <Stack.Screen headerMode="none" name="Login" component={LoginScreen} />
    <Stack.Screen
      headerMode="none"
      name="Register"
      component={RegisterScreen}
    />
  </Stack.Navigator>
);
