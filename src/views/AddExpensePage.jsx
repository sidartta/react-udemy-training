// External imports
import React from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// Local imports
import { ExpenseForm } from '../components/ExpenseForm.jsx';

// Styled Components
const AddExpensePageStyled = styled(Box)(({ theme }) => ({
  minHeight: '0',
  width: '100%',
  maxWidth: '1000px',
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '.75rem',

  overflowY: 'scroll',

  backgroundColor: theme.palette.background.default,
}));

// Component
const AddExpensePage = () => {
  return (
    <AddExpensePageStyled component="main">
      <ExpenseForm />
    </AddExpensePageStyled>
  );
};

export default AddExpensePage;
