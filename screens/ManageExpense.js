import React, { useContext, useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import PrimaryButton from "../components/UI/PrimaryButton";
import { GlobalColor } from "../constants/color";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit expense" : "Add expense",
    });
  }, [navigation, isEditing]);

  function deletePressHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelPressHandler() {
    navigation.goBack();
  }

  function confirmPressHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {
        description: "Test!!!",
        amount: 19.99,
        date: new Date("2022-11-10"),
      });
    } else {
      expensesCtx.addExpense({
        description: "Test",
        amount: 19.99,
        date: new Date("2022-11-10"),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelPressHandler}
      />
      {/* <View style={styles.allButtonsContainer}> */}
      {/* <View style={styles.buttons}>
          <Button
            style={styles.button}
            mode="cancel"
            onPress={cancelPressHandler}
          >
            Cancel
          </Button>
          <Button
            style={styles.button}
            mode="flat"
            onPress={confirmPressHandler}
          >
            {isEditing ? "Update" : "Add"}
          </Button>
        </View> */}
      {isEditing && (
        <View style={styles.deleteContainer}>
          <PrimaryButton>
            <Ionicons
              name="trash-outline"
              size={24}
              color={GlobalColor.colors.rose500}
              onPress={deletePressHandler}
            />
          </PrimaryButton>
        </View>
      )}
      {/* </View> */}
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalColor.colors.neutral100,
  },

  // allButtonsContainer: {
  //   margin: 15,
  //   paddingHorizontal: 18,
  //   paddingVertical: 20,
  //   backgroundColor: GlobalColor.colors.slate50,
  //   borderTopStartRadius: 60,
  //   borderTopEndRadius: 60,
  //   elevation: 1,
  // },

  // buttons: {
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  // button: {
  //   minWidth: 120,
  //   marginHorizontal: 8,
  // },

  deleteContainer: {
    // backgroundColor: GlobalColor.colors.neutral50,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    // elevation: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});
