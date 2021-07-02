import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const SmallCheckbox = (props) => {
  const { children, ...other } = props;
  return (
    <Checkbox style={{ padding: 3 }} {...other}>
      {children}
    </Checkbox>
  );
};

export default SmallCheckbox;
