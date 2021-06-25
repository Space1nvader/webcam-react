import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
// import DeleteIcon from '@material-ui/icons/Delete';
// import './index.scss';

const DataTable = () => (
  //   const { names, rows, ...other } = props;
  <Table>
    <TableHead>
      <TableCell>фильтры</TableCell>
      <TableCell>поиск</TableCell>
      <TableCell>сортировка</TableCell>
    </TableHead>
  </Table>
);
export default DataTable;
