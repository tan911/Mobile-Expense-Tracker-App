import { View, Text, StyleSheet } from "react-native";
import { GlobalColor } from "../../constants/color";
import ExpensesList from "./ExpensesList";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Summary</Text>
      <View style={styles.container}>
        <Text style={styles.days}>{periodName}</Text>
        <Text style={styles.total}>${expensesSum.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: GlobalColor.colors.slate50,
    borderRadius: 10,
    elevation: 1,
    // shadowColor: "white",
    // shadowOffset: {
    //   width: 2,
    //   height: 0,
    // },
    // shadowRadius: 25,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderBottomWidth: 1,
    borderColor: GlobalColor.colors.slate300,
    paddingVertical: 5,
  },

  title: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "bold",
    color: GlobalColor.colors.gray400,
  },

  days: {
    fontSize: 15,
    // paddingBottom: 10,
  },

  total: {
    fontSize: 15,
    color: GlobalColor.colors.rose500,
    // paddingBottom: 10,
  },
});
