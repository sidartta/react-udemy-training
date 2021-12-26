// External imports
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

// Internal imports
import { deleteExpense } from '@store/expenses/expenses.slice.js';
import { LocalStorageService } from '@services/index';

// Assets
import '@app/App.jsx';

// Components
export const ExpenseDetailsWidget = ({
  toggleEditMode,
  id,
  category,
  payee,
  amount,
  createdAt,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteExpense(id));
    LocalStorageService.remove('expenses', id);
    navigate('/view');
  };

  return (
    <div>
      <h2>{payee}</h2>
      <h4>Amount: {amount}$</h4>
      <h4>Category: {category}</h4>
      <h5>Created At: {createdAt}</h5>
      <button type="button" onClick={() => toggleEditMode()}>
        Edit Expense
      </button>
      <button type="button" onClick={handleDelete}>
        Delete Expense
      </button>
      <Link className={'go-back unstyled-ref'} to="/view">
        Go back to Expenses
      </Link>
    </div>
  );
};
