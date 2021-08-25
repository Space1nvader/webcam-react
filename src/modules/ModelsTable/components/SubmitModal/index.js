import React, { useState, useEffect } from 'react';
import Popup from 'components/Popup';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    boxShadow: 'none',
    display: 'block',
    margin: '0 auto 7px',
    fontWeight: 700,
    fontSize: 14,
    padding: 16,
    width: 240
  }
});

const SubmitModal = ({ open, close, submit }) => {
  const classes = useStyles();
  return (
    <Popup
      style={{ width: 480 }}
      title="Действительно удалить выбранные модели?"
      open={open}
      onClose={close}
    >
      <Button
        color="secondary"
        type="submit"
        onClick={submit}
        className={classes.button}
        variant="contained"
      >
        Да
      </Button>
      <Button className={classes.button} onClick={close} variant="contained">
        Нет
      </Button>
    </Popup>
  );
};

export default SubmitModal;
