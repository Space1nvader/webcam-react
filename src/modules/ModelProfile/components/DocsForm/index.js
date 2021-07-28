import React from 'react';
import IconBtn from 'components/IconBtn';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import UploadFileForm from 'components/Form/UploadFileForm';
import clsx from 'clsx';
import './index.scss';

const DocsForm = (props) => {
  const { className, docs, ...other } = props;

  const renderDocs = () => (
    // TODO: функционал доков и их скачивания REDUX
    <div className="docs__list">
      {docs.map((doc) => (
        <div className="docs__item" key={doc.name}>
          <span className="docs__itemName">{doc.name}</span>
          <div className="docs__itemRow">
            <span className="docs__itemSize">{doc.size}</span>
            <div className="docs__itemBar">
              <IconBtn>
                <GetAppRoundedIcon color="secondary" />
              </IconBtn>
              <IconBtn>
                <DeleteRoundedIcon style={{ fill: 'var(--gray-10)' }} />
              </IconBtn>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={clsx('docs', className)} {...other}>
      <h6 className="docs__title">Документы</h6>
      {docs && renderDocs()}

      <UploadFileForm
        size="large"
        name="docs_upload"
        initialValue={{ name: '' }}
        icon={<GetAppRoundedIcon />}
      >
        ЗАГРУЗИТЬ ФАЙЛ
      </UploadFileForm>
    </div>
  );
};

export default DocsForm;
