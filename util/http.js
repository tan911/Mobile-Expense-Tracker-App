import axios from 'axios';

const BACKEND_URL = 'https://mobile-expense-tracker-app-default-rtdb.firebaseio.com';

export async function storeExpense(expenseData) {
  const response = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + '/expenses.json');
  const expenses = [];
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

export async function updateExpense(id, expenseData) {
  axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData).catch((err) => console.log(err));
}

export async function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}

export async function fetchPosts() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
  const posts = [];
  for (const key in response.data) {
    const postObj = {
      id: key,
      author: response.data[key].email,
      body: response.data[key].body,
      likes: 0,
      comments: 0,
    };

    posts.push(postObj);
  }

  return posts;
}
