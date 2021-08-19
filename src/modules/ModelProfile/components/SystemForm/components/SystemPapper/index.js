import React from 'react';
import { useSelector } from 'react-redux';
import { modelSelector } from 'modules/ModelProfile/redux/selectors';
import clsx from 'clsx';
import ActiveToggle from 'components/ActiveToggle';
import PapperRow from './PapperRow';
import './index.scss';

const SystemPapper = (props) => {
  const { className = '' } = props;
  const { modelData } = useSelector(modelSelector);
  return (
    <>
      {modelData && (
        <div className={clsx('activePapper', className)}>
          <PapperRow title="Дата последней смены">22.02.1999</PapperRow>
          <PapperRow title="Дата последней смены">22.02.1999</PapperRow>
          <PapperRow title="Активна">
            <ActiveToggle id={modelData.id} checked={modelData.system.active} />
          </PapperRow>
        </div>
      )}
    </>
  );
};
export default SystemPapper;
