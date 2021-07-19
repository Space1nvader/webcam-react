import React from 'react';
import SmallCheckbox from 'components/SmallCheckbox';
import User from 'components/User';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '../Cell';

const Row = (props) => {
  const { fields, data, user, className, ...other } = props;
  return (
    <TableRow className={className} key={data.id} {...other}>
      <TableCell padding="checkbox">
        {/* <SmallCheckbox checked={isChecked(data.id)} onChange={handleSelectClick(data.id)} /> */}
      </TableCell>
      {fields.map((field) =>
        field.id === 'name' ? (
          <TableCell key={field.id}>
            <User to={`/model/${data.id}`} image={user.image}>
              {user.nickname} / {user.name}
            </User>
          </TableCell>
        ) : (
          <TableCell key={field.id} type={{ name: field.type, state: data[field.id] }}>
            {data[field.id]}
          </TableCell>
        )
      )}
    </TableRow>
  );
};

export default Row;
