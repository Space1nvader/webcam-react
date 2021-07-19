import React, { useState } from 'react';
import RemoveButton from 'components/RemoveButton';
import ConfirmPopup from 'components/СonfirmPopup';
import { makeStyles } from '@material-ui/core/styles';
import ContactLink from 'components/ContactLink';
import { Button } from '@material-ui/core';
import Income from '../Income';

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

const DetailData = (props) => {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpenClick = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const { data } = props;
  return (
    <>
      <h5 className="detail__name">
        {data.user.name} <br /> / {data.user.nickname}
      </h5>
      <div className="detail__contacts">
        <ContactLink
          style={{ color: 'var(--blue-100)', display: 'block', marginBottom: 12 }}
          href="mailto:ivanova@gmail.com"
        >
          ivanova@gmail.com
        </ContactLink>
        <ContactLink
          style={{ color: 'var(--gray-30)', display: 'block' }}
          href="tel:8 (964) 457 54-54"
        >
          8 (964) 457 54-54
        </ContactLink>
      </div>
      <div className="detail__income">
        <Income />
      </div>
      <div className="detail__remove">
        <RemoveButton onClick={handleModalOpenClick}>удалить</RemoveButton>
        <ConfirmPopup
          style={{ width: 480 }}
          title="Вы уверены что хотите удалить модель?"
          open={modalOpen}
          onClose={handleModalClose}
        >
          <Button color="secondary" type="submit" className={classes.button} variant="contained">
            сохранить
          </Button>
          <Button className={classes.button} onClick={handleModalClose} variant="contained">
            отменить
          </Button>
        </ConfirmPopup>
      </div>
    </>
  );
};

export default DetailData;
