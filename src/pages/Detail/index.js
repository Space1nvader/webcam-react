import React, { useState } from 'react';
import { api } from 'api';
import NavCrumbs from 'modules/Breadcrumbs/NavCrubms';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs } from 'components/Tabs';
import { Tab } from 'components/Tabs/Tab';
import PersonalForm from './Components/PersonalForm';
import DocsForm from './Components/DocsForm';
import PictureForm from './Components/PictureForm';
import DetailData from './Components/DetailData';
import MainDataForm from './Components/MainDataForm';
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

const detailTabs = [
  {
    key: 'personal',
    title: 'Личные данные',
    icon: <PersonIcon />,
    component: (
      <>
        <PersonalForm className="detail__form" />
        <DocsForm docs={docs} className="detail__docs" />
      </>
    )
  },
  {
    key: 'general',
    title: 'Основные данные',
    icon: <PersonAddIcon />,
    component: <MainDataForm className="detail__form" />
  },
  {
    key: 'account',
    title: 'Учетные данные',
    icon: <SettingsIcon />,
    component: <DocsForm docs={docs} className="detail__docs" />
  }
];

const Detail = (props) => {
  const { route, match } = props;
  const model = api.models[match.params.userId - 1];
  const [activeTab, setActiveTab] = useState(0);
  const handleChangeTabClick = (index) => () => {
    setActiveTab(index);
  };
  const classes = useStyles();
  return (
    <div className="detail">
      <NavCrumbs route={route} />
      <h4 className="detail__title">{model ? model.user.name : 'Данные модели'}</h4>
      <h6 className="detail__subtitle">Text fields popular combinations</h6>
      <div className="detail__profile">
        <div className="detail__data">
          <PictureForm
            style={{ marginBottom: 10 }}
            name="profile_picture"
            initialValue={{ profile_picture: model ? model.user.image : '' }}
          />
          {model && <DetailData data={model} />}
        </div>
        <div className="detail__box">
          <div className="detail__tabs">
            {detailTabs.map((button, index) => (
              <Button
                key={button.key}
                className={`${classes.button} ${activeTab === index ? classes.activeButton : ''}`}
                startIcon={button.icon}
                onClick={handleChangeTabClick(index)}
              >
                {button.title}
              </Button>
            ))}
          </div>
          <div className="detail__frame">
            <Tabs activeTab={activeTab}>
              {detailTabs.map((tab, index) => (
                <Tab key={tab.title} index={index}>
                  {tab.component}
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
