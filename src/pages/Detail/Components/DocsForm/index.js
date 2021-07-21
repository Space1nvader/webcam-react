import React from 'react';
import IconButton from 'components/IconButton';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import UploadFileForm from 'components/Form/UploadFileForm';

import './index.scss';

const DocsForm = (props) => {
  const { className, docs, ...other } = props;

  const renderDocs = () => (
    <div className="docs__list">
      {docs.map((doc) => (
        <div className="docs__item" key={doc.name}>
          <span className="docs__itemName">{doc.name}</span>
          <div className="docs__itemRow">
            <span className="docs__itemSize">{doc.size}</span>
            <div className="docs__itemBar">
              <IconButton>
                <GetAppRoundedIcon color="secondary" />
              </IconButton>
              <IconButton>
                <DeleteRoundedIcon style={{ fill: 'var(--gray-10)' }} />
              </IconButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`docs ${className}`} {...other}>
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
