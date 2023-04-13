import React from 'react';

import NormalFooterList from '@components/normalFooterList';

const listData = {
  mainTitle: '客服中心',
  subContent: [
    {
      title: '幫助中心',
      href: 'https://github.com/janlin002',
    },
    {
      title: '幫助中心',
      href: 'https://github.com/janlin002',
    },
    {
      title: '幫助中心',
      href: 'https://github.com/janlin002',
    },
    {
      title: '幫助中心',
      href: 'https://github.com/janlin002',
    },
    {
      title: '幫助中心',
      href: 'https://github.com/janlin002',
    },
    {
      title: '幫助中心',
      href: 'https://github.com/janlin002',
    },
  ],
};

function Footer() {
  return (
    <div className="login-footer-bar">
      <NormalFooterList listData={listData} />
      {/* <NormalFooterList /> */}
    </div>
  );
}

export default Footer;
