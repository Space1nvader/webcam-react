import React from 'react';
import { TableHead, TableRow } from '@material-ui/core';
import { HeaderCell } from 'components/Table';

const Head = ({ fields }) => (
  <TableHead>
    <TableRow style={{ backgroundColor: 'var(--indigo-0)' }}>
      <HeaderCell padding="checkbox" />
      {fields.map((field) => (
        <HeaderCell key={field.id} sortble={field.sortble}>
          {field.label}
        </HeaderCell>
      ))}
    </TableRow>
  </TableHead>
);

export default Head;
