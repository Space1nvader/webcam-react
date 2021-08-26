import React from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Cell from 'components/Table/Cell';
import SmallCheckbox from 'components/SmallCheckbox';
import TextField from '@material-ui/core/TextField';
import DonutSmallRoundedIcon from '@material-ui/icons/DonutSmallRounded';
import InputAdornment from '@material-ui/core/InputAdornment';
import { GetModelsListAction } from 'pages/ModelsPage/redux/actions';
import SearchIcon from '@material-ui/icons/Search';
import IconBtn from 'components/IconBtn';
import DeleteIcon from '@material-ui/icons/Delete';
import funnelIcon from 'assets/img/funnel-fill.svg';
import SimpleMenu from 'components/SimpleMenu';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(() => ({
  search: {
    '& input': {
      padding: '12px 14px'
    },
    '& fieldset': {
      borderColor: 'var(--gray-20)'
    },
    '&:hover fieldset': {
      borderColor: 'var(--gray-30)'
    },
    '& input:focus + fieldset': {
      borderColor: 'red'
    }
  }
}));

const TableFilters = (props) => {
  const { setSearchParams, handleConfirmlOpen, selectAll, ...other } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  let holdtimer = null;
  const holderSetSearchFunc = (params = { page: 0, search: '' }) => {
    setTimeout(() => {
      setSearchParams(params);
      dispatch(GetModelsListAction(params));
    }, 500);
  };
  const handleSearchChange = (e) => {
    const valueLength = e.target.value.length;
    clearTimeout(holdtimer);
    if (valueLength >= 3) {
      holdtimer = holderSetSearchFunc({ page: 0, search: e.target.value });
    }
    if (valueLength < 1) holdtimer = holderSetSearchFunc();
  };

  return (
    <Table {...other} style={{ marginBottom: 24 }}>
      <TableBody>
        <TableRow>
          <Cell style={{ padding: '0 0 0 4px' }}>
            <SmallCheckbox onChange={selectAll} style={{ marginRight: 4 }} />
            <IconBtn style={{ marginRight: 6 }}>
              <DonutSmallRoundedIcon style={{ fill: 'var(--red-50)' }} />
            </IconBtn>
            <IconBtn onClick={handleConfirmlOpen}>
              <DeleteIcon style={{ fill: 'var(--gray-20)' }} />
            </IconBtn>
          </Cell>
          <Cell>
            <form noValidate autoComplete="off">
              <TextField
                className={classes.search}
                fullWidth
                placeholder="Поиск по моделям"
                variant="outlined"
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ fill: 'var(--gray-40)' }} />
                    </InputAdornment>
                  )
                }}
              />
            </form>
          </Cell>
          <Cell align="right">
            <IconBtn style={{ marginRight: 10 }}>
              <img alt="" src={funnelIcon} />
            </IconBtn>
            <SimpleMenu
              options={['Фильтр', 'Навигаций', 'Кнопка', 'Филтр']}
              icon={<MoreVertIcon style={{ fill: 'var(--gray-20)' }} />}
            />
          </Cell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableFilters;
