import React from 'react';
import './index.scss';

const Loader = (props) => {
  const { title = 'загрузка', ...other } = props;
  return <div className="loader" title={title} {...other} />;
};

export default Loader;
