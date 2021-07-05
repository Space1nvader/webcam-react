import React from 'react';

const Detail = (props) => {
  const { title, ...other } = props;
  return (
    <div className="detail" {...other}>
      <div className="breadcrums">models . model </div>
      <h4>{title}</h4>
    </div>
  );
};

export default Detail;
