import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import UploadFileForm from 'modules/ModelProfile/components/UploadFileForm';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { modelDocumentsSelector } from 'modules/ModelProfile/redux/selectors';
import ScrollBar from 'components/ScrollBar';
import Document from './Document';
// import { initialValues } from './initialValues';
import './index.scss';

const useStyles = makeStyles({
  button: {
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: 14,
    padding: '14px 24px',
    color: '#fff',
    display: 'inline-flex',
    margin: '0 auto',
    backgroundColor: 'var(--red-60)',
    borderRadius: 6,
    '&:hover': {
      backgroundColor: 'var(--red-50)'
    }
  }
});

const DocsForm = (props) => {
  const { className, ...other } = props;
  const classes = useStyles();
  const { data } = useSelector(modelDocumentsSelector);

  const documents = data;
  const getDocument = (name) =>
    documents.find((document) => document.field === name) || { field: name };
  const otherDocuments = documents.files || '';
  return (
    <div className={clsx('docs', className)} {...other}>
      <h6 className="docs__title">Документы</h6>

      {documents && (
        <ScrollBar className="docs__list">
          <Document
            name="Фото модели с паспортом и датой"
            document={getDocument('faceWidthDate')}
          />
          <Document name="Фото лица" document={getDocument('face')} />
          <Document name="Фото модели с паспортом" document={getDocument('faceWithPassport')} />
          <Document name="Обратная сторона паспорта" document={getDocument('passportBackSide')} />
          <Document name="Паспорт" document={getDocument('passport')} />
          <Document name="Анкета" document={getDocument('form')} />
          {otherDocuments && otherDocuments.map((document) => <Document document={document} />)}
        </ScrollBar>
      )}

      <UploadFileForm size="large" name="files" className="uploadFile">
        <Button className={classes.button} component="span" startIcon={<GetAppRoundedIcon />}>
          ДОБАВИТЬ ДОКУМЕНТ
        </Button>
      </UploadFileForm>
    </div>
  );
};

export default DocsForm;
