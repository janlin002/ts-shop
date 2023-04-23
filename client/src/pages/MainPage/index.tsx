import React, { lazy } from 'react';

const Header = lazy(() => import('./Header'));
const Voucher = lazy(() => import('./Voucher'));

const index = () => (
  <>
    <Header />
    <Voucher />
  </>
);

export default index;
