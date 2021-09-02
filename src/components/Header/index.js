import React from 'react';
import Logo from 'components/Logo';
import Wrapper from 'components/Wrapper';
import Profile from 'components/Profile';
import RouteButton from 'components/RouteButton';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import DonutSmallRoundedIcon from '@material-ui/icons/DonutSmallRounded';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import { Link } from 'react-router-dom';
import UserImage from 'assets/img/user.png';
import Menu from './Menu';
import './index.scss';

const Header = () => (
  <header className="header">
    <Wrapper>
      <div className="header__box">
        <Link to="/">
          <Logo />
        </Link>
        <div className="header__cell">
          <RouteButton to="/models" exact icon={<SupervisorAccountIcon />}>
            Модели
          </RouteButton>
          <RouteButton to="/stats" icon={<DonutSmallRoundedIcon />}>
            Статистика
          </RouteButton>
          <RouteButton to="/options" icon={<TuneRoundedIcon />}>
            Опции
          </RouteButton>
        </div>
        <div className="header__controls">
          <Menu className="header__menu" />
          <div className="header__profile">
            <Profile image={UserImage}>FirstStudioPetr</Profile>
          </div>
        </div>
      </div>
    </Wrapper>
  </header>
);

export default Header;
