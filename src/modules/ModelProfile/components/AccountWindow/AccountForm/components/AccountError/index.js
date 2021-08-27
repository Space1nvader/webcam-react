import React from 'react';
import './index.scss';

const AccountError = (error = '') => (
  <div className="accountError">
    <span className="accountError__title">Ошибка №21233</span>
    <div className="accountError__text">
      <p>Неверный пароль при регистрации на сайте jasmin.com</p>
    </div>
  </div>
);

export default AccountError;
