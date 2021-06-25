import React from 'react';
import Papper from 'components/Papper';
import AddModel from '../AddModel/index';
import './index.scss';

const Staus = () => (
  <div className="status">
    <AddModel />
    <Papper style={{ marginLeft: '24px' }}>
      <div className="status__row">
        <div className="status__total">
          Всего моделей:
          <span className="status__totalValue">40</span>
        </div>
        <div className="status__item status__item--online">
          <span className="status__itemValue">25</span>
          онлайн
        </div>
        <div className="status__item status__item--offline">
          <span className="status__itemValue">15</span>
          онлайн
        </div>
      </div>
    </Papper>
  </div>
);

export default Staus;
