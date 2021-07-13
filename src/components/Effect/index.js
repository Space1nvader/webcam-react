import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import './index.scss';

const Effect = (props) => {
  const { children, value, ...other } = props;
  const useStyles = makeStyles({
    arrowUp: {
      fill: 'var(--green-20)'
    },
    arrowDown: {
      fill: 'var(--red-50)'
    }
  })();
  const setIconFromValue = () => {
    if (value === 'up') {
      return <ArrowDropUpIcon className={useStyles.arrowUp} />;
    }
    return <ArrowDropDownIcon className={useStyles.arrowDown} />;
  };
  return (
    <div className="effect" {...other}>
      {setIconFromValue()}
      <div className="effect__text">{children}</div>
    </div>
  );
};

export default Effect;
