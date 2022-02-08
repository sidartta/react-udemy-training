// External imports
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// Internal imports
import { deleteExpense } from '../store/expenses/expenses.actions';

// Assets

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

  const handleDelete = async () => {
    try {
      await dispatch(deleteExpense(id));
      navigate('/view', { replace: true });
    } catch (err) {
      console.error(
        `There was an issue while deleting the expense 💥. Error is : ${err.message}`
      );
    }
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
