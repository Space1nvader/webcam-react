import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles } from '@material-ui/core/styles';

const Pagination = (props) => {
  const { ...other } = props;
  const paginationStyles = makeStyles({
    pagination: {
      marginTop: 30,
      position: 'relative',
      overflow: 'visible',
      '&::after': {
        content: '""',
        top: '0',
        left: '-24px',
        position: 'absolute',
        width: 'calc(100% + 48px)',
        display: 'block',
        height: '20px',
        borderTop: '1px solid var(--gray-20)'
      }
    }
  });

  return <TablePagination component="div" className={paginationStyles().pagination} {...other} />;
};

export default Pagination;
