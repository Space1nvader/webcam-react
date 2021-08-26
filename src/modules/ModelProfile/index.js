import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSelector } from 'react-redux';
import { modelPersonalFormSelector } from 'modules/ModelProfile/redux/selectors';
import ProfileTabs from './components/ProfileTabs';
import PersonalWindow from './components/PersonalWindow';
import DescriptionWindow from './components/DescriptionWindow';
import DetailData from './components/DetailData';
import PictureForm from './components/PictureForm';
import SystemWindow from './components/SystemWindow';
import './index.scss';

const modelProfileTabs = [
  {
    key: 'system',
    title: 'Системные данные',
    icon: <SettingsIcon />,
    component: <SystemWindow />
  },
  {
    key: 'personal',
    title: 'Личные данные',
    icon: <PersonIcon />,
    component: <PersonalWindow />
  },
  {
    key: 'general',
    title: 'Основные данные',
    icon: <PersonAddIcon />,
    component: <DescriptionWindow />
  },
  {
    key: 'account',
    title: 'Учетные данные',
    icon: <SettingsIcon />,
    component: <SystemWindow />
  }
];
const ModelProfile = () => {
  const { id, data } = useSelector(modelPersonalFormSelector) || '';
  const avatar = data ? { id, avatar: data.avatar } : '';
  return (
    <>
      <h4 className="modelProfile__title">
        {data ? `${data.name} ${data.surname || ''}` : 'Данные модели'}
      </h4>
      <div className="modelProfile__profile">
        <div className="modelProfile__data">
          <PictureForm style={{ marginBottom: 10 }} name="avatar" data={avatar} />
          {data && <DetailData />}
        </div>

        <div className="modelProfile__box">
          <ProfileTabs tabs={modelProfileTabs} />
        </div>
      </div>
    </>
  );
};

export default ModelProfile;
