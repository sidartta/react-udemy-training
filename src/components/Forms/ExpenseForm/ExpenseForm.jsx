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
import { selectUserID } from '@store/auth/auth.slice';

// Assets
import '@app/App.jsx';

// Components
const DEFAULT_STATE = {
  category: 'Home',
  payee: '',
  amount: 0,
  createdAt: formatISO(new Date(), { representation: 'date' }),
};
const textDisplayConfig = (type = 'ADD') => {
  if (type === 'ADD') {
    return { legend: 'Add new expense', button: 'Add expense' };
  } else if (type === 'EDIT') {
    return { legend: 'Edit expense', button: 'Save Expense and Exit' };
  } else {
    throw new Error('Invalid type provided to text config function.');
  }
};

export const ExpenseForm = (props) => {
  const {
    type = 'ADD',
    category = DEFAULT_STATE.category,
    payee = DEFAULT_STATE.payee,
    amount = DEFAULT_STATE.amount,
    createdAt = DEFAULT_STATE.createdAt,
  } = props;

  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.expenses.loading);
  const uid = useSelector(selectUserID);
  const { categories } = useSelector(categoriesSelector);
  const [expense, setExpense] = useState({
    category,
    payee,
    amount,
    createdAt,
  });
  const [addedNotification, setAddedNotification] = useState(false);

  const textProps = textDisplayConfig(type);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (type === 'ADD') {
        await dispatch(addExpensetoDB(expense));
        setAddedNotification(true);
        setExpense(DEFAULT_STATE);
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
