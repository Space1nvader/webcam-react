import React from 'react';
import IconButton from 'components/IconButton';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import UploadFileButton from 'components/UploadFileButton';
import { FormContainer } from 'components/Form/FormContainer';
import './index.scss';

const DocsForm = (props) => {
  const { className, docs, ...other } = props;

  const renderDocs = () => (
    <div className="docs__list">
      {docs.map((doc) => (
        <div className="docs__item">
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
      <FormContainer>
        <UploadFileButton size="large" name="docs-upload" icon={<GetAppRoundedIcon />}>
          ЗАГРУЗИТЬ ФАЙЛ
        </UploadFileButton>
      </FormContainer>
    </div>
  );
};

export default DocsForm;
