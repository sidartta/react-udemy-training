'use strict';
// External imports
import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Local imports
import {
  Root,
  DashboardPage,
  AddExpensePage,
  ViewExpensePage,
  ExpenseDetailsView,
  HelpPage,
  NotFoundPage,
} from '@views/routes.js';
import '@database/firebase';
import { initializeExpenses } from '@store/expenses/expenses.actions';

// Assets
import '@app/App.scss';

const App = () => {
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<DashboardPage />} />
            <Route path="add" element={<AddExpensePage />} />
            <Route path="view/" element={<ViewExpensePage />} />
            <Route path="view/:id" element={<ExpenseDetailsView />} />
            <Route path="help" element={<HelpPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
