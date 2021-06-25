import React from 'react';
import './index.scss';

const AddModel = (props) => {
  const { ...other } = props;
  return <button type="button" className="addModel" {...other} />;
};

export default AddModel;
