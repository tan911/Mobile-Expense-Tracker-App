import { View } from "react-native";
import { GlobalColor } from "../../constants/color";
import { StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      {/* Summary */}
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {/* List of Expenses */}
      <ExpensesList expenses={expenses} />
    </View>
  );
};
export default ExpensesOutput;

// const styles = StyleSheet.create({
//   container: {
//     height: 1000,
//   },
// });
