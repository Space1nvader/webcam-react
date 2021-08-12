import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ModelProfile from 'modules/ModelProfile';
import NavCrumbs from 'modules/Breadcrumbs/NavCrubms';
import { GetModelAction, ResetAction } from 'modules/ModelProfile/redux/actions';
import { GetStaticDataAction } from 'redux/actions/staticData';
import './index.scss';

const ProfilePage = (props) => {
  const { route, match } = props;

  const modelId = match.params.userId;
  const dispatch = useDispatch();
  useEffect(() => {
    if (modelId) dispatch(GetModelAction({ id: modelId }));
    dispatch(GetStaticDataAction());
    return () => {
      dispatch(ResetAction());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="detail">
      <NavCrumbs route={route} />
      <ModelProfile />
    </div>
  );
};

export default ProfilePage;
