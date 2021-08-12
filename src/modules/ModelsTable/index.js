import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableContainer, TableBody, TableRow } from '@material-ui/core';
import SmallCheckbox from 'components/SmallCheckbox';
import User from 'components/User';
import Status from 'components/SessionStatus';
import IOSSwitch from 'components/IOSSwitch';
import { fromUnixTime, format } from 'date-fns';
import TableCell from 'components/Table/Cell';
import HeaderCell from 'components/Table/HeaderCell';
import TablePagination from 'components/Table/Pagination';
import TableFiltres from './components/Filtres';

const useStyles = makeStyles({
  tableContainer: {
    borderRadius: 12,
    border: '1px solid var(--gray-20)',
    boxSizing: 'border-box',
    padding: '24px 24px 0'
  },
  tableRow: {
    '&:hover': {
      backgroundColor: 'var(--indigo-0)'
    },
    '&:first-of-type': {
      borderTop: '18px solid transparent'
    }
  }
});

const ModelsTable = (props) => {
  const { rows, fields, ...other } = props;
  const classes = useStyles();
  const [isSelect, setSelectState] = useState(new Set());

  const selected = new Set(isSelect);
  const handleSelectClick = (id) => () => {
    if (selected.has(id)) {
      selected.delete(id);
    } else {
      selected.add(id);
    }
    setSelectState(selected);
  };
  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      rows.map((row) => selected.add(row.id));
      setSelectState(selected);
      return;
    }
    setSelectState(new Set());
  };
  const generateFields = (type, value) => {
    switch (type) {
      case 'switch':
        return <IOSSwitch checked={value} />;
      case 'status':
        return <Status value={value} />;
      case 'date':
        return format(fromUnixTime(value), 'dd.MM.yyyy');
      default:
        return value;
    }
  };
  return (
    <TableContainer {...other} className={classes.tableContainer}>
      <TableFiltres onChange={handleSelectAllClick} />
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: 'var(--indigo-0)' }}>
            <HeaderCell padding="checkbox" />
            {fields.map((field) => (
              <HeaderCell key={field.id} sortble={field.sortble}>
                {field.label}
              </HeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((row) => (
              <TableRow className={classes.tableRow} key={row.id}>
                <TableCell padding="checkbox">
                  <SmallCheckbox
                    checked={isSelect.has(row.id)}
                    onChange={handleSelectClick(row.id)}
                  />
                </TableCell>
                {fields.map((field) =>
                  field.id === 'name' ? (
                    <TableCell key={field.id}>
                      <User
                        to={`/models/${row.id}`}
                        image={process.env.REACT_APP_BASE_URL + row.avatar}
                      >
                        {row.nickname} / {row.fullNameRus}
                      </User>
                    </TableCell>
                  ) : (
                    <TableCell key={field.id}>
                      {generateFields(field.type, row[field.id])}
                    </TableCell>
                  )
                )}
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        count={rows && rows.length}
        rowsPerPageOptions={[10]}
        onPageChange={() => console.log('page changes')}
        page={0}
        rowsPerPage={10}
      />
    </TableContainer>
  );
};
export default ModelsTable;
