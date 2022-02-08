// External imports
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { formatISO } from 'date-fns/esm';

import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Loader from 'react-loader-spinner';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

// Local imports
import { categoriesSelector } from '../store/categories/categories.slice';
import {
  addExpenseToDB,
  editExpense,
} from '../store/expenses/expenses.actions';
import CtaButton from './CtaButton.jsx';
import { CategorySelect } from './CategorySelect.jsx';

// Configs
const DEFAULT_STATE = {
  category: null,
  payee: '',
  amount: '',
  createdAt: new Date(),
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
const schema = yup.object({
  category: yup.string().default('Uncategorized'),
  payee: yup.string().required(),
  amount: yup.number().positive().required(),
  createdAt: yup
    .date()
    .default(() => new Date())
    .required(),
});

// Styled components
const ExpenseFormStyles = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 2rem',
  '& .MuiFormControl-root': {
    marginBottom: '.75rem',
  },
}));

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  width: '100%',
}));

// Components
export const ExpenseForm = ({ type = 'ADD' }, ...props) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: DEFAULT_STATE,
    resolver: yupResolver(schema),
  });
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.expenses.loading);
  const { categories } = useSelector(categoriesSelector);

  const [addedNotification, setAddedNotification] = useState(false);

  const textProps = textDisplayConfig(type);

  const addNewExpense = async (data) => {
    reset(DEFAULT_STATE);
    const formattedData = { ...data, createdAt: formatISO(data.createdAt) };
    try {
      if (type === 'ADD') {
        await dispatch(addExpenseToDB(formattedData));
        setAddedNotification(true);
        setTimeout(() => setAddedNotification(false), 5000);
      } else {
        await dispatch(editExpense({ id, change: formattedData }));
        props.toggleEditMode();
      }
    } catch (err) {
      console.error(
        `There was an issue while adding the new expense 💥. Error is : ${err.message}`
      );
    }
  };

  return (
    <ExpenseFormStyles
      onSubmit={handleSubmit(addNewExpense)}
      autoComplete="off"
    >
      <CategorySelect
        control={control}
        categories={categories}
        className={'mgb'}
        error={errors.category}
      />
      <TextFieldStyled
        id="expense-payee"
        label="Payee"
        variant="outlined"
        placeholder="e.g. Walmart"
        error={errors.payee}
        helperText={errors.payee && 'The payee field cannot be empty.'}
        {...register('payee')}
        className={'mgb'}
      />
      <TextFieldStyled
        id="expense-amount"
        label="Amount"
        variant="outlined"
        placeholder="e.g. $200"
        error={errors.amount}
        helperText={errors.amount && 'The amount must be a number.'}
        {...register('amount')}
        className={'mgb'}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          name="createdAt"
          control={control}
          error={errors.createdAt}
          helperText={
            errors.createdAt &&
            'Please provide a valid date format as MM/dd/yyyy'
          }
          render={({ field }) => (
            <DatePicker
              className={'mgb'}
              id="date-picker-dialog"
              label="Expense date"
              inputFormat="MM/dd/yyyy"
              onChange={(e) => field.onChange(e)}
              renderInput={(params) => <TextFieldStyled {...params} />}
              {...field}
            />
          )}
        />
      </LocalizationProvider>
      <CtaButton text={textProps.button} type="submit" />
      <Loader type="Oval" visible={loading === 'pending'} />
      {addedNotification && loading === 'idle' && (
        <h3>Expense successfully added!</h3>
      )}
    </ExpenseFormStyles>
  );
};
