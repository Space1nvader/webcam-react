import React from 'react';
import { Tab } from './Tab';
import { TabsControls } from './TabsControls';

const Tabs = (props) => {
  const { children, activeTab, ...other } = props;
  const renderTab = children.filter((el) => el.props.index === activeTab);
  return <>{renderTab}</>;
};

export { Tabs, Tab, TabsControls };
