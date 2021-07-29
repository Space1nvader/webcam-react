import React, { useState } from 'react';
import RemoveButton from 'components/RemoveButton';
import ConfirmPopup from 'components/СonfirmPopup';
import { makeStyles } from '@material-ui/core/styles';
import ContactLink from 'components/ContactLink';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { modelSelector } from 'modules/ModelProfile/redux/selectors';
import Income from '../Income';
import './index.scss';

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

const DetailData = () => {
  const classes = useStyles();

  const data = useSelector(modelSelector);
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpenClick = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  return (
    <>
      <h5 className="detailData__name">
        {data.name} <br /> / {data.nickname}
      </h5>
      <div className="detailData__contacts">
        {data.email && (
          <ContactLink
            style={{ color: 'var(--blue-100)', display: 'block', marginBottom: 12 }}
            href={`mailto:${data.email}`}
          >
            {data.email}
          </ContactLink>
        )}
        {data.phone && (
          <ContactLink
            style={{ color: 'var(--gray-30)', display: 'block' }}
            href={`tel:${data.phone}`}
          >
            {data.phone}
          </ContactLink>
        )}
      </div>
      <div className="detailData__income">
        <Income />
      </div>
      <div className="detailData__remove">
        {/* TODO: REMOVE REQUEST */}
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
