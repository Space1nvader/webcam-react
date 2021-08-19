import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { formChangedSelector } from 'redux/selectors/formChanged';
import { Tabs } from 'components/Tabs';
import { Tab } from 'components/Tabs/Tab';
import { Button } from '@material-ui/core';
import ConfirmPopup from 'components/СonfirmPopup';
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
  const [modalOpen, setModalOpen] = useState(false);
  const { formChanged } = useSelector(formChangedSelector);
  const handleModalClose = () => setModalOpen(false);
  const handleChangeTabClick = (index) => () => {
    if (formChanged) {
      setModalOpen(true);
    } else setActiveTab(index);
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
      <ConfirmPopup
        style={{ width: 480 }}
        title="Вы уверены что хотите удалить модель?"
        open={modalOpen}
        onClose={handleModalClose}
      >
        <Button
          color="secondary"
          // onClick={handleConfimClick}
          type="submit"
          className={classes.button}
          variant="contained"
        >
          сохранить
        </Button>
        <Button className={classes.button} onClick={handleModalClose} variant="contained">
          отменить
        </Button>
      </ConfirmPopup>
    </>
  );
};

export default ProfileTabs;
