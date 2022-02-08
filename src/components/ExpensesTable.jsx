// External imports
import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';

// Local imports
import { formatExpenses } from '../utils/dataFormatter';

// Utils Functions
const descendingComparator = (a, b, orderBy) => {
  const aToOrder = a[orderBy];
  const bToOrder = b[orderBy];
  const aa = typeof aToOrder === 'string' ? aToOrder.toLowerCase() : aToOrder;
  const bb = typeof bToOrder === 'string' ? bToOrder.toLowerCase() : bToOrder;
  if (bb < aa) {
    return -1;
  }
  if (bb > aa) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

// Styled Components
const CustomTableContainer = styled(Paper)(({ theme }) => ({
  width: '100%',
}));

const CustomTableCell = styled(TableCell)(({ theme }) => ({
  padding: '0',
  paddingRight: '1rem',
}));

// Child Components
const EnhancedTableHead = (props) => {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <CustomTableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </CustomTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const EnhancedTableToolbar = (props) => {
  const { numSelected, setSelected, selected, handleDelete } = props;

  const handleDeleteClick = async () => {
    await handleDelete(selected);
    setSelected([]);
  };

  return (
    <Toolbar
      sx={{
        paddingLeft: { sm: 2 },
        paddingRight: { xs: 1, sm: 1 },
      }}
      selected={numSelected > 0}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6">
          My Expenses
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={handleDeleteClick}>
            <DeleteIcon color="secondary" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

// Component
export const ExpensesTable = (props) => {
  const { rows, columns, contextActions } = props;

  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState(columns[3].id);
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((elem) => elem.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <CustomTableContainer>
      <Box sx={{ width: '100%', marginBottom: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          setSelected={setSelected}
          selected={selected}
          handleDelete={contextActions}
        />
        <TableContainer sx={{ width: '100%' }}>
          <Table aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={columns}
            />
            <TableBody>
              {rows
                .slice()
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  const formattedRow = formatExpenses(row, 1);
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <CustomTableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {formattedRow.payee}
                      </CustomTableCell>
                      <CustomTableCell padding="none">
                        {formattedRow.category}
                      </CustomTableCell>
                      <CustomTableCell align="right" padding="none">
                        {formattedRow.amount}
                      </CustomTableCell>
                      <CustomTableCell align="right" padding="none">
                        {formattedRow.createdAt}
                      </CustomTableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <FormControlLabel
        control={
          <Switch
            checked={dense}
            onChange={handleChangeDense}
            color="secondary"
          />
        }
        label="Dense padding"
        sx={{ paddingLeft: '1', margin: '0' }}
      />
    </CustomTableContainer>
  );
};
