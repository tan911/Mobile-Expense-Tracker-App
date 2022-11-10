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
import { SafeArea, SafeAreaInnerWrapper } from "../util/safe-area.component";
// import { ExpensesContext } from "../store/Expense-context";
// import { getDateMinusDays } from "../util/date";
const Home = () => {
  const tabBarHeight = useBottomTabBarHeight();
  // const expensesCtx = useContext(ExpensesContext);

  // const recentExpenses = expensesCtx.expenses.filter((expense) => {
  //   const today = new Date();
  //   const date7daysAgo = getDateMinusDays(today, 7);

  //   return expense.date > date7daysAgo;
  // });
  return (
    <SafeArea>
      <SafeAreaInnerWrapper tabBarHeight={tabBarHeight}>
        <AddCard />
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <RecentExpenses />
        </ScrollView>
      </SafeAreaInnerWrapper>
    </SafeArea>
  );
};

export default Home;

const styles = StyleSheet.create({
  scroll: {
    marginBottom: 15,
  },
});
