import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ModelProfile from 'modules/ModelProfile';
import NavCrumbs from 'modules/Breadcrumbs/NavCrubms';
import { profileSelector } from 'modules/ModelProfile/redux/selectors';
import { GetProfileDataAction, ResetAction } from 'modules/ModelProfile/redux/actions';
import './index.scss';

const ProfilePage = (props) => {
  const { route, match } = props;
  const modelId = { id: match.params.userId };
  const model = useSelector(profileSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProfileDataAction(modelId));

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
