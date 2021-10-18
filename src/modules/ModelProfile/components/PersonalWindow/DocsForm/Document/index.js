import React from 'react';
import Papper from 'components/Papper';
import IconBtn from 'components/IconBtn';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import { DeleteDocumentAction } from 'modules/ModelProfile/redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Document = ({ document }) => {
  const dispatch = useDispatch();
  const handleDetachFile = () => {
    dispatch(DeleteDocumentAction(document.id));
  };
  return (
    <Papper className="docs__item" key={document.id}>
      <div className="docs__itemTitle">
        {document.name || 'Имя Фотография модели лица с паспортом с текушей датой'}
      </div>
      <div className="docs__itemName">{document.title}</div>
      <div className="docs__itemRow">
        <span className="docs__itemSize">{document.size || 'размер не определен'}</span>
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
    </Papper>
  );
};

export default Document;
