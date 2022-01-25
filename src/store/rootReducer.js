// External imports
import { combineReducers } from '@reduxjs/toolkit';

// Local Imports
import expensesReducer from '@store/expenses/expenses.slice.js';
import categoriesReducer from '@store/categories/categories.slice.js';
import authReducer from '@store/auth/auth.slice.js';

// MAIN LOGIC
export const rootReducer = combineReducers({
  expenses: expensesReducer,
  categories: categoriesReducer,
  auth: authReducer,
});
