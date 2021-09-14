import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconBtn from 'components/IconBtn';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import UploadFileForm from 'modules/ModelProfile/components/UploadFileForm';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { modelPersonalFormSelector } from 'modules/ModelProfile/redux/selectors';
import { DeleteDocumentAction } from 'modules/ModelProfile/redux/actions';
import Papper from 'components/Papper';
import './index.scss';
import ScrollBar from 'components/ScrollBar';

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
  const dispatch = useDispatch();
  const classes = useStyles();
  const { data = '' } = useSelector(modelPersonalFormSelector);
  const detachFile = (id) => () => {
    dispatch(DeleteDocumentAction(id));
  };
  const renderDocs = (docs) => (
    <ScrollBar className="docs__list">
      {docs.map((doc) => (
        <Papper className="docs__item" key={doc.id}>
          <div className="docs__itemTitle">
            {doc.name || 'Имя Фотография модели лица с паспортом с текушей датой'}
          </div>
          <div className="docs__itemName">{doc.title}</div>
          <div className="docs__itemRow">
            <span className="docs__itemSize">{doc.size || 'размер не определен'}</span>
            <div className="docs__itemBar">
              <Link to={doc.path}>
                <IconBtn>
                  <GetAppRoundedIcon style={{ fill: 'var(--gray-20)' }} />
                </IconBtn>
              </Link>
              <IconBtn onClick={detachFile(doc.id)}>
                <DeleteRoundedIcon style={{ fill: 'var(--gray-10)' }} />
              </IconBtn>
            </div>
          </div>
        </Papper>
      ))}
    </ScrollBar>
  );
  return (
    <div className={clsx('docs', className)} {...other}>
      <h6 className="docs__title">Документы</h6>

      {data?.documents && renderDocs(data.documents)}

      <UploadFileForm size="large" name="files" className="uploadFile" initialValue={{ files: [] }}>
        <Button className={classes.button} component="span" startIcon={<GetAppRoundedIcon />}>
          ДОБАВИТЬ ДОКУМЕНТ
        </Button>
      </UploadFileForm>
    </div>
  );
};

export default DocsForm;
