import React, { lazy } from 'react';

const Header = lazy(() => import('./Header/Header'));
const Discount = lazy(() => import('./Discount/Discount'));
const Categories = lazy(() => import('./Categories/Categories'));

const index = () => (
  <>
    <Header />
    <Discount />
    <Categories />
  </>
);

export default index;
