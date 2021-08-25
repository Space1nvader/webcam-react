import React from 'react';
import PersonalForm from './PersonalForm';
import DocsForm from './DocsForm';
import './index.scss';

const PersonalWindow = () => (
  <>
    <PersonalForm className="profileWindow__form" />
    <DocsForm className="profileWindow__docs" />
  </>
);

export default PersonalWindow;
