import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modelFormTabSelector, modelFormChangedSelector } from 'redux/selectors/modelForm';
import { Tabs } from 'components/Tabs';
import { Tab } from 'components/Tabs/Tab';
import { FormConfirmAction, SetFormTabAction } from 'redux/actions/modelForm';
import { TabsControls } from 'components/Tabs/TabsControls';
import './index.scss';

const ProfileTabs = (props) => {
  const { tabs } = props;
  const dispatch = useDispatch();
  const currentTab = useSelector(modelFormTabSelector);
  const formChanged = useSelector(modelFormChangedSelector);
  const handleChangeTabClick = (index) => {
    if (formChanged) {
      dispatch(FormConfirmAction({ active: true, route: index }));
    } else {
      dispatch(SetFormTabAction(index));
    }
  };
  return (
    <>
      <div className="profileTabs__controls">
        <TabsControls
          tabs={tabs}
          id="profileTabs"
          currentTab={currentTab}
          onChange={handleChangeTabClick}
        />
      </div>
      <div className="profileTabs__frame">
        <Tabs activeTab={currentTab}>
          {tabs.map((tab, index) => (
            <Tab key={tab.title} value={currentTab} index={index}>
              {tab.component}
            </Tab>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default ProfileTabs;
