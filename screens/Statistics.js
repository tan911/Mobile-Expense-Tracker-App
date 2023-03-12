import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { SafeArea, SafeAreaInnerWrapper } from '../util/safe-area.component';
import { compareAsc, format } from 'date-fns'
import { PieChart } from 'react-native-svg-charts';
import { BarChart } from 'react-native-chart-kit';
import { Entypo } from '@expo/vector-icons'

import FilterByPeriodOfTime from '../components/FilterExpenseStats/FilterByPeriodOfTime';
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



const Statistics = () => {

  //  Colors for Pie Chart
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
  
  // Bar Chart Configuration
  const screenWidth = Dimensions.get('window').width;
  const chartConfig = {
    backgroundGradientFrom: GlobalColor.colors.darkBlue,
    backgroundGradientTo: GlobalColor.colors.darkBlue,
    color: () => `${GlobalColor.colors.slate50}`,
    barPercentage: 0.5,
  };
  
  // Date Bar Configuration
  const notFormattedDate = data.map((item) => item.date);
  const sortDate = notFormattedDate.sort(compareAsc);
  const monthDate = sortDate.map((date) => {
    return format(date, "MMM")
  });
  const removeDuplicatedMonth = monthDate.filter((item, pos, self) => {
    return self.indexOf(item) == pos;
  });
  const amount = data.map((item) => item.amount);
  const barChartData = {
    labels: removeDuplicatedMonth,
    datasets: [
      {
        data: amount
      }
    ]
  }
  
  // Avg Expense Calculations
  const totalExpense = data.map(({ amount }) => amount).reduce((acc, curr) => acc + curr);
  const averageExpense = data.map(({ amount }) => amount >= 50).reduce((acc, curr) => acc + curr);
  const lowExpense = data.map(({ amount }) => amount < 50).reduce((acc, curr) => acc + curr);
  
  // label Avg Config
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
            <Text style={styles.columnTextLabel}>Average Expense</Text>
          </View>
          <View>
            <View style={styles.column}>
              {avgColorSquare()}
              <Text style={styles.columnText}>{parseFloat(_lowPercentage).toFixed(2)}</Text>
            </View>
            <Text style={styles.columnTextLabel}>Low Expense</Text>
          </View>
        </View>
      </View>
    );
  };
  
  // Spend by week
  const _byWeek = data.map((item) => {
    const date = item.date;
    const day = date.getDate()
    const expensesInWeek = day <= 6 ? item.amount : 0;
    return expensesInWeek

  }).reduce((curr, acc) => curr + acc);

  // Spend by Month
  const _byMonth = data.map((item) => {
    const date = item.date;
    const day = date.getDate()
    const expensesInMonth = day <= 31 ? item.amount : 0;
    return expensesInMonth

  }).reduce((curr, acc) => curr + acc);

  // Spend by Year
  const _byYear = data.map((item) => {
    const date = item.date;
    const day = date.getDate()
    const expensesInYear = day <= 365 ? item.amount : 0;
    return expensesInYear

  }).reduce((curr, acc) => curr + acc);

  return (
    <SafeArea>
      <SafeAreaInnerWrapper>
        <View>
          <Text style={styles.title}>Manage Your expenses</Text>
          <View style={styles.pieContainer}>
            <View style={styles.titleExpenseContainer}>
              <View>
                <Text style={styles.titleExpenses}>Expenses</Text>
                <Text style={styles.titleExpensesDate}>1 Feb 2023 - 28 Feb 2023</Text>
              </View>
              <Text style={styles.titletotalExpenses}>{`₱${parseFloat(totalExpense).toFixed(2)}`}</Text>
            </View>
            <View style={styles.pieInnerContainer}>
              <PieChart style={{ height: 100, flex: 1, marginRight: 40}} data={pieData} innerRadius={'40%'} animate />
              <View>{labelData()}</View>
            </View>
          </View>
          <FilterByPeriodOfTime week={_byWeek} month={_byMonth} year={_byYear}/>
          <View style={styles.barContainer}>
            <View style={styles.barContainerLabel}>
              <View style={styles.barLabelIcon}>
                <Entypo name='bar-graph' size={20} color={GlobalColor.colors.slate50}/>
              </View>
              <Text style={styles.barLabelText}>Cash Report</Text>
            </View>
            <BarChart
              data={barChartData}
              width={365}
              height={170}
              yAxisLabel="₱"
              chartConfig={chartConfig}
              verticalLabelRotation={0}
              style={{borderBottomLeftRadius: 0}}
            />
          </View>
        </View>
      </SafeAreaInnerWrapper>
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
    color: GlobalColor.colors.darkBlue
  },
  pieContainer: {
    borderWidth: 0.8,
    borderColor: GlobalColor.colors.gray400,
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: GlobalColor.colors.darkBlue 
  },
  titleExpenseContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 5,
    paddingLeft: 10,
  },
  titleExpenses: {
    fontSize: 20,
    fontWeight: 'bold',
    color: GlobalColor.colors.slate300
  },
  titleExpensesDate: {
    color: GlobalColor.colors.gray400,
  },
  titletotalExpenses: {
    fontSize: 20,
    fontWeight: 'bold',
    color: GlobalColor.colors.blue500,
    paddingRight: 10,
  },
  pieInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  percentageExpenseRootContainer: {
    marginVertical: 30,
  },
  percentageDirection: {
    flexDirection: 'column',
    paddingRight: 20,
  },
  columnContainer: {
    marginBottom: 10,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnText: {
    marginLeft: 10,
    color: GlobalColor.colors.slate300
  },
  columnTextLabel: {
    color: GlobalColor.colors.slate300
  },
  barContainer: {
    overflow: 'hidden',
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: GlobalColor.colors.darkBlue
  },
  barContainerLabel: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  barLabelIcon: {
    backgroundColor: GlobalColor.colors.emerald500,
    padding: 7,
    borderRadius: 20, 
    marginRight: 10, 
    margin: 15
  },
  barLabelText: {
    color: GlobalColor.colors.slate300,
    fontWeight: 'bold',
    fontSize: 20
  }
});
