import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SmallCheckbox from 'components/SmallCheckbox';
import User from 'components/User';
import TableCell from './components/Cell';
import HeaderCell from './components/HeaderCell';
import TablePagination from './components/Pagination';
import TableFiltres from './components/Filtres';

const useStyles = makeStyles({
  tableContainer: {
    borderRadius: 12,
    border: '1px solid var(--gray-20)',
    boxSizing: 'border-box',
    padding: 24,
    paddingBottom: 0
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

const DataTable = (props) => {
  const { rows, fields, ...other } = props;
  const classes = useStyles();

  return (
    <TableContainer {...other} className={classes.tableContainer}>
      <TableFiltres />
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
          {rows.map((row) => (
            <TableRow className={classes.tableRow} key={row.id}>
              <TableCell padding="checkbox">
                <SmallCheckbox />
              </TableCell>
              {fields.map((field) =>
                field.id === 'name' ? (
                  <TableCell>
                    <User to={`/model/${row.id}`} image={row.user.image}>
                      {row.user.nickname} / {row.user.name}
                    </User>
                  </TableCell>
                ) : (
                  <TableCell type={{ name: field.type, state: row[field.id] }}>
                    {row[field.id]}
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination count={rows.length} rowsPerPageOptions={false} page={0} rowsPerPage="10" />
    </TableContainer>
  );
};
export default DataTable;
