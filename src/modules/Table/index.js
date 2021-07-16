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

const DataTable = (props) => {
  const { rows, fields, ...other } = props;
  const classes = useStyles();

  const [isSelect, setSelectState] = useState();
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
    setSelectState(null);
  };
  const isChecked = (id) => (isSelect ? isSelect.has(id) : false);

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
          {rows.map((row) => (
            <TableRow className={classes.tableRow} key={row.id}>
              <TableCell padding="checkbox">
                <SmallCheckbox checked={isChecked(row.id)} onChange={handleSelectClick(row.id)} />
              </TableCell>
              {fields.map((field) =>
                field.id === 'name' ? (
                  <TableCell key={field.id}>
                    <User to={`/model/${row.id}`} image={row.user.image}>
                      {row.user.nickname} / {row.user.name}
                    </User>
                  </TableCell>
                ) : (
                  <TableCell key={field.id} type={{ name: field.type, state: row[field.id] }}>
                    {row[field.id]}
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        count={rows.length}
        rowsPerPageOptions={[10]}
        onPageChange={() => console.log('page changes')}
        page={0}
        rowsPerPage={10}
      />
    </TableContainer>
  );
};
export default DataTable;
