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

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit expense" : "Add expense",
    });
  }, [navigation, isEditing]);

  function cancelPressHandler() {
    navigation.goBack();
  }

  function confirmPressHandler(expenseData) {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }

  function deletePressHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelPressHandler}
        onSubmit={confirmPressHandler}
        defaultValues={selectedExpense}
      />
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
    </View>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: GlobalColor.colors.neutral100,
  },

  allButtonsContainer: {
    flex: 1,
    paddingHorizontal: 18,
    paddingVertical: 20,
    backgroundColor: GlobalColor.colors.slate50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
    elevation: 1,
  },

  deleteContainer: {
    // backgroundColor: GlobalColor.colors.neutral50,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    // elevation: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});
