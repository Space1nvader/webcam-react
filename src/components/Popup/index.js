import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring';
import IconBtn from 'components/IconBtn';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    position: 'relative',
    backgroundColor: 'var(--gray-0)',
    boxShadow:
      '0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2)',
    borderRadius: '4px',
    boxSizing: 'border-box',
    padding: '44px 80px'
  },
  title: {
    textAlign: 'center',
    marginBottom: 38,
    color: 'var(--gray-70    )'
  },
  xBtn: {
    position: 'absolute',
    top: 26,
    right: 26
  }
}));

const Fade = React.forwardRef((props, ref) => {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    }
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

export default function ConfirmPopup(props) {
  const { title, children, open, onClose, style } = props;
  const classes = useStyles();

  return ReactDOM.createPortal(
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      className={classes.modal}
      closeAfterTransition
      open={open}
      onClose={onClose}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <div className={classes.paper} style={style}>
          <IconBtn onClick={onClose} className={classes.xBtn}>
            <CloseRoundedIcon />
          </IconBtn>
          {title && <h5 className={classes.title}>{title}</h5>}
          {children}
        </div>
      </Fade>
    </Modal>,
    document.body
  );
}
