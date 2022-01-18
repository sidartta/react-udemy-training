// External imports
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Internal imports
import {
  selectExpensesSubset,
  resetIdFilter,
  resetExpenseID,
} from '@store/expenses/expenses.slice.js';
import { ExpenseForm } from '@components/Forms/ExpenseForm/ExpenseForm.jsx';
import { ExpenseDetailsWidget } from '@components/Widgets/ExpenseDetailsWidget.jsx';

// Assets

// Components
const ExpenseDetailsView = () => {
  const [expense] = useSelector(selectExpensesSubset);
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      {!editMode ? (
        <ExpenseDetailsWidget
          toggleEditMode={() => setEditMode(true)}
          {...expense}
        />
      ) : (
        <ExpenseForm
          type={'EDIT'}
          toggleEditMode={() => setEditMode(false)}
          {...expense}
        />
      )}
    </>
  );
};

export default ExpenseDetailsView;
