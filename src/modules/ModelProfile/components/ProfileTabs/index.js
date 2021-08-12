import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { formChangedSelector } from 'redux/selectors/formChanged';
import { Tabs } from 'components/Tabs';
import { Tab } from 'components/Tabs/Tab';
import { Button } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import './index.scss';

const useStyles = makeStyles({
  button: {
    boxShadow: 'none',
    display: 'block',
    margin: '0 auto 7px',
    fontWeight: 700,
    fontSize: 14,
    padding: 16,
    width: 240
  },
  tab: {
    color: 'var(--gray-50)',
    textTransform: 'none',
    marginRight: 40,
    fontWeight: 700
  },
  activeTab: {
    pointerEvents: 'none',
    color: 'var(--blue-100)'
  }
});

const ProfileTabs = (props) => {
  const classes = useStyles();
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState(0);

  const { formChanged } = useSelector(formChangedSelector);
  const handleChangeTabClick = (index) => () => {
    setActiveTab(index);
    // if (formChanged) {
    //   alert('123');
    // } else setActiveTab(index);
  };

  return (
    <>
      <div className="profileTabs__controls">
        {tabs.map((button, index) => (
          <Button
            key={button.key}
            className={clsx(classes.tab, activeTab === index && classes.activeTab)}
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
