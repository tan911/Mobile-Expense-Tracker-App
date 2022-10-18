import React, { useContext } from "react";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import AddCard from "../components/AddCard/AddCard";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import RecentExpenses from "./RecentExpenses";
// import { ExpensesContext } from "../store/Expense-context";
// import { getDateMinusDays } from "../util/date";
const Home = () => {
  const tabBarHeight = useBottomTabBarHeight();
  console.log(tabBarHeight);
  // const expensesCtx = useContext(ExpensesContext);

  // const recentExpenses = expensesCtx.expenses.filter((expense) => {
  //   const today = new Date();
  //   const date7daysAgo = getDateMinusDays(today, 7);

  //   return expense.date > date7daysAgo;
  // });

  return (
    <SafeAreaView style={styles.rootContainer}>
      <AddCard />
      <RecentExpenses />
      {/* <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" /> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
