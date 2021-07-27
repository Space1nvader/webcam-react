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
import SearchIcon from '@material-ui/icons/Search';
import IconBtn from 'components/IconBtn';
import DeleteIcon from '@material-ui/icons/Delete';
import funnelIcon from 'assets/img/funnel-fill.svg';
import SimpleMenu from 'components/SimpleMenu';

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
  const { onChange, ...other } = props;
  const classes = useStyles();
  return (
    <Table {...other} style={{ marginBottom: 24 }}>
      <TableBody>
        <TableRow>
          <Cell style={{ padding: '0 0 0 4px' }}>
            <SmallCheckbox onChange={onChange} style={{ marginRight: 4 }} />
            <IconBtn style={{ marginRight: 6 }}>
              <DonutSmallRoundedIcon style={{ fill: 'var(--red-50)' }} />
            </IconBtn>
            <IconBtn>
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
            <SimpleMenu icon={<MoreVertIcon style={{ fill: 'var(--gray-20)' }} />}>
              {['Фильтр', 'Навигаций', 'Кнопка', 'Филтр']}
            </SimpleMenu>
          </Cell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableFilters;
