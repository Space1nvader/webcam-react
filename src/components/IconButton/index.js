import React from 'react';
import { IconButton as IconMaterialButton } from '@material-ui/core';

const IconButton = (props) => {
  const { children, size = 'smaill', ...other } = props;
  return (
    <IconMaterialButton {...other} size={size}>
      {children}
    </IconMaterialButton>
  );
};
export default IconButton;
