import React, { useState } from 'react';
import { Tabs } from 'components/Tabs';
import { Tab } from 'components/Tabs/Tab';
import { Button } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
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

const ProfileTabs = (props) => {
  const classes = useStyles();
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState(0);
  const handleChangeTabClick = (index) => () => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="profileTabs__controls">
        {tabs.map((button, index) => (
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
      <div className="profileTabs__frame">
        <Tabs activeTab={activeTab}>
          {tabs.map((tab, index) => (
            <Tab key={tab.title} index={index}>
              {tab.component}
            </Tab>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default ProfileTabs;
