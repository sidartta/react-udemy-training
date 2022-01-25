// External imports
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

// Local imports
import './DatePicker.styles';

// Component
export const DatePickerRange = ({
  setStart,
  setEnd,
  setFilter,
  resetFilter,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    if (!!start) {
      setStart(start);
      setStartDate(start);
    } else {
      setStartDate(new Date());
    }
    if (!!end) {
      setEndDate(end);
      setEnd(end);
    } else {
      setEndDate(null);
    }
  };
  const handleClear = () => {
    resetFilter();
    setStartDate(new Date());
    setEndDate(null);
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange={true}
        todayButton="Today"
      />
      <button type="button" onClick={setFilter}>
        Apply Date Filter
      </button>
      <button type="button" onClick={handleClear}>
        Clear Filter
      </button>
    </>
  );
};
