// External imports
import React from 'react';
import { useSelector } from 'react-redux';

// Local imports
import { selectExpensesSubset } from '@store/expenses/expenses.slice.js';

// Assets
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// Component
const DashboardPage = () => {
  const expenses = useSelector(selectExpensesSubset);

  return (
    <>
      <h1>
        The total of your expenses is : $
        {expenses.length !== 0 ? (
          expenses.map((elem) => parseInt(elem.amount)).reduce(reducer)
        ) : (
          <span>... loading</span>
        )}
      </h1>
    </>
  );
};

export default DashboardPage;
