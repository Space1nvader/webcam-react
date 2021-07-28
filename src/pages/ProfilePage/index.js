import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ModelProfile from 'modules/ModelProfile';
import NavCrumbs from 'modules/Breadcrumbs/NavCrubms';
import { GetProfileDataAction, ResetAction } from 'modules/ModelProfile/redux/actions';
import './index.scss';

const ProfilePage = (props) => {
  const { route, match } = props;
  const modelId = { id: match.params.userId };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProfileDataAction(modelId));
    // dispatch(GetProfileDataAction(modelId));

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
