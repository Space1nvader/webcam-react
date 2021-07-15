import React from 'react';
import './index.scss';

const ContactLink = (props) => {
  const { children, className, href, ...other } = props;
  return (
    <a className={`link ${className || ''}`} href={href} {...other}>
      {children}
    </a>
  );
};

export default ContactLink;
