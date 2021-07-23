import React from 'react';
import DataTable from 'modules/Table';
import { useSelector } from 'react-redux';
import DashboardStatus from './components/Status';
import { modelsListSelector } from './redux/selectors';
import './index.scss';

const fields = [
  { id: 'name', label: 'Псевдоним', sortble: true },
  { id: 'shifts', label: 'Cмены' },
  { id: 'lastShift', label: 'Последняя смена' },
  { id: 'studio', label: 'Студия' },
  { id: 'balance', label: 'Баланс' },
  { id: 'activity', type: 'switch', label: 'Активность' },
  { id: 'online', type: 'status', label: 'Статус' }
];

const Dashboard = () => {
  const rows = useSelector(modelsListSelector);
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h4 className="dashboard__title">Модели студии</h4>
        <DashboardStatus />
      </div>
      <div className="dashboard__table">{rows && <DataTable rows={rows} fields={fields} />}</div>
    </div>
  );
};
export default Dashboard;
