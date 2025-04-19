import React from 'react';
import { Outlet } from 'react-router';
import { Footer, Header } from './components';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <main>
        <Outlet />
      </main>
      <Footer />

    </>
  )
}

export default Layout