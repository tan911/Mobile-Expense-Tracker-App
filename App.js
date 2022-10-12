import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// upper navigation
import ManageExpense from "./screens/ManageExpense";

// Lower navigation
import Home from "./screens/Home";
import Statistics from "./screens/Statistics";
import AllExpenses from "./screens/AllExpenses";
import Account from "./screens/Account";

import { GlobalColor } from "./constants/color";
import ExpenseContextProvider from "./store/expense-context";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

// for the bottoms tabs navigation
function ExpensesOverivew() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarStyle: GlobalColor.colors.slate50,
        tabBarActiveTintColor: GlobalColor.colors.blue500,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: "home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home-outline" size={24} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Statistics"
        component={Statistics}
        options={{
          title: "Stastics",
          tabBarLabel: "Statistics",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart-outline" size={24} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "all expenses",
          tabBarLabel: "All expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={24} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Account"
        component={Account}
        options={{
          title: "user",
          tabBarLabel: "User",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpenseContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverivew}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}
