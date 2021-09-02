import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTabs from '@material-ui/core/Tabs';
import TabButton from '@material-ui/core/Tab';

const useStyles = makeStyles({
  controls: {
    minHeight: 20
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 30px 0 0',
    borderRadius: 2,
    color: 'var(--gray-50)',
    padding: '10px 16px',
    minHeight: 10,
    minWidth: 30,
    width: 'min-content',
    fontWeight: 700,
    fontSize: 14,
    textTransform: 'none',
    '&[disabled]': {
      cursor: 'not-allowed',
      pointerEvents: 'auto',
      opacity: 0.4
    },
    '&.Mui-selected': {
      color: 'var(--gray-50)'
    },
    '& .MuiTab-wrapper': {
      alignItems: 'center',
      whiteSpace: 'nowrap',
      flexDirection: 'row',
      '& > *:first-child': {
        marginRight: 12,
        marginBottom: 0
      }
    }
  }
});

export const TabsControls = (props) => {
  const { currentTab, id, tabs, onChange, ...other } = props;
  const classes = useStyles();
  return (
    <MaterialTabs
      value={currentTab}
      indicatorColor="secondary"
      textColor="primary"
      onChange={(e, value) => onChange(value)}
      className={classes.controls}
    >
      {tabs.map((tab, index) => (
        <TabButton
          {...other}
          // eslint-disable-next-line react/no-array-index-key
          key={`${id}-${index}`}
          className={classes.tab}
          disabled={tab.disabled}
          label={tab.title}
          icon={tab.icon}
        />
      ))}
    </MaterialTabs>
  );
};
