import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer></NavigationContainer>
    </>
  );
}
