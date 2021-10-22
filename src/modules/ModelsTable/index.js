import React, { useState, useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableContainer, TableBody } from '@material-ui/core';
import { TablePagination, TableMessage } from 'components/Table';
import { modelsListSelector } from 'pages/ModelsPage/redux/selectors';
import { DeleteModelsAction, GetModelsListAction } from 'pages/ModelsPage/redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import ModelRows from './components/ModelRows';
import TableFiltres from './components/Filtres';
import TableHead from './components/Head';
import SubmitModal from './components/SubmitModal';
import { styles } from './styles';

const useStyles = makeStyles(styles);
const ModelsTable = (props) => {
  const { rows, fields, ...other } = props;
  const classes = useStyles();
  const { pagination, success, isLoading } = useSelector(modelsListSelector);
  const [isSelect, setSelectState] = useState(new Set());
  const [isSelectAll, setSelectAll] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pageParams, setPageParams] = useState({ page: 0, search: '' });
  const dispatch = useDispatch();
  const handleChangePage = (e, page) => {
    setPageParams({ ...pageParams, page });
    dispatch(GetModelsListAction({ ...pageParams, page }));
  };

  const selected = useMemo(() => new Set(isSelect), [isSelect]);

  const handleSelectClick = (id) => () => {
    if (selected.has(id)) {
      selected.delete(id);
    } else {
      selected.add(id);
    }
    setSelectState(selected);
  };
  const handleSelectAllClick = (checked) => {
    if (checked) {
      rows.map((row) => selected.add(row.id));
      setSelectState(selected);
    } else {
      setSelectState(new Set());
    }
  };
  useEffect(() => {
    if (rows?.length && selected.size >= rows.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [rows, selected]);
  const handleConfirmlOpen = () => setModalIsOpen(true);

  const handleCloseModal = () => setModalIsOpen(false);

  const handleDeleteSelected = () => {
    dispatch(DeleteModelsAction({ data: Array.from(isSelect), pageParams }));
    setSelectState(new Set());
    setModalIsOpen(false);
  };

  const generateTableRows = () => {
    if (!isLoading) {
      if (success) {
        if (rows?.length) {
          return (
            <ModelRows
              rows={rows}
              classes={classes.tableRow}
              isSelect={isSelect}
              handleSelectClick={handleSelectClick}
            />
          );
        }
        return <TableMessage>Список моделей пуст</TableMessage>;
      }
      return <TableMessage>Что-то пошло не так</TableMessage>;
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
          isSelectAll={isSelectAll}
          handleSelectAllClick={handleSelectAllClick}
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
