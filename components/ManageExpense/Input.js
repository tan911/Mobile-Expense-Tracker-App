import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalColor } from "../../constants/color";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

function Input({ label, invalid, style, textInputConfig, dateInputConfig }) {
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
      {!dateInputConfig ? (
        <TextInput style={inputStyles} {...textInputConfig} />
      ) : (
        <DateTimePicker
          style={styles.dateInput}
          {...dateInputConfig}
          mode="date"
          is24Hour={true}
        />
      )}
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
  dateInput: {
    width: "100%",
    backgroundColor: GlobalColor.colors.inputBackground,
    paddingVertical: 25,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  invalidLabel: {
    color: GlobalColor.colors.rose500,
  },
  invalidInput: {
    borderColor: GlobalColor.colors.rose50,
    borderWidth: 1,
  },
});
