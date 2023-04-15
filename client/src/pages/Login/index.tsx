import React, { lazy } from 'react';

const Header = lazy(() => import('./Header'));
const Content = lazy(() => import('./Content'));
const Footer = lazy(() => import('./Footer'));

function Login() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>

  );
}

export default Login;
