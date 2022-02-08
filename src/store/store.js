// External imports
import { configureStore } from '@reduxjs/toolkit';
import { getAuth } from 'firebase/auth';

// Local imports
import { rootReducer } from './rootReducer';
import { initializeExpenses } from './expenses/expenses.actions';

// Store Configuration
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

const auth = getAuth();
auth.onAuthStateChanged(async (user) => {
  if (user) {
    await store.dispatch(initializeExpenses('set'));
  } else {
    await store.dispatch(initializeExpenses('reset'));
  }
});
