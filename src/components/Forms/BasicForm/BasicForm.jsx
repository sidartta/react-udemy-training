// External Imports
import React from 'react';
import { parseISO } from 'date-fns/esm';

// Internal imports
import { SingleDatePicker } from '@components/DatePicker/DatePicker.jsx';

// Assets
import '@app/App.jsx';

// Component
export const BasicForm = (props) => {
  const { categories, expense, setExpense, legend, button } = props;
  return (
    <fieldset>
      <legend>{legend}</legend>
      <div
        style={{
          padding: '2rem',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <div>
          <label
            htmlFor="expense-category"
            style={{
              marginLeft: '1rem',
              marginRight: '1rem',
              fontSize: '2rem',
            }}
          >
            Category
          </label>
          <select
            name="expense-category"
            value={expense.category}
            onChange={(e) =>
              setExpense({ ...expense, category: e.target.value })
            }
          >
            {categories &&
              categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="expense-payee"
            style={{
              marginLeft: '1rem',
              marginRight: '1rem',
              fontSize: '2rem',
            }}
          >
            Payee
          </label>
          <input
            type="text"
            name="expense-payee"
            value={expense.payee}
            onChange={(e) => setExpense({ ...expense, payee: e.target.value })}
            required
          />
        </div>
        <div>
          <label
            htmlFor="expense-amount"
            style={{
              marginLeft: '1rem',
              marginRight: '1rem',
              fontSize: '2rem',
            }}
          >
            Amount
          </label>
          <input
            type="number"
            name="expense-amount"
            value={expense.amount}
            onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
            required
          />
        </div>
        <div>
          {}
          <SingleDatePicker
            initialDate={parseISO(expense.createdAt)}
            setDateAction={(date) =>
              setExpense({ ...expense, createdAt: date })
            }
          />
        </div>
      </div>
      <button type="submit">{button}</button>
    </fieldset>
  );
};
