import React from 'react';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

const IOSSwitch = ({ checked = false }) => {
  const useStyles = makeStyles({
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
    checked: {},
    focusVisible: {}
  });
  const classes = useStyles();
  const [state, setState] = React.useState(checked);
  const handleChange = (event) => {
    setState(event.target.checked);
  };
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      onChange={handleChange}
      checked={state}
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
    />
  );
};

export default IOSSwitch;
