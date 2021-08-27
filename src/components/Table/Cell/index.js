import React from 'react';
import Cell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

const TableCell = (props) => {
  const { children, ...other } = props;
  const cellStyles = makeStyles({
    cell: {
      border: 'none',
      paddingTop: 4,
      paddingBottom: 4,
      color: 'var(--gray-80)',
      letterSpacing: '0.018em',
      '&:first-of-type': {
        borderRadius: '4px 0 0 4px'
      },
      '&:last-of-type': {
        borderRadius: '0 4px 4px 0'
      }
    }
  });

  return (
    <Cell className={cellStyles().cell} {...other}>
      {children}
    </Cell>
  );
};
export default TableCell;
