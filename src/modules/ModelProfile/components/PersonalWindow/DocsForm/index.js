import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import UploadFileForm from 'modules/ModelProfile/components/UploadFileForm';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { modelPersonalFormSelector } from 'modules/ModelProfile/redux/selectors';
import ScrollBar from 'components/ScrollBar';
import Document from './Document';
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
  const {
    data: { documents }
  } = useSelector(modelPersonalFormSelector);
  // TODO: INITIAL DOCUMENTS
  return (
    <div className={clsx('docs', className)} {...other}>
      <h6 className="docs__title">Документы</h6>

      {documents && (
        <ScrollBar className="docs__list">
          {documents.map((document) => (
            <Document document={document} />
          ))}
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
