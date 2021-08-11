import React from 'react';
import IconBtn from 'components/IconBtn';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import UploadFileForm from 'modules/ModelProfile/components/UploadFileForm';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { personalSelector } from 'modules/ModelProfile/redux/selectors';
import './index.scss';

const DocsForm = (props) => {
  const { className, ...other } = props;
  const { modelData, isLoading, success } = useSelector(personalSelector);
  const data = success && modelData.personal ? modelData.personal : '';
  const renderDocs = (docs) => (
    <div className="docs__list">
      {success &&
        docs.map((doc) => (
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
      {data.documents && renderDocs(data.documents)}

      <UploadFileForm
        size="large"
        name="files"
        initialValue={{ files: [] }}
        icon={<GetAppRoundedIcon />}
      >
        ЗАГРУЗИТЬ ФАЙЛ
      </UploadFileForm>
    </div>
  );
};

export default DocsForm;
