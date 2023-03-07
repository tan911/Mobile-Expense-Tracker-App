import React from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { GlobalColor } from '../../constants/color';

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text>{message}</Text>
      <Button onPress={onConfirm} title="Okay"></Button>
    </View>
  );
}

export default ErrorOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  text: {
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
