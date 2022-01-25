// External imports
import React from 'react';

// Local imports
import { ExpenseForm } from '@components/Forms/ExpenseForm.jsx';
import { AddExpensePageStyles } from './AddExpensePage.styles';

// Component
const AddExpensePage = () => {
  return (
    <AddExpensePageStyles>
      <ExpenseForm />
    </AddExpensePageStyles>
  );
};

export default AddExpensePage;
