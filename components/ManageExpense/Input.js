import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalColor } from "../../constants/color";

function Input({ label, textInputConfig }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {},
  label: {},
  input: {},
});
