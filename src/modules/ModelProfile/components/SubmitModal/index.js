import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalFormSelector } from 'redux/selectors/modelForm';
import { Button } from '@material-ui/core';
import Popup from 'components/Popup';
import { makeStyles } from '@material-ui/core/styles';
import { SetFormTabAction, ResetFormConfirmAction } from 'redux/actions/modelForm';

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

const SubmitModal = ({ onSubmit, values }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { confirmModal } = useSelector(modalFormSelector);
  const handleModalClose = () => {
    dispatch(ResetFormConfirmAction());
  };
  const handleConfimClick = () => {
    onSubmit(values);
    dispatch(SetFormTabAction(confirmModal.route));
  };
  const handleCancelChanges = () => {
    dispatch(SetFormTabAction(confirmModal.route));
  };
  return (
    <Popup
      style={{ width: 480 }}
      title="Сохранить ваши изменения?"
      open={confirmModal.active}
      onClose={handleModalClose}
    >
      <Button
        color="secondary"
        onClick={handleConfimClick}
        type="submit"
        className={classes.button}
        variant="contained"
      >
        сохранить
      </Button>
      <Button className={classes.button} onClick={handleCancelChanges} variant="contained">
        отменить
      </Button>
    </Popup>
  );
};
export default SubmitModal;
