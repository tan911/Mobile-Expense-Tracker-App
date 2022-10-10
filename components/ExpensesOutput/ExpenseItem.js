import React from "react";
import { Pressable, View, Text } from "react-native";
import { GlobalColor } from "../../constants/color";
import { StyleSheet } from "react-native";
import { getFormattedDate } from "../../util/date";
function ExpenseItem({ description, amount, date }) {
  function expensePressHandler() {}
  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View styles={styles.amountContainer}>
          <Text styles={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalColor.colors.slate300,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: "#fff",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 4,
    shadowOpacity: 0.4,
  },
  textBase: {
    color: "black",
  },

  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: "purple",
    fontWeight: "bold",
  },
});
