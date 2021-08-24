import React, { useState } from 'react';
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

const SubmitModal = ({ onSubmit }) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = () => setModalOpen(false);

  return (
    <Popup
      style={{ width: 480 }}
      title="Сохранить ваши изменения?"
      open={modalOpen}
      onClose={handleModalClose}
    >
      <Button
        color="secondary"
        type="submit"
        onSubmit={onSubmit}
        className={classes.button}
        variant="contained"
      >
        Да
      </Button>
      <Button className={classes.button} onClick={handleModalClose} variant="contained">
        Нет
      </Button>
    </Popup>
  );
};

export default SubmitModal;
