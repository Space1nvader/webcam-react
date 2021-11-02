import React from 'react';
import Papper from 'components/Papper';
import IconBtn from 'components/IconBtn';
import { format, fromUnixTime } from 'date-fns';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import UploadFileForm from 'modules/ModelProfile/components/UploadFileForm';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import { DeleteDocumentAction } from 'modules/ModelProfile/redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Document = ({ name = '', document }) => {
  const dispatch = useDispatch();
  const handleDetachFile = () => {
    dispatch(DeleteDocumentAction(document.id));
  };

  return (
    <Papper className="docs__item" key={document.id}>
      <div className="docs__itemTitle">{name || 'Дополнительный файл'}</div>
      {document.id ? (
        <div className="docs__itemName">{document.title}</div>
      ) : (
        <UploadFileForm name={document.field}>
          <span
            title="Загрузить файл"
            className="docs__itemName docs__itemName--upload"
            type="button"
          >
            файл не загружен
          </span>
        </UploadFileForm>
      )}
      {document.id && (
        <div className="docs__itemRow">
          <span className="docs__itemDate">
            {document.date && format(fromUnixTime(document.date), 'dd.MM.yyyy')}
          </span>
          <div className="docs__itemBar">
            <Link to={document.path}>
              <IconBtn>
                <GetAppRoundedIcon style={{ fill: 'var(--gray-20)' }} />
              </IconBtn>
            </Link>
            <IconBtn onClick={handleDetachFile}>
              <DeleteRoundedIcon style={{ fill: 'var(--gray-10)' }} />
            </IconBtn>
          </div>
        </div>
      )}
    </Papper>
  );
};

export default Document;
