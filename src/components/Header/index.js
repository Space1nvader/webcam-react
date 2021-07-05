import React from 'react';
import Logo from 'components/Logo';
import Wrapper from 'components/Wrapper';
import Profile from 'components/Profile';
import LinkButton from 'components/LinkButton';
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
          <LinkButton icon={<SupervisorAccountIcon />}>Модели</LinkButton>
          <LinkButton active icon={<DonutSmallRoundedIcon />}>
            Статистика
          </LinkButton>
          <LinkButton icon={<TuneRoundedIcon />}>Опции</LinkButton>
        </div>
        <Papper style={{ borderRadius: '12px' }}>
          <Profile image={UserImage}>FirstStudioPetr</Profile>
        </Papper>
      </div>
    </Wrapper>
  </header>
);

export default Header;
