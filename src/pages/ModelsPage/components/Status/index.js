import React from 'react';
import IconBtn from 'components/IconBtn';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { modelsListSelector } from 'pages/ModelsPage/redux/selectors';
import './index.scss';

const Staus = () => {
  const { online, offline } = useSelector(modelsListSelector);
  return (
    <div className="status">
      <Link to="/models/add-model" title="Добавить модель">
        <IconBtn
          style={{
            backgroundColor: 'var(--red-60)',
            height: 40,
            width: 40,
            boxShadow: '0px 2px 4px rgba(156, 43, 35, 0.2), 0px 4px 8px rgba(244, 67, 54, 0.2)'
          }}
        >
          <AddRoundedIcon style={{ fill: '#fff' }} />
        </IconBtn>
      </Link>

      <div className="status__row">
        <div className="status__total">
          Всего моделей:
          <span className="status__totalValue">{online + offline}</span>
        </div>
        <div className="status__item status__item--online">
          <span className="status__itemValue">{online}</span>
          онлайн
        </div>
        <div className="status__item status__item--offline">
          <span className="status__itemValue">{offline}</span>
          оффлайн
        </div>
      </div>
    </div>
  );
};

export default Staus;
