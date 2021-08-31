import React from 'react';

export const Tabs = ({ children, activeTab }) => {
  const renderTab = children.filter((el) => el.props.index === activeTab);
  return <>{renderTab}</>;
};
