import React from 'react';

import ManageExpense from '../../screens/ManageExpense';

// Lower naviation
import Home from '../../screens/Home';
import Statistics from '../../screens/Statistics';
import AllExpenses from '../../screens/AllExpenses';
import Account from '../../screens/Account';

import { GlobalColor } from '../../constants/color';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { Text, TouchableHighlight, View } from 'react-native';
import CommunityHomePage from '../../features/community/screens/CommunityHomePage';
import AskQuestion from '../../features/community/screens/AskQuestion';
import AddComment from '../../features/community/screens/AddComment';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
// for the bottoms tabs navigation
function ExpensesOverivew() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarStyle: GlobalColor.colors.slate50,
        tabBarActiveTintColor: GlobalColor.colors.blue500,
        headerShown: false,
      }}
    >
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: 'home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home-outline" size={24} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Statistics"
        component={Statistics}
        options={{
          title: 'Stastics',
          tabBarLabel: 'Statistics',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart-outline" size={24} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'all expenses',
          tabBarLabel: 'All expenses',
          tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={24} color={color} />,
        }}
      />
      <BottomTabs.Screen
        name="Community"
        component={CommunityHomePage}
        options={{
          title: 'Community',
          tabBarLabel: 'Community',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="Account"
        component={Account}
        options={{
          title: 'Account',
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
          headerShown: true,
        }}
      />
    </BottomTabs.Navigator>
  );
}

export const AppNavigator = () => {
  return (
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
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name="AskQuestion"
        component={AskQuestion}
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name="AddComment"
        component={AddComment}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};
