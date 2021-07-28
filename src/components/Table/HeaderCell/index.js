import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import IconBtn from 'components/IconBtn';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const HeaderCell = (props) => {
  const { sortble, children, onClick, ...other } = props;
  const cellStyles = makeStyles({
    cell: {
      border: 'none',
      color: 'var(--gray-30)',
      fontWeight: 600,
      paddingTop: 10,
      paddingBottom: 10,
      '&:first-of-type': {
        borderRadius: '4px 0 0 4px'
      },
      '&:last-of-type': {
        borderRadius: '0 4px 4px 0'
      }
    }
  });

  return (
    <TableCell className={cellStyles().cell} {...other}>
      {children}
      {sortble && (
        <IconBtn onClick={onClick} style={{ marginLeft: 8 }}>
          <ArrowDownwardIcon fontSize="small" style={{ fill: 'var(--gray-40)' }} />
        </IconBtn>
      )}
    </TableCell>
  );
};
export default HeaderCell;
