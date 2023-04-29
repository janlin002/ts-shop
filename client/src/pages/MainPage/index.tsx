import React, { lazy } from 'react';

const Header = lazy(() => import('./Header'));
const Voucher = lazy(() => import('./Voucher'));
const Categories = lazy(() => import('./Categories'));

const index = () => (
  <>
    <Header />
    <Voucher />
    <Categories />
  </>
);

export default index;
