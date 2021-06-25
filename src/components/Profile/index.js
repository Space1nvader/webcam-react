import React from 'react';
import User from 'components/User';
import './index.scss';

const Profile = (props) => {
  const { children, ...other } = props;
  return (
    <div className="profile" {...other}>
      <User>{children}</User>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 12.9509C3 11.8481 3.896 10.9531 5 10.9531C6.104 10.9531 7 11.8481 7 12.9509C7 14.0537 6.104 14.9487 5 14.9487C3.896 14.9487 3 14.0537 3 12.9509ZM12 10.9531C10.896 10.9531 10 11.8481 10 12.9509C10 14.0537 10.896 14.9487 12 14.9487C13.104 14.9487 14 14.0537 14 12.9509C14 11.8481 13.104 10.9531 12 10.9531ZM19 10.9531C17.896 10.9531 17 11.8481 17 12.9509C17 14.0537 17.896 14.9487 19 14.9487C20.104 14.9487 21 14.0537 21 12.9509C21 11.8481 20.104 10.9531 19 10.9531Z"
          fill="#B4BBE2"
        />
        <mask
          id="mask0"
          maskType="alpha"
          maskUnits="userSpaceOnUse"
          x="3"
          y="10"
          width="18"
          height="5"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 12.9509C3 11.8481 3.896 10.9531 5 10.9531C6.104 10.9531 7 11.8481 7 12.9509C7 14.0537 6.104 14.9487 5 14.9487C3.896 14.9487 3 14.0537 3 12.9509ZM12 10.9531C10.896 10.9531 10 11.8481 10 12.9509C10 14.0537 10.896 14.9487 12 14.9487C13.104 14.9487 14 14.0537 14 12.9509C14 11.8481 13.104 10.9531 12 10.9531ZM19 10.9531C17.896 10.9531 17 11.8481 17 12.9509C17 14.0537 17.896 14.9487 19 14.9487C20.104 14.9487 21 14.0537 21 12.9509C21 11.8481 20.104 10.9531 19 10.9531Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0)" />
      </svg>
    </div>
  );
};

export default Profile;
