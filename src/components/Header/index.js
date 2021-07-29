import React from 'react';
import Logo from 'components/Logo';
import Wrapper from 'components/Wrapper';
import Profile from 'components/Profile';
import RouteButton from 'components/RouteButton';
import Papper from 'components/Papper';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import DonutSmallRoundedIcon from '@material-ui/icons/DonutSmallRounded';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import { Link } from 'react-router-dom';
import UserImage from 'assets/img/user.png';
import './index.scss';

const Header = () => (
  <header className="header">
    <Wrapper>
      <div className="header__box">
        <Link to="/">
          <Logo />
        </Link>
        <div className="header__cell">
          <RouteButton to="/" exact icon={<SupervisorAccountIcon />}>
            Модели
          </RouteButton>
          <RouteButton to="/stats" icon={<DonutSmallRoundedIcon />}>
            Статистика
          </RouteButton>
          <RouteButton to="/options" icon={<TuneRoundedIcon />}>
            Опции
          </RouteButton>
        </div>
        <Papper style={{ borderRadius: '12px' }}>
          <Profile image={UserImage}>FirstStudioPetr</Profile>
        </Papper>
      </div>
    </Wrapper>
  </header>
);

export default Header;
