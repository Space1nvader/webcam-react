import React, { useState } from 'react';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Popup from 'components/Popup';
import IconBtn from 'components/IconBtn';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
const RemoveFrame = ({ onClick }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpenClick = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const handleConfimClick = () => {
    if (onClick) onClick();
    setModalOpen(false);
  };

  const classes = useStyles();
  return (
    <>
      <IconBtn onClick={handleModalOpenClick}>
        <DeleteRoundedIcon style={{ fill: 'var(--gray-20)' }} />
      </IconBtn>
      <Popup
        style={{ width: 480 }}
        title="Вы уверены что хотите удалить этот аккаунт?"
        open={modalOpen}
        onClose={handleModalClose}
      >
        {/* TODO:удаление фрейма аккаунта */}
        <Button
          color="secondary"
          onClick={handleConfimClick}
          type="submit"
          className={classes.button}
          variant="contained"
        >
          Удалить
        </Button>
      </Popup>
    </>
  );
};

export default RemoveFrame;
