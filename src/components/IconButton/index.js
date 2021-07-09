import React from 'react';
import { IconButton as IconMaterialButton } from '@material-ui/core';

const IconButton = (props) => {
  const { children, size, ...other } = props;
  return (
    <IconMaterialButton {...other} size={size || 'small'}>
      {children}
    </IconMaterialButton>
  );
};
export default IconButton;
