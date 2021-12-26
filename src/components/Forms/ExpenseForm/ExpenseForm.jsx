// External imports
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { formatISO } from 'date-fns/esm';
import { useSelector, useDispatch } from 'react-redux';

// Internal imports
import { categoriesSelector } from '@store/categories/categories.slice.js';
import { BasicForm } from '@components/Forms/BasicForm/BasicForm.jsx';
import { addExpense, editExpense } from '@store/expenses/expenses.slice.js';
import { LocalStorageService } from '@services/index';

// Assets
import '@app/App.jsx';

// Components
export const ExpenseForm = (props) => {
  const {
    type = 'ADD',
    id = uuid(),
    category = 'Home',
    payee = '',
    amount = 0,
    createdAt = formatISO(new Date(), { representation: 'date' }),
  } = props;

  const dispatch = useDispatch();
  const { categories } = useSelector(categoriesSelector);
  const [expense, setExpense] = useState({
    id,
    category,
    payee,
    amount,
    createdAt,
  });

  const LEGEND_TEXT = type === 'ADD' ? 'Add new expense' : 'Edit expense';
  const BUTTON_TEXT = type === 'ADD' ? 'Add expense' : 'Save Expense and Exit';
  const textProps = { legend: LEGEND_TEXT, button: BUTTON_TEXT };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'ADD') {
      dispatch(addExpense(expense));
      LocalStorageService.set('expenses', expense);
    } else {
      dispatch(editExpense(expense));
      LocalStorageService.set('expenses', expense);
      props.toggleEditMode();
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '3rem' }}>
      <BasicForm
        categories={categories}
        expense={expense}
        setExpense={setExpense}
        {...textProps}
      />
    </form>
  );
};
