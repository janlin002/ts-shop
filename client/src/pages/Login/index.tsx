import React, { lazy } from 'react';

const Header = lazy(() => import('./Header'));
const Content = lazy(() => import('./Content'));
const Footer = lazy(() => import('./Footer'));

function Login() {
  console.log('123');
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>

  );
}

export default Login;
