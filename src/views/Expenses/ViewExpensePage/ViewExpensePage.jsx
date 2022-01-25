// External imports
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formatISO } from 'date-fns';
import AlertDialogSlide from '@components/Modal/ConfirmationModal.jsx';

// Internal imports
import { DataTableBase } from '@components/Table/Table.jsx';
import {
  selectExpensesSubset,
  setStartDate,
  setEndDate,
  setDateFilter,
  resetDateFilter,
  resetIdFilter,
  resetExpenseID,
} from '@store/expenses/expenses.slice.js';
import { DatePickerRange } from '@components/DatePicker/DatePicker.jsx';
import { clearAllExpenses, deleteExpense } from '@store/expenses/expenses.actions';

// Definitions
const columns = [
  {
    name: 'Payee',
    selector: (row) => row.payee,
    sortable: true,
    reorder: true,
    width: 'auto',
  },
  {
    name: 'Category',
    selector: (row) => row.category,
    hide: 'sm',
    reorder: true,
    width: 'auto',
  },
  {
    name: 'Amount ($)',
    selector: (row) => row.amount,
    sortable: true,
    reorder: true,
    width: 'auto',
  },
  {
    name: 'Date',
    selector: (row) => row.createdAt.split('T')[0],
    sortable: true,
    reorder: true,
    width: 'auto',
  },
];

// Component
const ViewExpensePage = () => {
  const expenses = useSelector(selectExpensesSubset);

  const loading = useSelector((state) => state.expenses.loading);
  const dispatch = useDispatch();

  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);

  useEffect(() => {
    dispatch(resetIdFilter());
    dispatch(resetExpenseID());
  }, []);

  const handleRowSelected = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextActions = useMemo(() => {
    const handleDelete = async () => {
      try {
        setToggleCleared(!toggleCleared);
        const selectedRowsIDs = selectedRows.map((elem) => elem.id);
        if (selectedRowsIDs.length === expenses.length) {
          await dispatch(clearAllExpenses());
        } else {
          for (const id of selectedRowsIDs) {
            await dispatch(deleteExpense(id));
          }
        }
      } catch (err) {
        console.error(
          `There was an issue while deleting the expense 💥. Error is : ${err.message}`
        );
      }
    };

    return <AlertDialogSlide handleConfirmation={handleDelete} />;
  }, [expenses, selectedRows, toggleCleared]);

  return (
    <div style={{ width: '100%', padding: '1rem' }}>
      <DataTableBase
        columns={columns}
        data={expenses}
        progressPending={loading === 'pending'}
        title={'Expenses List'}
        onSelectedRowsChange={handleRowSelected}
        contextActions={contextActions}
        clearSelectedRows={toggleCleared}
      />
      <div>
        <DatePickerRange
          setStart={(start) => dispatch(setStartDate(formatISO(start, { representation: 'date' })))}
          setEnd={(end) => dispatch(setEndDate(formatISO(end, { representation: 'date' })))}
          setFilter={() => dispatch(setDateFilter())}
          resetFilter={() => dispatch(resetDateFilter())}
        />
      </div>
    </div>
  );
};

export default ViewExpensePage;
