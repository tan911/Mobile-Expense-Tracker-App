import { View, Text, StyleSheet } from "react-native";

import { GlobalColor } from "../../constants/color";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const ExpensesOutput = ({ expenses, expensesPeriod, title }) => {
  return (
    <View style={styles.rootContainer}>
      <View>
        <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.title}>{title ? title : "Recent activity"}</Text>
        <ExpensesList expenses={expenses} />
      </View>
    </View>
  );
};
export default ExpensesOutput;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },

  listContainer: {
    backgroundColor: GlobalColor.colors.neutral50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 30,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    elevation: 2,
  },

  title: {
    color: GlobalColor.colors.gray400,
    paddingBottom: 10,
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: "bold",
    opacity: 0.8,
  },
});
