import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { GlobalColor } from '../../constants/color';

function LoadingOverlay({ message }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={GlobalColor.colors.blue500} />
      <Text>{message}</Text>
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
});
