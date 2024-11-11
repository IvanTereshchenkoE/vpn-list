import React from "react";

import "./Header.scss";

import logo from "accets/png/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="menu-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="4" width="24" height="2" fill="#00FF00" />
            <rect y="11" width="24" height="2" fill="#00FF00" />
            <rect y="18" width="24" height="2" fill="#00FF00" />
          </svg>
        </div>
        <img className="logo" src={logo} width={96} height={32} />
        <div className="airplane-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 2L11 13"
              stroke="#00FF00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 2L15 22L11 13L2 9L22 2Z"
              stroke="#00FF00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="instruction-container">
      <button className="instruction-button">ИНСТРУКЦИЯ</button>
        <p className="instruction-text">ПО НАСТРОЙКЕ VPN</p>
      </div>
    </header>
  );
};

export { Header };
