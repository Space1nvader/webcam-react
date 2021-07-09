import React from 'react';
import Papper from 'components/Papper';
import IconButton from 'components/IconButton';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import './index.scss';

const Staus = () => (
  <div className="status">
    <IconButton
      style={{
        backgroundColor: 'var(--red-60)',
        height: 40,
        width: 40,
        boxShadow: ' 0px 2px 4px rgba(156, 43, 35, 0.2), 0px 4px 8px rgba(244, 67, 54, 0.2)'
      }}
    >
      <AddRoundedIcon style={{ fill: '#fff' }} />
    </IconButton>

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
