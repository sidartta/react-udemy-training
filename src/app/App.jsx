// External imports
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Internal imports

// Local imports
import {
  Layout,
  DashboardPage,
  AddExpensePage,
  ViewExpensePage,
  ExpenseDetailsView,
  HelpPage,
  NotFoundPage,
} from '@views/routes.js';

// Assets
import '@app/App.scss';

// Component
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/add" element={<AddExpensePage />} />
          <Route path="/view/" element={<ViewExpensePage />} />
          <Route path="/view/:id" element={<ExpenseDetailsView />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
