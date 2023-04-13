import React from 'react';

import './Login.css';

function Header() {
  return (
    <div className="header-bar">
      <div className="left-logo-bar">
        <img
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/caa0db1f433c95e56de7964e718648a4.png"
          style={{ height: '80px', paddingBottom: '5px' }}
          alt=""
        />
        <span style={{ fontSize: '24px', marginTop: '20px', marginLeft: '5px' }}>登入</span>
      </div>
      <a
        href="./"
        className="common-a-tag"
      >
        需要幫助？
      </a>
    </div>
  );
}

export default Header;
