import React, { useContext, useLayoutEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import PrimaryButton from "../components/UI/PrimaryButton";
import { GlobalColor } from "../constants/color";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

function ManageExpense({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  async function confirmPressHandler(expenseData) {
    setIsLoading(true);
    try {
      if (isEditing) {
        expensesCtx.updateExpense(editedExpenseId, expenseData);
        await updateExpense(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expensesCtx.addExpense({ ...expenseData, id });
      }
    } catch (error) {
      setError(error);
    }

    navigation.goBack();
    setIsLoading(false);
  }

  if (error && !isLoading) {
    return <ErrorOverlay message={error} />;
  }

  function deletePressHandler() {
    setIsLoading(true);

    deleteExpense(editedExpenseId);
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
    </TouchableWithoutFeedback>
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
