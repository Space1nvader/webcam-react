import ModelsPage from 'pages/ModelsPage';
import ModelPage from 'pages/ModelPage';
import Profile from '../components/Profile/index';

export const dataRoutes = [
  {
    path: '/models',
    label: 'Модели',
    component: ModelsPage,
    routes: [
      {
        path: '/add-model',
        label: 'Добавление модели',
        component: ModelPage
      },
      {
        path: '/:userId',
        label: 'Модель',
        component: ModelPage
      }
    ]
  },
  {
    path: '/stats',
    label: 'Статистика',
    component: Profile
  }
];
