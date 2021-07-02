import React from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const IOSSwitch = withStyles(() => ({
  root: {
    width: 52,
    height: 32,
    padding: 0,
    display: 'flex'
  },
  switchBase: {
    padding: 2,
    '&$checked': {
      transform: 'translateX(20px)',
      '& + $track': {
        opacity: 1,
        backgroundColor: 'var(--blue-50)'
      }
    }
  },
  thumb: {
    width: 28,
    height: 28,
    boxShadow: 'none',
    backgroundColor: 'var(--gray-0)'
  },
  track: {
    border: `2px solid var(--blue-50)`,
    boxSizing: 'border-box',
    borderRadius: 100,
    opacity: 0.1,
    backgroundColor: 'var(--gray-30)'
  },
  checked: {}
}))(({ ...props }) => <Switch disabled disableRipple {...props} />);

export default IOSSwitch;
