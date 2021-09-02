import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableContainer, TableBody, TableRow } from '@material-ui/core';
import SmallCheckbox from 'components/SmallCheckbox';
import User from 'components/User';
import Status from 'components/SessionStatus';
import { fromUnixTime, format } from 'date-fns';
import { TableCell, TablePagination, TableMessage } from 'components/Table';
import { modelsListSelector } from 'pages/ModelsPage/redux/selectors';
import { DeleteModelsAction, GetModelsListAction } from 'pages/ModelsPage/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import ActiveToggle from 'components/ActiveToggle';
import TableFiltres from './components/Filtres';
import TableHead from './components/Head';
import SubmitModal from './components/SubmitModal';
import { styles } from './styles';

const useStyles = makeStyles(styles);
const ModelsTable = (props) => {
  const { rows, fields, ...other } = props;
  const classes = useStyles();
  const { pagination, isLoading, success } = useSelector(modelsListSelector);
  const [isSelect, setSelectState] = useState(new Set());
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pageParams, setPageParams] = useState({ page: 0, search: '' });
  const dispatch = useDispatch();
  const handleChangePage = (e, page) => {
    setPageParams({ ...pageParams, page });
    dispatch(GetModelsListAction({ ...pageParams, page }));
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
    } else {
      setSelectState(new Set());
    }
  };
  const handleConfirmlOpen = () => {
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  const handleDeleteSelected = () => {
    dispatch(DeleteModelsAction({ data: Array.from(isSelect), pageParams }));
    setSelectState(new Set());
    setModalIsOpen(false);
  };

  const generateFields = (type, id, value) => {
    switch (type) {
      case 'switch':
        return <ActiveToggle id={id} checked={value} />;
      case 'status':
        return <Status value={value} />;
      case 'date':
        return format(fromUnixTime(value), 'dd.MM.yyyy');
      default:
        return value;
    }
  };
  const generateTableContent = () =>
    rows.map((row) => (
      <TableRow className={classes.tableRow} key={row.id}>
        <TableCell padding="checkbox">
          <SmallCheckbox checked={isSelect.has(row.id)} onChange={handleSelectClick(row.id)} />
        </TableCell>
        {fields.map((field) =>
          field.id === 'name' ? (
            <TableCell key={field.id}>
              <User to={`/models/${row.id}`} image={row.avatar}>
                {row.nickname} {row.fullNameRus && `/  ${row.fullNameRus}`}
              </User>
            </TableCell>
          ) : (
            <TableCell key={field.id}>
              {generateFields(field.type, row.id, row[field.id])}
            </TableCell>
          )
        )}
      </TableRow>
    ));

  const generateTableRows = () => {
    if (!isLoading) {
      if (success) {
        return generateTableContent();
      }
      return <TableMessage>Список моделей пуст</TableMessage>;
    }
    return <TableMessage>Загрузка списка моделей</TableMessage>;
  };

  return (
    <>
      <SubmitModal open={modalIsOpen} submit={handleDeleteSelected} close={handleCloseModal} />
      <TableContainer {...other} className={classes.tableContainer}>
        <TableFiltres
          setSearchParams={setPageParams}
          handleConfirmlOpen={handleConfirmlOpen}
          selectAll={handleSelectAllClick}
        />
        <Table>
          <TableHead fields={fields} />
          <TableBody>{generateTableRows()}</TableBody>
        </Table>
        {pagination && (
          <TablePagination
            count={pagination.total}
            rowsPerPageOptions={[10]}
            onPageChange={handleChangePage}
            page={pageParams.page}
            rowsPerPage={pagination.perPage}
          />
        )}
      </TableContainer>
    </>
  );
};
export default ModelsTable;
