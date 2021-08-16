import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableContainer, TableBody, TableRow } from '@material-ui/core';
import SmallCheckbox from 'components/SmallCheckbox';
import User from 'components/User';
import Status from 'components/SessionStatus';
import IOSSwitch from 'components/IOSSwitch';
import { fromUnixTime, format } from 'date-fns';
import TableCell from 'components/Table/Cell';
import TablePagination from 'components/Table/Pagination';
import { modelsListSelector } from 'pages/ModelsPage/redux/selectors';
import { GetModelsListAction } from 'pages/ModelsPage/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import TableFiltres from './components/Filtres';
import TableHead from './components/Head';
import TableMessage from './components/Message';
import { styles } from './styles';

const useStyles = makeStyles(styles);
const ModelsTable = (props) => {
  const { rows, fields, ...other } = props;
  const { models, pagination, isLoading, success } = useSelector(modelsListSelector);
  const classes = useStyles();
  const [isSelect, setSelectState] = useState(new Set());
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const handleChangePage = (e, newPage) => {
    dispatch(GetModelsListAction(newPage));
    setPage(newPage);
  };
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
  const generateTableRows = () => {
    if (!isLoading) {
      if (rows) {
        return rows.map((row) => (
          <TableRow className={classes.tableRow} key={row.id}>
            <TableCell padding="checkbox">
              <SmallCheckbox checked={isSelect.has(row.id)} onChange={handleSelectClick(row.id)} />
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
                <TableCell key={field.id}>{generateFields(field.type, row[field.id])}</TableCell>
              )
            )}
          </TableRow>
        ));
      }
      return <TableMessage>Список моделей пуст</TableMessage>;
    }
    return <TableMessage>Загрузка списка моделей</TableMessage>;
  };

  return (
    <TableContainer {...other} className={classes.tableContainer}>
      <TableFiltres onChange={handleSelectAllClick} />
      <Table>
        <TableHead fields={fields} />
        <TableBody>{generateTableRows()}</TableBody>
      </Table>
      {pagination && (
        <TablePagination
          count={pagination.total}
          rowsPerPageOptions={[10]}
          onPageChange={handleChangePage}
          page={page}
          rowsPerPage={pagination.perPage}
        />
      )}
    </TableContainer>
  );
};
export default ModelsTable;
