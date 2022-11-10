import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalColor } from "../../constants/color";

function Input({ label, invalid, style, textInputConfig }) {
  let inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    margin: 5,
    marginBottom: 15,
  },
  label: {},
  input: {
    backgroundColor: GlobalColor.colors.inputBackground,
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
    paddingVertical: 15,
  },
  invalidLabel: {
    color: GlobalColor.colors.rose500,
  },
  invalidInput: {
    borderColor: GlobalColor.colors.rose50,
    borderWidth: 1,
  },
});
