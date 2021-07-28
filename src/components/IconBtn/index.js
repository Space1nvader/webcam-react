import React from 'react';
import IconButton from '@material-ui/core/IconButton';

const IconBtn = (props) => {
  const { children, size = 'small', ...other } = props;
  return (
    <IconButton {...other} size={size}>
      {children}
    </IconButton>
  );
};
export default IconBtn;
