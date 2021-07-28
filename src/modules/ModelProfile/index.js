import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import { Tabs } from 'components/Tabs';
import { Tab } from 'components/Tabs/Tab';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { profileSelector } from 'modules/ModelProfile/redux/selectors';
import PersonalForm from './components/PersonalForm';
import DocsForm from './components/DocsForm';
import MainDataForm from './components/MainDataForm';
import DetailData from './components/DetailData';
import PictureForm from './components/PictureForm';
import './index.scss';

const useStyles = makeStyles({
  button: {
    color: 'var(--gray-50)',
    textTransform: 'none',
    marginRight: 40,
    fontWeight: 700
  },
  activeButton: {
    color: 'var(--blue-100)'
  },
  removeBtn: {
    backgroundColor: 'var(--red-5)',
    color: 'var(--red-60)',
    width: '100%',
    borderRadius: 36,
    padding: 14,
    boxSizing: 'border-box',
    fontWeight: 700,
    '&:hover': {
      backgroundColor: 'var(--red-50)',
      color: '#fff'
    }
  }
});
const docs = [
  { name: 'Паспорт лицевая сторона Admina.pdf', size: '245 kb' },
  { name: 'Agnes_Fisher.doc ', size: '255 kb' }
];

const modelProfileTabs = [
  {
    key: 'personal',
    title: 'Личные данные',
    icon: <PersonIcon />,
    component: (
      <>
        <PersonalForm className="modelProfile__form" />
        <DocsForm docs={docs} className="modelProfile__docs" />
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
    component: <DocsForm docs={docs} className="modelProfile__docs" />
  }
];
const ModelProfile = () => {
  const model = useSelector(profileSelector);
  const [activeTab, setActiveTab] = useState(0);
  const handleChangeTabClick = (index) => () => {
    setActiveTab(index);
  };
  const classes = useStyles();
  return (
    <>
      <h4 className="modelProfile__title">{model ? model.name : 'Данные модели'}</h4>
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
          <div className="modelProfile__tabs">
            {modelProfileTabs.map((button, index) => (
              <Button
                key={button.key}
                className={clsx(classes.button, activeTab === index && classes.activeButton)}
                startIcon={button.icon}
                onClick={handleChangeTabClick(index)}
              >
                {button.title}
              </Button>
            ))}
          </div>
          <div className="modelProfile__frame">
            <Tabs activeTab={activeTab}>
              {modelProfileTabs.map((tab, index) => (
                <Tab key={tab.title} index={index}>
                  {tab.component}
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModelProfile;
