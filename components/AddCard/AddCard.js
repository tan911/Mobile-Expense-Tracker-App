import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { GlobalColor } from "../../constants/color";
import PrimaryButton from "../UI/PrimaryButton";
import { useContext } from "react";
import { ExpensesContext } from "../../store/expense-context";

const AddCard = () => {
  const navigation = useNavigation();
  const { expenses } = useContext(ExpensesContext);
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  function addExpensePressHandler() {
    navigation.navigate("ManageExpense");
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#3b82f6", "#2563eb"]}
        style={styles.cardContainer}
      >
        <Text style={styles.currentText}>Current Expense</Text>
        <View style={styles.figurersContainer}>
          <View>
            <Text style={styles.figure}>₱{expensesSum.toFixed(2)}</Text>
          </View>
          <View>
            <PrimaryButton onPress={addExpensePressHandler}>
              <AntDesign
                name="pluscircleo"
                size={45}
                color={GlobalColor.colors.slate50}
              />
            </PrimaryButton>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  cardContainer: {
    padding: 30,
    margin: 2,
    width: "100%",
    borderRadius: 10,
  },

  currentText: {
    paddingVertical: 2,
    marginBottom: 5,
    fontSize: 15,
    fontWeight: "bold",
    color: GlobalColor.colors.slate300,
  },

  figurersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  figure: {
    fontSize: 35,
    fontWeight: "bold",
    color: GlobalColor.colors.slate50,
  },
});
