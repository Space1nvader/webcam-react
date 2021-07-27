import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModelProfile from 'modules/ModelProfile';
import NavCrumbs from 'modules/Breadcrumbs/NavCrubms';
import { profileSelector } from 'modules/ModelProfile/redux/selectors';
import { GetProfileDataAction, ResetAction } from 'modules/ModelProfile/redux/actions';
import './index.scss';

const ProfilePage = (props) => {
  const { route, match } = props;
  const model = useSelector(profileSelector);
  const modelId = match.params.userId;
  console.log(',asd', match.params.userId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProfileDataAction(1));

    return () => {
      dispatch(ResetAction());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="detail">
      <NavCrumbs route={route} />
      <ModelProfile model={model} />
    </div>
  );
};

export default ProfilePage;
