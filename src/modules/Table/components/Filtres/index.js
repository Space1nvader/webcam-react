import React from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Field from 'modules/Form/Field';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Cell from 'modules/Table/components/Cell';
import SmallCheckbox from 'components/SmallCheckbox';
import DonutSmallRoundedIcon from '@material-ui/icons/DonutSmallRounded';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import funnelIcon from 'assets/img/funnel-fill.svg';
import searchIcon from 'assets/img/search.svg';

const TableFilters = (props) => {
  const { ...other } = props;
  return (
    <Table {...other} style={{ marginBottom: 24 }}>
      <TableBody>
        <TableRow>
          <Cell style={{ padding: '0 0 0 4px' }}>
            <SmallCheckbox style={{ marginRight: 4 }} />
            <IconButton size="small" style={{ marginRight: 6 }}>
              <DonutSmallRoundedIcon style={{ fill: 'var(--red-50)' }} />
            </IconButton>
            <IconButton size="small">
              <DeleteIcon style={{ fill: 'var(--gray-20)' }} />
            </IconButton>
          </Cell>
          <Cell>
            <Field
              placeholder="Поиск по моделям"
              autocomplete="off"
              name="search"
              style={{ borderRadius: 6, paddingLeft: 56, width: 680, height: 48, margin: '0 auto' }}
              icon={searchIcon}
            />
          </Cell>
          <Cell align="right ">
            <IconButton size="small" style={{ marginRight: 10 }}>
              <img alt="" src={funnelIcon} />
            </IconButton>
            <IconButton size="small">
              <MoreVertIcon style={{ fill: 'var(--gray-20)' }} />
            </IconButton>
          </Cell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TableFilters;
