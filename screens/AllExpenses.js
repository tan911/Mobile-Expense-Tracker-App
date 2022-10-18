import { useContext } from "react";

import { View, StyleSheet, Platform, StatusBar } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={expensesCtx.expenses}
        expensesPeriod="total"
        title="All expenses"
        fallbackText="You have no recorded expenses"
      />
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
