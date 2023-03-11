import React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { SafeArea, SafeAreaInnerWrapper } from '../util/safe-area.component';
import { PieChart } from 'react-native-svg-charts';
import { BarChart } from 'react-native-chart-kit';
import { compareAsc, format } from 'date-fns';

import { GlobalColor } from '../constants/color';

const data = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 14.99,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2022-02-18'),
  },
  {
    id: 'e6',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-01-05'),
  },
  {
    id: 'e7',
    description: 'Some bananas',
    amount: 5.99,
    date: new Date('2021-12-01'),
  },
  {
    id: 'e8',
    description: 'A book',
    amount: 5.99,
    date: new Date('2022-02-19'),
  },
  {
    id: 'e9',
    description: 'Another book',
    amount: 18.59,
    date: new Date('2022-02-18'),
  },
  {
    id: 'e10',
    description: 'Lazada',
    amount: 18.59,
    date: new Date('2022-10-12'),
  },
  {
    id: 'e11',
    description: 'nike',
    amount: 5.59,
    date: new Date('2022-10-11'),
  },
  {
    id: 'e12',
    description: 'Shoppe',
    amount: 18.59,
    date: new Date('2022-10-10'),
  },
  {
    id: 'e13',
    description: 'water',
    amount: 5.59,
    date: new Date('2022-10-10'),
  },
  {
    id: 'e14',
    description: 'amazon',
    amount: 150.59,
    date: new Date('2022-10-10'),
  },
  {
    id: 'e15',
    description: 'rice',
    amount: 5.59,
    date: new Date('2022-10-10'),
  },
  {
    id: 'e16',
    description: 'bill',
    amount: 18.59,
    date: new Date('2022-10-10'),
  },
  {
    id: 'e17',
    description: 'house bill',
    amount: 19.59,
    date: new Date('2022-10-10'),
  },
  {
    id: 'e18',
    description: 'food',
    amount: 5.59,
    date: new Date('2022-10-11'),
  },
];

const definedColors = (amount) => {
  if (amount >= 50) {
    return GlobalColor.colors.blue500;
  } else {
    return GlobalColor.colors.slate300;
  }
};

const pieData = data.map(({ id, amount }) => ({
  value: amount,
  svg: {
    fill: definedColors(amount),
  },
  key: id,
}));

// const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  backgroundGradientFrom: GlobalColor.colors.neutral100,
  backgroundGradientTo: GlobalColor.colors.slate50,
  color: (opacity = 0) => `rgba(59, 130, 246, ${opacity})`,
  barPercentage: 0.5,
  barRadius: 10,
};

const notFormattedDate = data.map((item) => item.date);
const sortDate = notFormattedDate.sort(compareAsc);
const monthDate = sortDate.map((date) => {
  return format(date, 'MMM');
});
const removeDuplicatedMonth = monthDate.filter((item, pos, self) => {
  return self.indexOf(item) == pos;
});
const amount = data.map((item) => item.amount);
const barChartData = {
  labels: removeDuplicatedMonth,
  datasets: [
    {
      data: amount,
    },
  ],
};

const totalExpense = data.map(({ amount }) => amount).reduce((acc, curr) => acc + curr);
const averageExpense = data.map(({ amount }) => amount >= 50).reduce((acc, curr) => acc + curr);
const lowExpense = data.map(({ amount }) => amount < 50).reduce((acc, curr) => acc + curr);

const labelData = () => {
  const _avgPercentage = (averageExpense / totalExpense) * 100;
  const _lowPercentage = (lowExpense / totalExpense) * 100;

  const avgColorSquare = (avg) => {
    if (avg) {
      return (
        <View style={{ height: 10, width: 10, backgroundColor: GlobalColor.colors.blue500 }}></View>
      );
    } else {
      return (
        <View
          style={{ height: 10, width: 10, backgroundColor: GlobalColor.colors.slate300 }}
        ></View>
      );
    }
  };

  return (
    <View style={styles.percentageExpenseRootContainer}>
      <View style={styles.percentageDirection}>
        <View style={styles.columnContainer}>
          <View style={styles.column}>
            {avgColorSquare(_avgPercentage)}
            <Text style={styles.columnText}>{parseFloat(_avgPercentage).toFixed(2)}</Text>
          </View>
          <Text>Average Expense</Text>
        </View>
        <View>
          <View style={styles.column}>
            {avgColorSquare()}
            <Text style={styles.columnText}>{parseFloat(_lowPercentage).toFixed(2)}</Text>
          </View>
          <Text>Low Expense</Text>
        </View>
      </View>
    </View>
  );
};

const Statistics = () => {
  return (
    <SafeArea>
      <ScrollView>
        <SafeAreaInnerWrapper>
          <View>
            <Text style={styles.title}>Manage Your expenses</Text>
            <View style={styles.pieContainer}>
              <View style={styles.titleExpenseContainer}>
                <Text style={styles.titleExpenses}>Expenses</Text>
                <Text style={styles.titleExpensesDate}>1 Feb 2023 - 28 Feb 2023</Text>
              </View>
              <PieChart style={{ height: 200 }} data={pieData} innerRadius={'50%'} animate />
              <View>{labelData()}</View>
            </View>
            <View style={styles.barContainer}>
              <BarChart
                data={barChartData}
                width={365}
                height={220}
                yAxisLabel="$"
                chartConfig={chartConfig}
                verticalLabelRotation={30}
              />
            </View>
          </View>
        </SafeAreaInnerWrapper>
      </ScrollView>
    </SafeArea>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  title: {
    width: '50%',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pieContainer: {
    borderWidth: 0.8,
    borderColor: GlobalColor.colors.gray400,
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  titleExpenseContainer: {
    marginBottom: 25,
    marginTop: 5,
    paddingLeft: 10,
  },
  titleExpenses: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleExpensesDate: {
    color: GlobalColor.colors.gray400,
  },
  percentageExpenseRootContainer: {
    marginVertical: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  percentageDirection: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  columnContainer: {
    marginRight: 50,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnText: {
    marginLeft: 10,
  },
  barContainer: {
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderWidth: 1,
  },
});
