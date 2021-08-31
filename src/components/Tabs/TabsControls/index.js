import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  controls: {
    minHeight: 20
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 30px 0 0',
    borderRadius: 2,
    padding: '10px 14px',
    minHeight: 10,
    fontWeight: 700,
    fontSize: 14,
    textTransform: 'none',
    '& .MuiTab-wrapper': {
      alignItems: 'center',
      flexDirection: 'row',
      '& > *:first-child': {
        marginRight: 12,
        marginBottom: 0
      }
    }
  }
});

export const TabsControls = ({ currentTab, tabs, onChange }) => {
  const classes = useStyles();
  return (
    <MaterialTabs
      value={currentTab}
      indicatorColor="secondary"
      textColor="primary"
      onChange={(e, value) => onChange(value)}
      className={classes.controls}
    >
      {tabs.map((tab) => (
        <Tab className={classes.tab} label={tab.title} icon={tab.icon} />
      ))}
    </MaterialTabs>
  );
};
