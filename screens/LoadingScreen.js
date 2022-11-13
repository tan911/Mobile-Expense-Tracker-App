import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { SafeArea, SafeAreaInnerWrapper } from "../util/safe-area.component";
import { StyleSheet, Text, View } from "react-native";

export const LoadingScreen = () => {
  return <ActivityIndicator size={"large"} style={styles.activityIndicator} />;
};

const styles = StyleSheet.create({
  activityIndicator: {
    marginTop: "auto",
    marginBottom: "auto",
  },
});
