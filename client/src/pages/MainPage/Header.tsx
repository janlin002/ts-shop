import React from 'react';
import {
  Input,
} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagramSquare,
  faLine,
} from '@fortawesome/free-brands-svg-icons';

import {
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';

import './Main.css';

function Header() {
  const { Search } = Input;
  const onSearch = () => {
    console.log('123');
  };
  return (
    <>
      <div className="main-user-info-header">
        <div className="main-right">
          <a href="123" className="main-user-info-href">
            賣家中心
          </a>
          <span className="main-user-info-block">|</span>
          <a href="123" className="main-user-info-href">
            下載
          </a>
          <span className="main-user-info-block">|</span>
          <a href="123" className="main-user-info-href">
            追蹤我們
          </a>
          <a href="123" className="main-user-info-icon">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="123" className="main-user-info-icon">
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
          <a href="123" className="main-user-info-icon">
            <FontAwesomeIcon icon={faLine} />
          </a>
        </div>
        <div className="main-right">
          <a href="123" className="main-user-info-href">
            通知總覽
          </a>
          <a href="123" className="main-user-info-href">
            幫助中心
          </a>
          <a href="123" className="main-user-info-href">
            繁體中文
          </a>
          <a href="123" className="main-user">
            <img
              src="https://www.popdaily.com.tw/u/202008/570e56ce-9be2-473f-a5da-8cbe534561b5.jpg"
              alt=""
              className="main-user-info-img"
            />
            <p>Janlin002</p>
          </a>
        </div>
      </div>

      <div className="main-search-bar">
        <img
          src="https://logodix.com/logo/2015036.png"
          alt=""
          style={{ maxHeight: '85px', margin: '10px' }}
        />

        <Search placeholder="請輸入" onSearch={onSearch} style={{ width: '1000px', margin: '10px' }} />
        <div className="main-shopping-cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div className="main-shopping-cart-number">123</div>
      </div>

    </>

  );
}

export default Header;
