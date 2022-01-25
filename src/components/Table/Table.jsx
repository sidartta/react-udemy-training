// External imports
import React from 'react';
import DataTable from 'react-data-table-component';
import Checkbox from '@mui/material/Checkbox';
import ArrowDownward from '@mui/icons-material/ArrowDownward';

// Definitions
const sortIcon = <ArrowDownward />;

// Component
export const DataTableBase = (props) => {
  return (
    <DataTable
      selectableRows
      selectableRowsComponent={Checkbox}
      sortIcon={sortIcon}
      dense
      pagination
      {...props}
    />
  );
};
