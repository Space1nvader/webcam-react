import React from 'react';
import Status from 'components/SessionStatus';
import { fromUnixTime, format } from 'date-fns';
import ActiveToggle from 'components/ActiveToggle';
import SmallCheckbox from 'components/SmallCheckbox';
import User from 'components/User';
import { TableRow } from '@material-ui/core';
import { TableCell } from 'components/Table';

const ModelRows = (props) => {
  const { rows, classes, isSelect, handleSelectClick } = props;
  return rows.map((row) => (
    <TableRow className={classes}>
      <TableCell padding="checkbox">
        <SmallCheckbox checked={isSelect.has(row.id)} onChange={handleSelectClick(row.id)} />
      </TableCell>
      <TableCell>
        <User to={`/models/${row.id}`} image={row.avatar}>
          {row.nickname} {row.fullNameRus && `/  ${row.fullNameRus}`}
        </User>
      </TableCell>
      <TableCell>{row.pair}</TableCell>
      <TableCell>{format(fromUnixTime(row.lastActiveAt), 'dd.MM.yyyy')}</TableCell>
      <TableCell>{row.contragent}</TableCell>
      <TableCell>{row.balance}</TableCell>
      <TableCell>
        <ActiveToggle id={row.id} checked={row.active} />
      </TableCell>
      <TableCell>
        <Status value={row.status} />
      </TableCell>
    </TableRow>
  ));
};

export default ModelRows;
