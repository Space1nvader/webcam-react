import Dashboard from 'pages/Dashboard';
import Detail from 'pages/Detail';

export const dataRoutes = [
  {
    path: '/',
    label: 'Модели',
    component: Dashboard,
    routes: [
      {
        path: '/model/:userId',
        label: 'Модель',
        component: Detail
      }
    ]
  }
];
