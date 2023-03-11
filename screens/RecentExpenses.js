import { useContext, useEffect, useState } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { getDateMinusDays } from '../util/date';
import { ExpensesContext } from '../store/expense-context';
import { StyleSheet } from 'react-native';
import { fetchExpenses } from '../util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';
import { AuthContext } from '../store/auth-context';

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const authCtx = useContext(AuthContext);

  function errorHandler() {
    expensesCtx.setError(null);
  }

  if (expensesCtx.error && !expensesCtx.isFetching) {
    return <ErrorOverlay message={expensesCtx.error} onConfirm={errorHandler} />;
  }

  if (expensesCtx.isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const _date7DaysAgo = getDateMinusDays(today, 100);

    return expense.date > _date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No Expenses registered for the past seven days"
    />
  );
}

export default RecentExpenses;
