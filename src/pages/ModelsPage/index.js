import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModelsTable from 'modules/ModelsTable';
import Status from 'components/SessionStatus';
import DashboardStatus from './components/Status';
import { modelsListSelector } from './redux/selectors';
import { GetModelsListAction, ResetAction } from './redux/actions';
import './index.scss';

const fields = [
  { id: 'name', type: 'name', label: 'Псевдоним', sortble: true },
  { id: 'pair', label: 'Cмены' },
  { id: 'lastActiveAt', type: 'date', label: 'Последняя смена' },
  { id: 'contragent', label: 'Студия' },
  { id: 'balance', label: 'Баланс' },
  { id: 'active', type: 'switch', label: 'Активность' },
  { id: 'status', type: 'status', component: Status, label: 'Статус' }
];

const ModelsPage = () => {
  const { models } = useSelector(modelsListSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetModelsListAction({ page: 0 }));
    return () => {
      dispatch(ResetAction());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h4 className="dashboard__title">Модели студии</h4>
        <DashboardStatus />
      </div>
      <div className="dashboard__table">
        <ModelsTable rows={models} fields={fields} />
      </div>
    </div>
  );
};
export default ModelsPage;
