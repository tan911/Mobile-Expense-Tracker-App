import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

function KeyboardDismiss({ children }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
}

export default KeyboardDismiss;
