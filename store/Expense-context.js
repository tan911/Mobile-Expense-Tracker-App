import { createContext, useEffect, useContext, useReducer, useState } from 'react';
import { fetchExpenses } from '../util/http';
import { AuthContext } from './auth-context';

const DUMMY_EXPENSE = [
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
    amount: 14.99,
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
    amount: 18.59,
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
    amount: 18.59,
    date: new Date('2022-10-10'),
  },
  {
    id: 'e14',
    description: 'amazon',
    amount: 18.59,
    date: new Date('2022-10-10'),
  },
  {
    id: 'e15',
    description: 'rice',
    amount: 18.59,
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
    amount: 18.59,
    date: new Date('2022-10-10'),
  },
  {
    id: 'e18',
    description: 'food',
    amount: 18.59,
    date: new Date('2022-10-11'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      console.log(updatedExpenses[updatableExpenseIndex]);
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      console.log(updatedExpenses[updatableExpenseIndex]);
      return updatedExpenses;

    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        setExpenses(expenses);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    }

    getExpenses();
  }, []);

  const [expensesState, dispatch] = useReducer(expenseReducer, []);
  function setExpenses(expenses) {
    dispatch({ type: 'SET', payload: expenses });
  }
  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }
  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
    setExpenses: setExpenses,
    error,
    isFetching,
    setIsFetching,
    setError,
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpenseContextProvider;
