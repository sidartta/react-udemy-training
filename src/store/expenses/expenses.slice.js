// External imports
import { createSlice } from '@reduxjs/toolkit';
import { formatISO, parseISO } from 'date-fns';

// Internal imports
import { LocalStorageService } from '@services/index';
import { filterListItems, sortByListItems } from './expenses.actions';

// Initialization of state
export const initialState = {
  expenses: LocalStorageService.get('expenses') || [],
  filters: {
    text: '',
    sortBy: '',
    startDate: formatISO(new Date(), { representation: 'date' }),
    endDate: null,
    filterByDate: false,
    expenseID: '',
    filterById: false,
  },
};

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    editExpense: (state, action) => {
      const stateSubset = state.expenses.filter(
        (elem) => elem.id !== action.payload.id
      );
      state.expenses = [...stateSubset, action.payload];
    },
    deleteExpense: (state, action = '') => {
      state.expenses = state.expenses.filter(
        (elem) => elem.id !== action.payload
      );
    },
    setTextFilter: (state, action = '') => {
      state.filters.text = action.payload;
    },
    setExpenseID: (state, action = '') => {
      state.filters.expenseID = action.payload;
    },
    resetExpenseID: (state) => {
      state.filters.expenseID = '';
    },
    setSortBy: (state, action = '') => {
      state.filters.sortBy = action.payload;
    },
    setStartDate: (state, action) => {
      state.filters.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.filters.endDate = action.payload;
    },
    clearExpenses: (state) => {
      LocalStorageService.clear();
      state.expenses = [];
    },
    setDateFilter: (state) => {
      state.filters.filterByDate = true;
    },
    resetDateFilter: (state) => {
      state.filters.filterByDate = false;
    },
    setIdFilter: (state) => {
      state.filters.filterById = true;
    },
    resetIdFilter: (state) => {
      state.filters.filterById = false;
    },
  },
});

export const {
  addExpense,
  editExpense,
  deleteExpense,
  setTextFilter,
  setExpenseID,
  resetExpenseID,
  setSortBy,
  setStartDate,
  setEndDate,
  clearExpenses,
  setDateFilter,
  resetDateFilter,
  setIdFilter,
  resetIdFilter,
} = expensesSlice.actions;

export const selectAllExpenses = (state) => state.expenses.expenses;

export const selectExpensesSubset = (state) => {
  if (state.expenses.filters.filterById) {
    return state.expenses.expenses.filter(
      (elem) => elem.id === state.expenses.filters.expenseID
    );
  }
  const unfilteredExpenses = state.expenses.expenses;
  const isDateFilter = state.expenses.filters.filterByDate;
  const filteredTextExpenses = filterListItems(
    unfilteredExpenses,
    state.expenses.filters.text
  );
  const filteredDateExpenses = isDateFilter
    ? filterListItems(filteredTextExpenses, [
        parseISO(state.expenses.filters.startDate),
        parseISO(state.expenses.filters.endDate),
      ])
    : filteredTextExpenses;
  const sortedExpenses = sortByListItems(
    filteredDateExpenses,
    state.expenses.filters.sortBy
  );
  return sortedExpenses;
};

export const selectIsDateFilter = (state) =>
  state.expenses.filters.filterByDate;

export const selectDateRange = (state) => ({
  startDate: state.expenses.filters.startDate,
  endDate: state.expenses.filters.endDate,
});

export default expensesSlice.reducer;
