// External imports
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Internal imports
import { ExpensesTable } from '../components/ExpensesTable.jsx';
import { selectExpensesSubset } from '../store/expenses/expenses.slice.js';
import { DatePickerRange } from '../components/DatePicker.jsx';
import AlertDialogSlide from '../components/ConfirmationModal.jsx';
import {
  clearAllExpenses,
  deleteExpense,
} from '../store/expenses/expenses.actions';

// Definitions
const columns = [
  {
    id: 'payee',
    label: 'Payee',
    numeric: false,
  },
  {
    id: 'category',
    label: 'Cat.',
    numeric: false,
  },
  {
    id: 'amount',
    label: 'Amount',
    numeric: true,
  },
  {
    id: 'createdAt',
    label: 'Date',
    numeric: true,
  },
];

// Styled Component
const ViewExpensePageStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  flex: '1',
  minHeight: '0',
  maxWidth: '1000px',
  padding: '.75rem',
  overflowY: 'scroll',

  backgroundColor: theme.palette.background.default,
}));

// Component
const ViewExpensePage = () => {
  const expenses = useSelector(selectExpensesSubset);
  const dispatch = useDispatch();
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [selectedExpenses, setSelectedExpenses] = useState([]);

  const handleDelete = async (selected) => {
    try {
      if (selected.length === expenses.length) {
        await dispatch(clearAllExpenses());
      } else {
        for (const id of selected) {
          await dispatch(deleteExpense(id));
        }
      }
      setSelectedExpenses([]);
      setShowConfirmationDialog(false);
    } catch (err) {
      console.error(
        `There was an issue while deleting the expense 💥. Error is : ${err.message}`
      );
    }
  };

  const handleDeleteRequest = (selected) => {
    setSelectedExpenses(selected);
    setShowConfirmationDialog(true);
  };

  return (
    <ViewExpensePageStyled component="main">
      <ExpensesTable
        columns={columns}
        rows={expenses}
        contextActions={handleDeleteRequest}
      />
      <AlertDialogSlide
        handleConfirmation={() => handleDelete(selectedExpenses)}
        dialogState={showConfirmationDialog}
        closeDialog={() => setShowConfirmationDialog(false)}
      />
    </ViewExpensePageStyled>
  );
};

export default ViewExpensePage;
