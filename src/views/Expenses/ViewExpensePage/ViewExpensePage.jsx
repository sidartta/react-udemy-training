// External imports
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatISO } from 'date-fns';

// Internal imports
import { ExpenseListItem } from '@components/Lists/ListItem/ListItem.jsx';
import {
  selectExpensesSubset,
  setTextFilter,
  setSortBy,
  setStartDate,
  setEndDate,
  clearExpenses,
  setDateFilter,
  resetDateFilter,
  resetIdFilter,
  resetExpenseID,
} from '@store/expenses/expenses.slice.js';
import { DatePickerRange } from '@components/DatePicker/DatePicker.jsx';

// Assets
import '@app/App.scss';

// Component
const ViewExpensePage = () => {
  const expenses = useSelector(selectExpensesSubset);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetIdFilter());
    dispatch(resetExpenseID());
  }, []);

  const renderExpenses = () => {
    return expenses.map((expense) => (
      <ExpenseListItem key={expense.id} {...expense} />
    ));
  };

  return (
    <div>
      <button type="button" onClick={() => dispatch(clearExpenses())}>
        Delete All
      </button>
      <ul style={{ borderBottom: '1px solid' }}>{renderExpenses()}</ul>
      <div
        style={{
          display: 'flex',
          maxWidth: '1000px',
          alignItems: 'top',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <label htmlFor="text-search">Search expense: </label>
          <input
            type="text"
            name="text-search"
            placeholder="e.g. McDonalds"
            onChange={(e) => dispatch(setTextFilter(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="sortBy">Sort by: </label>
          <select
            name="sortBy"
            onChange={(e) => dispatch(setSortBy(e.target.value))}
          >
            <option value="">Select sorting</option>
            <option value="amount-desc">Amount - High to Low</option>
            <option value="amount-asc">Amount - Low to High</option>
            <option value="date-desc">Date - Oldest to Newest</option>
            <option value="date-asc">Date - Newest to Oldest</option>
          </select>
        </div>
        <div>
          <DatePickerRange
            setStart={(start) =>
              dispatch(
                setStartDate(formatISO(start, { representation: 'date' }))
              )
            }
            setEnd={(end) =>
              dispatch(setEndDate(formatISO(end, { representation: 'date' })))
            }
            setFilter={() => dispatch(setDateFilter())}
            resetFilter={() => dispatch(resetDateFilter())}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewExpensePage;
