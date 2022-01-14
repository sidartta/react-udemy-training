// External imports
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Internal imports
import { selectUserAthStatus } from '@store/auth/auth.slice';
import { initializeExpenses } from '@store/expenses/expenses.actions';

// Local imports
import {
  Layout,
  DashboardPage,
  AddExpensePage,
  ViewExpensePage,
  ExpenseDetailsView,
  HelpPage,
  NotFoundPage,
  PrivateRoute,
} from '@views/routes.js';

// Assets
import '@app/App.scss';

// Component
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute>
              <AddExpensePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/view/"
          element={
            <PrivateRoute>
              <ViewExpensePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/view/:id"
          element={
            <PrivateRoute>
              <ExpenseDetailsView />
            </PrivateRoute>
          }
        />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
