import React, { useState } from 'react';
import RemoveButton from 'components/RemoveButton';
import { Button } from '@material-ui/core';
import Popup from 'components/Popup';
import { makeStyles } from '@material-ui/core/styles';
import ContactLink from 'components/ContactLink';
import { useDispatch, useSelector } from 'react-redux';
import {
  modelPersonalFormSelector,
  modelSystemFormSelector
} from 'modules/ModelProfile/redux/selectors';
import { DeleteModelAction } from 'modules/ModelProfile/redux/actions';
import { useHistory } from 'react-router-dom';
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
  const dispatch = useDispatch();
  const { id } = useSelector(modelPersonalFormSelector);
  const { data: personal } = useSelector(modelPersonalFormSelector);
  const { data: system } = useSelector(modelSystemFormSelector);
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpenClick = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const handleConfimClick = () => {
    dispatch(DeleteModelAction(id));
    history.push('/models');
  };
  return (
    <>
      <h5 className="detailData__name">
        {personal.nameRus && `${personal.nameRus} /`} {system.nickname}
      </h5>
      <div className="detailData__contacts">
        {personal.email && (
          <ContactLink
            style={{ color: 'var(--blue-100)', display: 'block', marginBottom: 12 }}
            href={`mailto:${personal.email}`}
          >
            {personal.email}
          </ContactLink>
        )}
        {personal.phone && (
          <ContactLink
            style={{ color: 'var(--gray-30)', display: 'block' }}
            href={`tel:${personal.phone}`}
          >
            {personal.phone}
          </ContactLink>
        )}
      </div>
      <div className="detailData__income">
        <Income />
      </div>
      <div className="detailData__remove">
        <RemoveButton onClick={handleModalOpenClick}>удалить</RemoveButton>
        <Popup
          style={{ width: 480 }}
          title="Вы уверены что хотите удалить модель?"
          open={modalOpen}
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
          <Button className={classes.button} onClick={handleModalClose} variant="contained">
            отменить
          </Button>
        </Popup>
      </div>
    </>
  );
};

export default DetailData;
