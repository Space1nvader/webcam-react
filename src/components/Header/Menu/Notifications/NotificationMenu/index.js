import React, { useState } from 'react';
import { Tabs, Tab, TabsControls } from 'components/Tabs';
import './index.scss';
import NotificationList from '../NotificationsList';

const errors = [
  {
    title: 'Ошибка №21233',
    text: 'Неверный пароль при регистрации на сайте jasmin.com'
  },
  {
    title: 'Ошибка №0233',
    text: 'Верный Логин при регистрации на сайте jasmin.com'
  }
];

const NotificationMenu = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleChangeCurrentTab = (index) => {
    setCurrentTab(index);
  };
  const tabs = [
    {
      title: 'Ошибки',
      component: <NotificationList data={errors} />
    },
    {
      title: 'данные',
      component: <NotificationList data={errors} />
    }
  ];

  const tabStyle = {
    color: 'var(--gray-70)'
  };
  return (
    <div className="notificationMenu">
      <div className="notificationMenu__controls">
        <TabsControls
          style={tabStyle}
          tabs={tabs}
          id="notification"
          currentTab={currentTab}
          onChange={handleChangeCurrentTab}
        />
      </div>
      <div className="notificationMenu__body">
        <Tabs activeTab={currentTab}>
          {tabs.map((tab, index) => (
            <Tab key={tab.title} value={currentTab} index={index}>
              {tab.component}
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default NotificationMenu;
