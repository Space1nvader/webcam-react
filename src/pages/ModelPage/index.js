import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModelProfile from 'modules/ModelProfile';
import NavCrumbs from 'modules/Breadcrumbs/NavCrubms';
import { GetModelAction, ResetModelAction } from 'modules/ModelProfile/redux/actions';
import { GetStaticDataAction } from 'redux/actions/staticData';
import { modelSelector } from 'modules/ModelProfile/redux/selectors';
import { ResetTabsAction } from 'redux/actions/modelForm';
import './index.scss';

const ProfilePage = (props) => {
  const { route, match } = props;

  const paramsId = match.params.userId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetStaticDataAction());
    if (paramsId) dispatch(GetModelAction({ id: paramsId }));
    return () => {
      dispatch(ResetModelAction());
      dispatch(ResetTabsAction());
    };
  }, []);
  const { modelData, success } = useSelector(modelSelector);

  if (success && modelData.id !== +paramsId) return <Redirect to={`/models/${modelData.id}`} />;

  return (
    <div className="detail">
      <NavCrumbs route={route} />
      <ModelProfile />
    </div>
  );
};

export default ProfilePage;
