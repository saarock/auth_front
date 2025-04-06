import React from 'react';
import { Outlet } from 'react-router';
import { Footer, Header } from './components';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

    </>
  )
}

export default Layout