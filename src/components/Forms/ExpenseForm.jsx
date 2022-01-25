// External imports
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { formatISO } from 'date-fns/esm';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Loader from 'react-loader-spinner';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Local imports
import { categoriesSelector } from '@store/categories/categories.slice';
import { addExpensetoDB, editExpense } from '@store/expenses/expenses.actions';
import CtaButton from '@components/Buttons/CtaButton.jsx';
import { ExpenseFormStyles, TextFieldStyled } from './_Forms.styles';
import { CategorySelect } from './MuiAutoComplete.jsx';

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
  category: yup.string(),
  payee: yup.string().required(),
  amount: yup.number().positive().required(),
  createdAt: yup
    .date()
    .default(() => new Date())
    .required(),
});

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
        await dispatch(addExpensetoDB(formattedData));
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
      <CategorySelect control={control} categories={categories} />
      <TextFieldStyled
        id="expense-payee"
        label="Payee"
        variant="outlined"
        placeholder="e.g. Walmart"
        {...register('payee')}
      />
      <TextFieldStyled
        id="expense-amount"
        label="Amount"
        variant="outlined"
        placeholder="e.g. 200$"
        error={!!errors.amount}
        {...register('amount')}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          name="createdAt"
          control={control}
          render={({ field }) => (
            <DatePicker
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
