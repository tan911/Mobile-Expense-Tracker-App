import { useContext } from "react";

import { View, StyleSheet, Platform, StatusBar } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";
import { SafeArea } from "../util/safe-area.component";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <SafeArea>
      <ExpensesOutput
        expenses={expensesCtx.expenses}
        expensesPeriod="total"
        title="All expenses"
        fallbackText="You have no recorded expenses"
      />
    </SafeArea>
  );
}

export default AllExpenses;
