// External Imports
import React from 'react';
import { parseISO } from 'date-fns/esm';

// Internal imports
import { SingleDatePicker } from '@components/DatePicker/DatePicker.jsx';

// Assets
import './BasicForm.scss';

// Component
export const BasicForm = (props) => {
  const { categories, expense, setExpense, legend, button } = props;
  return (
    <fieldset>
      <legend>{legend}</legend>
      <div className="formContainer">
        <div className="InputContainer">
          <label className="InputContainer__label" htmlFor="expense-category">
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
        <div className="InputContainer">
          <label htmlFor="expense-payee" className="InputContainer__label">
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
        <div className="InputContainer">
          <label htmlFor="expense-amount" className="InputContainer__label">
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
        <div className="InputContainer">
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
