import { View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-10-10"),
  },
  {
    id: "e2",
    description: "A pair of caps",
    amount: 59.99,
    date: new Date("2022-10-10"),
  },
  {
    id: "e3",
    description: "A pair of t-shirt",
    amount: 59.99,
    date: new Date("2022-10-10"),
  },
  {
    id: "e4",
    description: "bill",
    amount: 59.99,
    date: new Date("2022-10-10"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      {/* Summary */}
      <ExpensesSummary expenses={DUMMY_EXPENSE} periodName={expensesPeriod} />
      {/* List of Expenses */}
      <ExpensesList expenses={DUMMY_EXPENSE} />
    </View>
  );
};
export default ExpensesOutput;
