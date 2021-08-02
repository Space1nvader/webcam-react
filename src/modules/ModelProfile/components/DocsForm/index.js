import React from 'react';
import IconBtn from 'components/IconBtn';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import UploadFileForm from 'components/Form/UploadFileForm';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { modelSelector } from 'modules/ModelProfile/redux/selectors';
import './index.scss';

const DocsForm = (props) => {
  const { className, ...other } = props;
  const data = useSelector(modelSelector);

  const renderDocs = (docs) => (
    <div className="docs__list">
      {docs.map((doc) => (
        <div className="docs__item" key={doc.id}>
          <span className="docs__itemName">{doc.title}</span>
          <div className="docs__itemRow">
            <span className="docs__itemSize">{doc.size || 'размер не определен'}</span>
            <div className="docs__itemBar">
              <Link to={doc.path}>
                <IconBtn>
                  <GetAppRoundedIcon color="secondary" />
                </IconBtn>
              </Link>
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
      {data && data.documents && renderDocs(data.documents)}

      <UploadFileForm
        size="large"
        name="docs"
        initialValue={{ docs: [] }}
        icon={<GetAppRoundedIcon />}
      >
        ЗАГРУЗИТЬ ФАЙЛ
      </UploadFileForm>
    </div>
  );
};

export default DocsForm;
