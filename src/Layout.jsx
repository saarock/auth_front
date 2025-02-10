import React from 'react';
import { Outlet } from 'react-router';
import { Footer, Header } from './components';

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    
    </>
  )
}

export default Layout