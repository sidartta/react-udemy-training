// External imports
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Internal imports
import { setExpenseID, setIdFilter } from '@store/expenses/expenses.slice.js';

// Assets

// Components
export const ExpenseListItem = ({ id, category, payee, amount }) => {
  const dispatch = useDispatch();

  const selectExpenseById = () => {
    dispatch(setExpenseID(id));
    dispatch(setIdFilter());
  };

  return (
    <NavLink
      to={id}
      className={'expense-list__item'}
      onClick={selectExpenseById}
    >
      <li key={id}>
        {category} -- {payee} -- {amount}$
      </li>
    </NavLink>
  );
};
