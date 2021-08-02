import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSelector } from 'react-redux';
import { modelSelector } from 'modules/ModelProfile/redux/selectors';
import ProfileTabs from './components/ProfileTabs';
import PersonalForm from './components/PersonalForm';
import DocsForm from './components/DocsForm';
import MainDataForm from './components/MainDataForm';
import DetailData from './components/DetailData';
import PictureForm from './components/PictureForm';
import './index.scss';

const modelProfileTabs = [
  {
    key: 'personal',
    title: 'Личные данные',
    icon: <PersonIcon />,
    component: (
      <>
        <PersonalForm className="modelProfile__form" />
        <DocsForm className="modelProfile__docs" />
      </>
    )
  },
  {
    key: 'general',
    title: 'Основные данные',
    icon: <PersonAddIcon />,
    component: <MainDataForm className="modelProfile__form" />
  },
  {
    key: 'account',
    title: 'Учетные данные',
    icon: <SettingsIcon />,
    component: <DocsForm className="modelProfile__docs" />
  }
];
const ModelProfile = () => {
  const model = useSelector(modelSelector);
  return (
    <>
      <h4 className="modelProfile__title">
        {model && model.name ? `${model.name} ${model.surname || ''}` : 'Данные модели'}
      </h4>
      <h6 className="modelProfile__subtitle">Text fields popular combinations</h6>
      <div className="modelProfile__profile">
        <div className="modelProfile__data">
          <PictureForm
            style={{ marginBottom: 10 }}
            name="avatar"
            imagePath={{ avatar: model ? model.avatar : '' }}
          />
          {model && <DetailData />}
        </div>
        <div className="modelProfile__box">
          <ProfileTabs tabs={modelProfileTabs} />
        </div>
      </div>
    </>
  );
};

export default ModelProfile;
