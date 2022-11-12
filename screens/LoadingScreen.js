import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { SafeArea } from "../util/safe-area.component";
import { StyleSheet, Text, View } from "react-native";

export const LoadingScreen = () => {
  return (
    <SafeArea styles={styles.loadingContainer}>
      <ActivityIndicator size={"large"} style={styles.activityIndicator} />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  activityIndicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
});
