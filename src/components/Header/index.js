import React from 'react';
import Logo from 'components/Logo';
import Wrapper from 'components/Wrapper';
import Profile from 'components/Profile';
import Papper from 'components/Papper';
import './index.scss';

const Header = () => (
  <header className="header">
    <Wrapper>
      <div className="header__box">
        <Logo />
        <Papper style={{ borderRadius: '12px' }}>
          <Profile>FirstStudioPetr</Profile>
        </Papper>
      </div>
    </Wrapper>
  </header>
);

export default Header;
