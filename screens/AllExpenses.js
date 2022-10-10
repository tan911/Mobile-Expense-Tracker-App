import React from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function AllExpenses() {
  return <ExpensesOutput expensesPeriod="total" />;
}

export default AllExpenses;
