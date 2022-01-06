// External imports
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatISO } from 'date-fns/esm';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader-spinner';

// Internal imports
import { categoriesSelector } from '@store/categories/categories.slice.js';
import { BasicForm } from '@components/Forms/BasicForm/BasicForm.jsx';
import { addExpensetoDB, editExpense } from '@store/expenses/expenses.actions';

// Assets
import '@app/App.jsx';

// Components
const DefaultState = {
  category: 'Home',
  payee: '',
  amount: 0,
  createdAt: formatISO(new Date(), { representation: 'date' }),
};

export const ExpenseForm = (props) => {
  const {
    type = 'ADD',
    category = 'Home',
    payee = '',
    amount = 0,
    createdAt = formatISO(new Date(), { representation: 'date' }),
  } = props;

  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.expenses.loading);
  const { categories } = useSelector(categoriesSelector);
  const [expense, setExpense] = useState({
    category,
    payee,
    amount,
    createdAt,
  });
  const [addedNotification, setAddedNotification] = useState(false);

  const LEGEND_TEXT = type === 'ADD' ? 'Add new expense' : 'Edit expense';
  const BUTTON_TEXT = type === 'ADD' ? 'Add expense' : 'Save Expense and Exit';
  const textProps = { legend: LEGEND_TEXT, button: BUTTON_TEXT };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (type === 'ADD') {
        await dispatch(addExpensetoDB(expense));
        setAddedNotification(true);
        setExpense(DefaultState);
        setTimeout(() => setAddedNotification(false), 5000);
      } else {
        await dispatch(editExpense({ id, change: expense }));
        props.toggleEditMode();
      }
    } catch (err) {
      console.error(
        `There was an issue while adding the new expense 💥. Error is : ${err.message}`
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <BasicForm
          categories={categories}
          expense={expense}
          setExpense={setExpense}
          {...textProps}
        />
      </form>
      <Loader type="Oval" visible={loading === 'pending'} />
      {addedNotification && loading === 'idle' && (
        <h3>Expense successfully added!</h3>
      )}
    </div>
  );
};
