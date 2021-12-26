'use strict';
// External imports
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

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

// Assets
import '@app/App.scss';

const App = () => {
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
