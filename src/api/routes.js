import ModelsPage from 'pages/ModelsPage';
import ProfilePage from 'pages/ProfilePage';

export const dataRoutes = [
  {
    path: '/',
    label: 'Модели',
    component: ModelsPage,
    routes: [
      {
        path: '/model/add-model',
        label: 'Добавление модели',
        component: ProfilePage
      },
      {
        path: '/model/:userId',
        label: 'Модель',
        component: ProfilePage
      }
    ]
  }
];
