import React, { useContext } from "react";
import { View } from "react-native";
import AddCard from "../components/AddCard/AddCard";
// import { StyleSheet } from "react-native";
// import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import RecentExpenses from "./RecentExpenses";
// import { ExpensesContext } from "../store/Expense-context";
// import { getDateMinusDays } from "../util/date";

const Home = (expenses) => {
  // const expensesCtx = useContext(ExpensesContext);

  // const recentExpenses = expensesCtx.expenses.filter((expense) => {
  //   const today = new Date();
  //   const date7daysAgo = getDateMinusDays(today, 7);

  //   return expense.date > date7daysAgo;
  // });

  return (
    <View>
      <AddCard />
      <RecentExpenses expenses={expenses} />
    </View>
  );
};

export default Home;
