import React, { useState, useEffect } from 'react';
import ConfirmPopup from 'components/СonfirmPopup';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { formChangedSelector } from 'redux/selectors/formChanged';

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
  const { formChanged } = useSelector(formChangedSelector);
  useEffect(() => {
    console.log('CHANGED?????', formChanged);
    // setModalOpen(true);
  }, [formChanged]);
  return (
    <ConfirmPopup
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
    </ConfirmPopup>
  );
};

export default SubmitModal;
