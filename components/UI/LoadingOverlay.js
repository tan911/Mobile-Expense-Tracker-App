import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalColor } from "../../constants/color";

function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={GlobalColor.colors.blue500} />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
});
