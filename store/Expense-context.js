import { createContext, useReducer } from "react";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-10-10"),
  },
  {
    id: "e2",
    description: "A pair of caps",
    amount: 59.99,
    date: new Date("2022-10-10"),
  },
  {
    id: "e3",
    description: "A pair of t-shirt",
    amount: 59.99,
    date: new Date("2022-10-10"),
  },
  {
    id: "e4",
    description: "bill",
    amount: 59.99,
    date: new Date("2022-10-10"),
  },
  {
    id: "e5",
    description: "bill",
    amount: 59.99,
    date: new Date("2022-10-10"),
  },
  {
    id: "e6",
    description: "bill",
    amount: 59.99,
    date: new Date("2022-10-10"),
  },
  {
    id: "e7",
    description: "bill",
    amount: 59.99,
    date: new Date("2022-10-10"),
  },
  {
    id: "e8",
    description: "bill",
    amount: 59.99,
    date: new Date("2022-10-10"),
  },
  {
    id: "e9",
    description: "bill",
    amount: 59.99,
    date: new Date("2022-10-10"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpenses: ({ description, amount, date }) => {},
  deleteExpenses: (id) => {},
  updateExpenses: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const upadateItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = upadateItem;
      return updatedExpenses;
    case "DELETE":
      return filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpenseContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSE);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpenseContextProvider;
