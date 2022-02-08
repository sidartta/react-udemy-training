// External imports
import { createSlice } from '@reduxjs/toolkit';
import { formatISO, parseISO } from 'date-fns';

// Local imports
import {
  filterListItems,
  sortByListItems,
  addExpenseToDB,
  initializeExpenses,
  clearAllExpenses,
  deleteExpense,
  editExpense,
} from './expenses.actions';

// Initialization of state
export const INITIAL_STATE = {
  expenses: [],
  expensesAmountTotal: 0,
  loading: 'idle',
  currentRequestId: undefined,
  error: null,
  filters: {
    text: '',
    sortBy: '',
    startDate: formatISO(new Date()),
    endDate: null,
    filterByDate: false,
    expenseID: '',
    filterById: false,
  },
};

// Expenses slice definition
const expensesSlice = createSlice({
  name: 'expenses',
  initialState: INITIAL_STATE,
  reducers: {
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
  extraReducers: (builder) => {
    builder
      .addCase(initializeExpenses.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(initializeExpenses.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.currentRequestId === requestId &&
          state.loading === 'pending'
        ) {
          state.expenses = action.payload;
          state.currentRequestId = undefined;
          state.loading = 'idle';
        }
      })
      .addCase(initializeExpenses.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.currentRequestId === requestId &&
          state.loading === 'pending'
        ) {
          state.currentRequestId = undefined;
          state.loading = 'idle';
          state.error = action.error;
        }
      })
      .addCase(addExpenseToDB.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(addExpenseToDB.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.currentRequestId === requestId &&
          state.loading === 'pending'
        ) {
          state.expenses.push(action.payload);
          state.currentRequestId = undefined;
          state.loading = 'idle';
        }
      })
      .addCase(addExpenseToDB.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.currentRequestId === requestId &&
          state.loading === 'pending'
        ) {
          state.currentRequestId = undefined;
          state.loading = 'idle';
          state.error = action.error;
        }
      })
      .addCase(clearAllExpenses.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(clearAllExpenses.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.currentRequestId === requestId &&
          state.loading === 'pending'
        ) {
          state.expenses = [];
          state.currentRequestId = undefined;
          state.loading = 'idle';
        }
      })
      .addCase(clearAllExpenses.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.currentRequestId === requestId &&
          state.loading === 'pending'
        ) {
          state.currentRequestId = undefined;
          state.loading = 'idle';
          state.error = action.error;
        }
      })
      .addCase(deleteExpense.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.currentRequestId === requestId &&
          state.loading === 'pending'
        ) {
          state.expenses = state.expenses.filter(
            (elem) => elem.id !== action.payload
          );
          state.currentRequestId = undefined;
          state.loading = 'idle';
        }
      })
      .addCase(deleteExpense.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.currentRequestId === requestId &&
          state.loading === 'pending'
        ) {
          state.currentRequestId = undefined;
          state.loading = 'idle';
          state.error = action.error;
        }
      })
      .addCase(editExpense.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(editExpense.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.currentRequestId === requestId &&
          state.loading === 'pending'
        ) {
          const stateSubset = state.expenses.filter(
            (elem) => elem.id !== action.payload.id
          );
          const changes = { id: action.payload.id, ...action.payload.change };
          state.expenses = [...stateSubset, changes];
          state.currentRequestId = undefined;
          state.loading = 'idle';
        }
      })
      .addCase(editExpense.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.currentRequestId === requestId &&
          state.loading === 'pending'
        ) {
          state.currentRequestId = undefined;
          state.loading = 'idle';
          state.error = action.error;
        }
      });
  },
});

export const {
  setTextFilter,
  setExpenseID,
  resetExpenseID,
  setSortBy,
  setStartDate,
  setEndDate,
  setDateFilter,
  resetDateFilter,
  setIdFilter,
  resetIdFilter,
} = expensesSlice.actions;

export const selectAllExpenses = (state) => state.expenses.expenses;
export const selectExpenseQueryState = (state) => state.expenses.loading;
export const selectExpenseQueryError = (state) => state.expenses.error;

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
