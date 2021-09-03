import React from 'react';
import Status from 'components/SessionStatus';
import { fromUnixTime, format } from 'date-fns';
import ActiveToggle from 'components/ActiveToggle';

export const generateFields = (type, id, value) => {
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
