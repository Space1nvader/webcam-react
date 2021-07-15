import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  removeBtn: {
    backgroundColor: 'var(--red-5)',
    color: 'var(--red-60)',
    width: '100%',
    borderRadius: 36,
    padding: 14,
    boxSizing: 'border-box',
    fontWeight: 700,
    '&:hover': {
      backgroundColor: 'var(--red-50)',
      color: '#fff'
    }
  }
});

const RemoveButton = (props) => {
  const { children, ...other } = props;
  const classes = useStyles();
  return (
    <Button {...other} className={classes.removeBtn} startIcon={<DeleteIcon />}>
      {children}
    </Button>
  );
};

export default RemoveButton;
