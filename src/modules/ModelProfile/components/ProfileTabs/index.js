import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalFormSelector } from 'redux/selectors/modelForm';
import { Tabs } from 'components/Tabs';
import { Tab } from 'components/Tabs/Tab';
import { Button } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { FormConfirmAction, SetFormTabAction } from 'redux/actions/modelForm';
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
  const dispatch = useDispatch();
  const { currentTab, formChanged } = useSelector(modalFormSelector);
  const handleChangeTabClick = (index) => () => {
    if (formChanged) {
      dispatch(FormConfirmAction({ active: true, route: index }));
    } else {
      dispatch(SetFormTabAction(index));
    }
  };
  const activeClass = (index) => currentTab === index && classes.activeTab;
  return (
    <>
      <div className="profileTabs__controls">
        {tabs.map((button, index) => (
          <Button
            key={button.key}
            className={clsx(classes.tab, activeClass(index))}
            startIcon={button.icon}
            onClick={handleChangeTabClick(index)}
          >
            {button.title}
          </Button>
        ))}
      </div>
      <div className="profileTabs__frame">
        <Tabs activeTab={currentTab}>
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
