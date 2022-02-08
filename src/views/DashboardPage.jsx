// External imports
import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// Local imports
import { selectExpensesSubset } from '../store/expenses/expenses.slice.js';

// Utils
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// Styled Component
const DashboardPageStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  flex: '1',
  minHeight: '0',
  maxWidth: '1000px',
  padding: '.75rem',
  overflowY: 'scroll',

  backgroundColor: theme.palette.background.default,
}));

// Component
const DashboardPage = () => {
  const expenses = useSelector(selectExpensesSubset);

  return (
    <DashboardPageStyled>
      <h1>
        The total of your expenses is : $
        {expenses.length !== 0 ? (
          expenses.map((elem) => parseInt(elem.amount)).reduce(reducer)
        ) : (
          <span>... loading</span>
        )}
      </h1>
    </DashboardPageStyled>
  );
};

export default DashboardPage;
