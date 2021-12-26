'use-strict';
// External imports
import { configureStore } from '@reduxjs/toolkit';

// Internal imports
import { rootReducer } from '@store/rootReducer';

// Store Configuration
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
