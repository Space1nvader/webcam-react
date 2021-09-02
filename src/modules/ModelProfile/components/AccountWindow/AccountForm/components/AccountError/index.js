import React from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import IconBtn from 'components/IconBtn';
import { makeStyles } from '@material-ui/core/styles';
import './index.scss';

const useStyles = makeStyles({
  closeBtn: {
    marginRight: -6
  },
  closeIcon: {
    height: 16,
    width: 16
  }
});
const AccountError = (props) => {
  const classes = useStyles();
  const { title, text } = props;
  return (
    <div className="accountError">
      <div className="accountError__header">
        <span className="accountError__title">{title}</span>
        <IconBtn className={classes.closeBtn}>
          <CloseRoundedIcon style={{ fill: 'var(--red-80)' }} className={classes.closeIcon} />
        </IconBtn>
      </div>

      <div className="accountError__text">{text}</div>
    </div>
  );
};

export default AccountError;
