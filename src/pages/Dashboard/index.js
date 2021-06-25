import React from 'react';
import { api } from 'api/index';
import DataTable from 'components/DataTable';
import Status from './components/Status';
import './index.scss';

const columns = [
  { field: '', width: '5%' },
  { field: 'Псевдоним', width: '30%', sortble: true },
  { field: 'Cмены', width: '10%' },
  { field: 'Последняя смена', width: '15%' },
  { field: 'Дата создания', width: '10%' },
  { field: 'Студия', width: '10%' },
  { field: 'Баланс', width: '10%' },
  { field: 'Активность ', width: '10%' },
  { field: 'Статус  ', width: '10%' }
];

const { models } = api;

const Dashboard = () => (
  <div className="dashboard">
    <div className="dashboard__header">
      <h4 className="dashboard__title">Модели студии</h4>
      <Status />
    </div>

    <div className="dashboard__table">
      <DataTable />
    </div>
  </div>
);
export default Dashboard;
