import { FlatList, View, Text, StyleSheet } from "react-native";
import ExpenseItem from "./ExpenseItem";

import { GlobalColor } from "../../constants/color";

const renderExpenseItem = (itemData) => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <View style={styles.rootContaier}>
      <Text style={styles.title}>Recent Activity</Text>
      <View>
        <FlatList
          data={expenses}
          renderItem={renderExpenseItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  rootContaier: {
    marginHorizontal: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: GlobalColor.colors.slate50,
    borderTopStartRadius: 30,
    borderBottomEndRadius: 30,
    elevation: 1,
  },

  title: {
    fontSize: 16,
    padding: 10,
    letterSpacing: 1,
    fontWeight: "bold",
    opacity: 0.8,
  },
});
