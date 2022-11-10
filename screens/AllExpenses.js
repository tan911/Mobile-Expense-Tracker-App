import { useContext } from "react";

import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";
import { SafeArea, SafeAreaInnerWrapper } from "../util/safe-area.component";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <SafeArea>
      <SafeAreaInnerWrapper>
        <ScrollView>
          <ExpensesOutput
            expenses={expensesCtx.expenses}
            expensesPeriod="Total"
            title="All expenses"
            fallbackText="You have no recorded expenses"
          />
        </ScrollView>
      </SafeAreaInnerWrapper>
    </SafeArea>
  );
}

export default AllExpenses;
