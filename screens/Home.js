import React from "react";
import { View } from "react-native";
import AddCard from "../components/AddCard/AddCard";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const Home = () => {
  return (
    <View>
      <AddCard />
      <ExpensesOutput expensesPeriod="Last 7 days" />
    </View>
  );
};

export default Home;
