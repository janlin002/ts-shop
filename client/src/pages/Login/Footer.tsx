import React from 'react';

import NormalFooterList from '@components/normalFooterList';

import FooterData from '@asset/data/loginFooter';

function Footer() {
  return (
    <NormalFooterList
      FooterData={FooterData}
    />

  );
}

export default Footer;
