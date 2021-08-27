import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  row: {
    height: 300
  },
  cell: {
    borderBottom: 0
  }
});

const TableMessage = ({ children }) => {
  const classes = useStyles();
  return (
    <TableRow className={classes.row}>
      <TableCell className={classes.cell} align="center" colSpan={8}>
        {children}
      </TableCell>
    </TableRow>
  );
};

export default TableMessage;
