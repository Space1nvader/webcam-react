import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import Status from 'components/SessionStatus';
import IOSSwitch from 'components/IOSSwitch';

const Cell = (props) => {
  const { children, type, ...other } = props;
  const cellStyles = makeStyles({
    cell: {
      border: 'none',
      paddingTop: 4,
      paddingBottom: 4,
      color: 'var(--gray-80)',
      letterSpacing: '0.018em',
      '&:first-of-type': {
        borderRadius: '4px 0 0 4 px'
      },
      '&:last-of-type': {
        borderRadius: '0 4px 4px 0'
      }
    }
  });
  const generateFields = (value) => {
    switch (value) {
      case 'switch':
        return <IOSSwitch checked={type.state} />;
      case 'status':
        return <Status value={type.state} />;
      default:
        return children;
    }
  };
  return (
    <TableCell className={cellStyles().cell} {...other}>
      {type?.name ? generateFields(type.name) : children}
    </TableCell>
  );
};
export default Cell;
