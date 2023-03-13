import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PrimaryButton from '../UI/PrimaryButton';
import { GlobalColor } from '../../constants/color';

function FilterByPeriodOfTime({ week, month, year }) {
  const [timeExpense, setTimeExpense] = useState(week);
  const [byTime, setByTime] = useState('week');
  const [avgTime, setAvgTime] = useState('Weekly');
  const [filterExpense, setFilterExpense] = useState([
    { filter: 'This week', time: 'week', avgTime: 'Weekly', isActive: true, byExpense: week },
    { filter: 'This month', time: 'month', avgTime: 'Monthly', isActive: false, byExpense: month },
    { filter: 'This year', time: 'year', avgTime: 'Yearly', isActive: false, byExpense: year },
  ]);

  const filterByPeriodOfTimeHandler = (item) => {
    const activeExpense = filterExpense.map((filITem) => {
      if (filITem.filter === item) {
        setTimeExpense(filITem.byExpense);
        setByTime(filITem.time);
        setAvgTime(filITem.avgTime);
        return { ...filITem, isActive: true };
      } else {
        return { ...filITem, isActive: false };
      }
    });

    setFilterExpense(activeExpense);
  };

  // Filter Avg Spend
  const calculateAverageSpend = (totalSpending, time) => {
    let timePeriodInDays;
    switch (time) {
      case 'Weekly':
        timePeriodInDays = 7;
        break;
      case 'Monthly':
        timePeriodInDays = 31;
        break;
      case 'Yearly':
        timePeriodInDays = 365;
        break;
      default:
        timePeriodInDays = 7;
    }

    const averageSpendPerDay = totalSpending / timePeriodInDays;
    return averageSpendPerDay * timePeriodInDays;
  };

  // Filter By Period of Time Button
  const filterByPeriodOfTime = () => {
    const renderButton = filterExpense.map((filterItem) => {
      return (
        <View
          style={{
            ...styles.filterButton,
            backgroundColor: filterItem.isActive ? GlobalColor.colors.darkBlue : '',
          }}
          key={Math.random() * 1000}
        >
          <PrimaryButton
            onPress={() => filterByPeriodOfTimeHandler(filterItem.filter)}
            style={{ color: filterItem.isActive ? GlobalColor.colors.slate50 : '' }}
          >
            {filterItem.filter}
          </PrimaryButton>
        </View>
      );
    });

    return <View style={styles.filterButtonContainer}>{renderButton}</View>;
  };

  return (
    <View style={styles.filterButtonRootContainer}>
      {filterByPeriodOfTime()}
      <View style={styles.filterDataContainer}>
        <View style={styles.filterSpendContainer}>
          <Text style={styles.filterSpendText}>Avg {avgTime} spend</Text>
          <Text style={styles.filterSpendNumber}>{`₱${parseFloat(
            calculateAverageSpend(timeExpense, avgTime)
          ).toFixed(2)}`}</Text>
        </View>
        <View style={styles.filterSpendContainer}>
          <Text style={styles.filterSpendText}>Spent this {byTime}</Text>
          <Text style={styles.filterSpendNumber}>{`₱${parseFloat(timeExpense).toFixed(2)}`}</Text>
        </View>
      </View>
    </View>
  );
}

export default FilterByPeriodOfTime;

const styles = StyleSheet.create({
  filterButtonRootContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  filterButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  filterButton: {
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: GlobalColor.colors.gray400,
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  filterDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 5,
  },
  filterSpendContainer: {
    borderWidth: 0.4,
    borderColor: GlobalColor.colors.gray400,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    backgroundColor: GlobalColor.colors.darkBlue,
  },
  filterSpendText: {
    color: GlobalColor.colors.slate300,
  },
  filterSpendNumber: {
    color: GlobalColor.colors.emerald500,
  },
});
