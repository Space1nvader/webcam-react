import React from 'react';
import { useSelector } from 'react-redux';
import { modelSystemFormSelector } from 'modules/ModelProfile/redux/selectors';
import clsx from 'clsx';
import ActiveToggle from 'components/ActiveToggle';
import PapperRow from './PapperRow';
import './index.scss';

const SystemPapper = (props) => {
  const { className = '' } = props;
  const { id, data } = useSelector(modelSystemFormSelector);
  return (
    <>
      {data && (
        <div className={clsx('activePapper', className)}>
          <PapperRow title="Дата последней смены">{data.updatedAt}</PapperRow>
          <PapperRow title="Дата создания">{data.createdAt}</PapperRow>
          <PapperRow title="Активна">
            <ActiveToggle id={id} checked={data.active} />
          </PapperRow>
        </div>
      )}
    </>
  );
};
export default SystemPapper;
