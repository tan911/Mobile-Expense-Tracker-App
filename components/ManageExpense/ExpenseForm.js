import { useState } from "react";
import { View, StyleSheet } from "react-native";

import Input from "./Input";
import Button from "../UI/Button";
import { GlobalColor } from "../../constants/color";

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit }) {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputValues((currInput) => {
      return {
        ...currInput,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    console.log("submit");
  }

  return (
    <View style={styles.rootContainer}>
      <Input
        label="Amount"
        textInputConfig={{
          placeholder: "$ 000, 000, 000",
          keyboardType: "decimal-pad",
          onChangeText: inputChangeHandler.bind(this, "amount"),
          value: inputValues.amount,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: inputChangeHandler.bind(this, "date"),
          value: inputValues.date,
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          placeholder: "Add little description about your expenses.",
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <Button style={styles.button} mode="cancel" onPress={onCancel}>
            Cancel
          </Button>
          <Button style={styles.button} mode="flat" onPress={submitHandler}>
            {submitButtonLabel}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: GlobalColor.colors.slate50,
    marginHorizontal: 15,
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 25,
  },

  buttonsContainer: {
    marginTop: 15,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
