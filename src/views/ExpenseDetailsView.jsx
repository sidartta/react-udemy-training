// External imports
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// Local imports
import { selectExpensesSubset } from '../store/expenses/expenses.slice.js';
import { ExpenseForm } from '../components/ExpenseForm.jsx';
import { ExpenseDetailsWidget } from '../components/ExpenseDetailsWidget.jsx';

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
