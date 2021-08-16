import React from 'react';
import { useSelector } from 'react-redux';
import { modelSelector } from 'modules/ModelProfile/redux/selectors';
import clsx from 'clsx';
import ActiveToggle from './components/ActiveToggle';
import './index.scss';

const ActivePapper = (props) => {
  const { className = '' } = props;
  const { modelData } = useSelector(modelSelector);
  return (
    <div className={clsx('activePapper', className)}>
      <div className="activePapper__row">
        <div className="activePapper__rowTitle">Дата последней смены</div>
        <div className="activePapper__rowValue">22.02.1999</div>
      </div>
      <div className="activePapper__row">
        <div className="activePapper__rowTitle">Дата последней смены</div>
        <div className="activePapper__rowValue">22.02.1999</div>
      </div>
      <div className="activePapper__row">
        <div className="activePapper__rowTitle">Активна</div>
        <div className="activePapper__rowValue">
          {modelData && <ActiveToggle checked={modelData.system.active} />}
        </div>
      </div>
    </div>
  );
};
export default ActivePapper;
