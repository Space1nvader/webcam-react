import React from 'react';
import { api } from 'api';
import NavCrumbs from 'modules/Breadcrumbs/NavCrubms';
import UserPhoto from 'components/UserPhoto';
import './index.scss';

const Detail = (props) => {
  const { route, match, ...other } = props;
  const model = api.models[match.params.userId - 1];
  return (
    <div className="detail">
      <NavCrumbs route={route} />
      <h4 className="detail__title">{model.user.name}</h4>
      <h6 className="detail__subtitle">Text fields popular combinations</h6>
      <div className="detail__profile">
        <div className="detail__data">
          <form action="" className="pictureForm">
            <UserPhoto image={model.user.image} />
          </form>
          <h5 className="detail__name">
            {model.user.name} / {model.user.nickname}
          </h5>
          <div className="detail__contacts">
            <a href="/" className="email">
              тест @ емейл
            </a>
            <a href="/" className="email">
              номер телефона
            </a>
          </div>
        </div>
        <div className="detail__tabs" />
        <div className="detail__frame" />
      </div>
    </div>
  );
};

export default Detail;
