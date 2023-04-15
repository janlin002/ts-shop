import React, { useState } from 'react';

import NoFeatureModal from '@components/noFeatureModal';

import './Login.css';

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="header-bar">
        <div className="left-logo-bar">
          <img
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/caa0db1f433c95e56de7964e718648a4.png"
            style={{ height: '80px', paddingBottom: '5px' }}
            alt=""
          />
          <span style={{ fontSize: '24px', marginTop: '20px', marginLeft: '5px' }}>登入</span>
        </div>
        <div
          role="button"
          className="common-a-tag"
          onClick={() => setModalOpen(true)}
          onKeyDown={() => null}
          tabIndex={0}
        >
          需要幫助？
        </div>
      </div>
      <NoFeatureModal
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
      />
    </>
  );
}

export default Header;
