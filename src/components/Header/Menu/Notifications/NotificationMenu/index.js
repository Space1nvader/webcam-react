import React, { useState } from 'react';
import { Tabs, Tab, TabsControls } from 'components/Tabs';
import './index.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import NotificationList from '../NotificationsList';
import { modelErrorsSelector } from '../../../../../redux/selectors/modelErrors';

const NotificationMenu = (props) => {
  const { errors } = useSelector(modelErrorsSelector);
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
      data: errors // changes
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
