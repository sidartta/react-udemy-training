// External imports
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Local imports
import {
  Layout,
  LoginPage,
  DashboardPage,
  AddExpensePage,
  ViewExpensePage,
  ExpenseDetailsView,
  HelpPage,
  NotFoundPage,
  PrivateRoute,
  PublicRoute,
} from '@views/routes.js';

// Component
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
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
          <Route
            path="/help"
            element={
              <PrivateRoute>
                <HelpPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
