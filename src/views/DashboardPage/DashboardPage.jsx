// External imports
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Local imports
import { initializeExpenses } from '@store/expenses/expenses.actions';

// Assets
import '@app/App.scss';

// Component
const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(initializeExpenses());
    } catch (err) {
      `There was an issue loading your expenses 💥. Error is : ${err.message}`;
    }
  }, []);

  return (
    <>
      <p>This is the Dashboard page</p>
    </>
  );
};

export default DashboardPage;
