import ModelsPage from 'pages/ModelsPage';
import ModelPage from 'pages/ModelPage';

export const dataRoutes = [
  {
    path: '/',
    label: 'Модели',
    component: ModelsPage,
    routes: [
      {
        path: '/models/add-model',
        label: 'Добавление модели',
        component: ModelPage
      },
      {
        path: '/models/:userId',
        label: 'Модель',
        component: ModelPage
      }
    ]
  }
];
