import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import { Footer, Header } from './components';
import { toast, ToastContainer } from 'react-toastify';
import { socket } from './socket';
import useUser from './hooks/useUser';
import useSocket from './hooks/useSocket';

const Layout = () => {

  const { user } = useUser();
  const { message} = useSocket();

  useEffect(() => {
    (async () => {
      const { saarock } = await import("https://cdn.jsdelivr.net/gh/saarock/saarock.js@main/dist/index.js");
      
      saarock.backToTop({
        backColor: "blue",
      });
    })();
  }, []);



  useEffect(() => {
    if (message) {
   toast.warning(message);
    }
   
  }, [message]);


  useEffect(() => {

    if (user && user._id) {
      socket.on('connect', () => {
        console.log('Connected to socket server');
        socket.emit('register', { userId: user._id }); // Emit an event to register the user with their ID
      });
    }

    return () => {
      socket.off('connect'); // Clean up the event listener on component unmount
      socket.off('register'); // Clean up the event listener on component unmount
    }
  }, [user]);


  return (
    <>
      <Header />
      <ToastContainer />
      <main style={{position: "relative"}}>
        <Outlet />
      </main>
      <Footer />

    </>
  )
}

export default Layout