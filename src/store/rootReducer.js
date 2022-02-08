// External imports
import { combineReducers } from '@reduxjs/toolkit';

// Local Imports
import expensesReducer from './expenses/expenses.slice.js';
import categoriesReducer from './categories/categories.slice.js';
import authReducer from './auth/auth.slice.js';

// MAIN LOGIC
export const rootReducer = combineReducers({
  expenses: expensesReducer,
  categories: categoriesReducer,
  auth: authReducer,
});
