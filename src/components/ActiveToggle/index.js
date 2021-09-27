import React from 'react';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { UpdateModelStatusAction } from 'modules/ModelProfile/redux/actions';
import style from './style';

const ActiveToggle = ({ id, checked = false, label = '', ...other }) => {
  const useStyles = makeStyles(style);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [state, setState] = React.useState(checked);
  const handleChange = (event) => {
    setState(event.target.checked);
    dispatch(UpdateModelStatusAction({ id, active: event.target.checked ? 1 : 0 }));
  };

  return (
    <span className={classes.label} data-label={label}>
      <Switch
        {...other}
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
    </span>
  );
};

export default ActiveToggle;
