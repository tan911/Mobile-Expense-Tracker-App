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
  inputContainer: {
    backgroundColor: GlobalColor.colors.neutral100,
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
  label: {
    fontSize: 15,
    marginBottom: 6,
  },
  input: {
    paddingVertical: 3,
    fontSize: 16,
  },
});
