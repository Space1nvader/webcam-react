import React, { useState } from 'react';
import { api } from 'api';
import NavCrumbs from 'modules/Breadcrumbs/NavCrubms';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DocsForm from './Components/DocsForm';
import PictureForm from './Components/PictureForm';
import DetailForm from './Components/DataForm';
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
  }
});
const tabNames = [
  {
    key: 'personal',
    title: 'Личные данные',
    icon: <PersonIcon />
  },
  {
    key: 'general',
    title: 'Основные данные',
    icon: <PersonAddIcon />
  },
  {
    key: 'account',
    title: 'Учетные данные',
    icon: <SettingsIcon />
  }
];

const Detail = (props) => {
  const { route, match, ...other } = props;
  const model = api.models[match.params.userId - 1];
  const [isActiveTab, setActiveTab] = useState();
  const handleChangeTabClick = (key) => {
    setActiveTab(key);
  };

  const classes = useStyles();
  return (
    <div className="detail">
      <NavCrumbs route={route} />
      <h4 className="detail__title">{model.user.name}</h4>
      <h6 className="detail__subtitle">Text fields popular combinations</h6>
      <div className="detail__profile">
        <div className="detail__data">
          <PictureForm image={model.user.image} />
          <h5 className="detail__name">
            {model.user.name} / {model.user.nickname}
          </h5>
          <div className="detail__contacts">
            <a href="/" className="email">
              тест @ емейл
            </a>
            <a href="/" className="email">
              номер телефона
            </a>
          </div>
        </div>
      </div>
      <div className="detail__box">
        <div className="detail__tabs">
          {tabNames.map((button) => (
            <Button
              className={`${classes.button} ${
                isActiveTab === button.key ? classes.activeButton : ''
              }`}
              startIcon={button.icon}
              onClick={() => handleChangeTabClick(button.key)}
            >
              {button.title}
            </Button>
          ))}
        </div>
        <div className="detail__frame">
          <DetailForm className='detail__form' />
          <DocsForm className='detail__docs'/>
        </div>
      </div>
    </div>
  );
};

export default Detail;
