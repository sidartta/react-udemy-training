// External imports
import {
  compareAsc,
  compareDesc,
  parseISO,
  isWithinInterval,
  isAfter,
  isBefore,
} from 'date-fns';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { push, ref, set, get, remove, child, update } from 'firebase/database';

// Internal imports
import db from '@database/firebase.js';

// Database references
const expensesRef = ref(db, 'expenses');

// Actions
export const filterListItems = (list, criteria) => {
  if (typeof list === 'object') {
    list.map((elem) => {
      if (!elem.payee) {
        throw `Missing payee in element with id: ${elem.id}`;
      }
    });
    switch (typeof criteria) {
      case 'string':
        return list.filter((elem) =>
          elem.payee.toLowerCase().includes(criteria.toLowerCase())
        );
      case 'object':
        const [startDate, endDate] = criteria;
        if (!startDate && !endDate) {
          throw 'No valid date range was provided.';
        } else if (!endDate) {
          return list.filter((elem) =>
            isAfter(parseISO(elem.createdAt), startDate)
          );
        } else if (!startDate) {
          return list.filter((elem) =>
            isBefore(parseISO(elem.createdAt), endDate)
          );
        } else {
          return list.filter((elem) =>
            isWithinInterval(parseISO(elem.createdAt), {
              start: startDate,
              end: endDate,
            })
          );
        }
      default:
        return list;
    }
  } else {
    throw 'The list provided is not valid.';
  }
};

export const sortByListItems = (list, criteria = '') => {
  switch (criteria) {
    case 'amount-desc':
      return list.sort((elem1, elem2) => elem2.amount - elem1.amount);
    case 'amount-asc':
      return list.sort((elem1, elem2) => elem1.amount - elem2.amount);
    case 'date-desc':
      return list.sort((elem1, elem2) =>
        compareDesc(parseISO(elem2.createdAt), parseISO(elem1.createdAt))
      );
    case 'date-asc':
      return list.sort((elem1, elem2) =>
        compareAsc(parseISO(elem2.createdAt), parseISO(elem1.createdAt))
      );
    default:
      return list;
  }
};

// Async Actions
export const addExpensetoDB = createAsyncThunk(
  'expenses/add',
  async (expense, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().expenses;
    if (currentRequestId !== requestId || loading !== 'pending') {
      return;
    }
    const newExpenseRef = push(expensesRef);
    await set(newExpenseRef, expense);
    return { id: newExpenseRef.key, ...expense };
  }
);

export const initializeExpenses = createAsyncThunk(
  'expenses/initialize',
  async (_, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().expenses;
    if (currentRequestId !== requestId || loading !== 'pending') {
      return;
    }
    const expenses = [];
    const response = await get(expensesRef);
    response.forEach((elem) => {
      expenses.push({ id: elem.key, ...elem.val() });
    });
    return expenses;
  }
);

export const clearAllExpenses = createAsyncThunk(
  'expenses/clearAll',
  async (_, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().expenses;
    if (currentRequestId !== requestId || loading !== 'pending') {
      return;
    }
    return await remove(expensesRef);
  }
);

export const deleteExpense = createAsyncThunk(
  'expenses/delete',
  async (id, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().expenses;
    if (currentRequestId !== requestId || loading !== 'pending') {
      return;
    }
    await remove(child(expensesRef, id));
    return id;
  }
);

export const editExpense = createAsyncThunk(
  'expenses/edit',
  async (changes, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().expenses;
    if (currentRequestId !== requestId || loading !== 'pending') {
      return;
    }
    await update(child(expensesRef, changes.id), changes.change);
    return changes;
  }
);
