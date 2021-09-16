import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import TuneIcon from '@material-ui/icons/Tune';
import { useSelector } from 'react-redux';
import { modelPersonalFormSelector } from 'modules/ModelProfile/redux/selectors';
import ProfileTabs from './components/ProfileTabs';
import PersonalWindow from './components/PersonalWindow';
import DescriptionWindow from './components/DescriptionWindow';
import DetailData from './components/DetailData';
import PictureForm from './components/PictureForm';
import SystemWindow from './components/SystemWindow';
import AccountWindow from './components/AccountWindow';
import './index.scss';

const ModelProfile = () => {
  const { id, data } = useSelector(modelPersonalFormSelector);
  const modelProfileTabs = [
    {
      title: 'Системные данные',
      icon: <SettingsIcon />,
      component: <SystemWindow />
    },

    {
      title: 'Личные данные',
      icon: <PersonIcon />,
      component: <PersonalWindow />,
      disabled: !data
    },
    {
      title: 'Основные данные',
      icon: <HowToRegIcon />,
      component: <DescriptionWindow />,
      disabled: !data
    },
    {
      title: 'Учетные данные',
      icon: <TuneIcon />,
      component: <AccountWindow />,
      disabled: !data
    }
  ];

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
          <ProfileTabs id={id} tabs={modelProfileTabs} />
        </div>
      </div>
    </>
  );
};

export default ModelProfile;
