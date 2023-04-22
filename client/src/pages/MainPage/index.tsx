import React, { lazy } from 'react';

const Header = lazy(() => import('./Header'));

const index = () => (
  <Header />
);

export default index;
