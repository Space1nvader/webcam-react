import React from 'react';
import SystemForm from './SystemForm';
import SystemPapper from './SystemPapper';
import './index.scss';

const SystemWindow = () => (
  <>
    <SystemForm className="systemWindow__form" />
    <SystemPapper className="systemWindow__papper" />
  </>
);

export default SystemWindow;
