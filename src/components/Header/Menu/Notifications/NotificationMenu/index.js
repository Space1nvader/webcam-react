import React, { useState } from 'react';
import { Tabs, Tab, TabsControls } from 'components/Tabs';
import './index.scss';
import clsx from 'clsx';
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
const changes = [
  // {
  //   title: 'Изменение №21233',
  //   text: 'Неверный пароль '
  // },
  // {
  //   title: 'Изменение №0233',
  //   text: 'Верный Логин при регистрации на сайте jasmin.com Верный Логин при регистрации на сайте jasmin.com'
  // },
  // {
  //   title: 'Изменение №0233',
  //   text: 'Верный Логин при регистрации на сайте jasmin.com'
  // }
];

const NotificationMenu = (props) => {
  const [currentTab, setCurrentTab] = useState(0);
  const { open } = props;
  const handleChangeCurrentTab = (index) => {
    setCurrentTab(index);
  };
  const tabs = [
    {
      title: 'Ошибки',
      data: errors
    },
    {
      title: 'Изменения',
      data: changes
    }
  ];

  const tabStyle = {
    color: 'var(--gray-70)'
  };
  return (
    <div className={clsx('notificationMenu', open && 'open')}>
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
              <NotificationList data={tab.data} />
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default NotificationMenu;
