import React, { useEffect, useState } from 'react';
import useUser from './useUser';
import { socket } from '../socket';

const useSocket = () => {
    const { user } = useUser();
    const [numberOfNotifications, setNumberOfNotifications] = useState(0);
    const [message, setMessage] = useState("");


    useEffect(() => {
        // Ensure user is defined before connecting
        if (user && user._id) {
            console.log('User is available:', user);
            

       try {
     

        // Check if socket is already connected
        if (socket.connected) {
            socket.emit('register', { userId: user._id }); // Register the user
            console.log('Socket is already connected');
            socket.on('notification', ({ totalNotifications }) => {
                console.log(`You have ${totalNotifications} unread notifications`);
                setNumberOfNotifications(totalNotifications);
            });
            socket.on("notification-message", (message) => {
                setMessage(message);
            })
        } else {
            socket.on('connect', () => {
                console.log('Connected to socket server');
                socket.emit('register', { userId: user._id }); // Register the user

                // Notification listener
                socket.on('notification', ({ totalNotifications }) => {
                    console.log(`You have ${totalNotifications} unread notifications`);
                    setNumberOfNotifications(totalNotifications);
                });

                socket.on("notification-message", (message) => {
                    
                    setMessage(message);
                })

            });
        }
       } catch(error) {
        console.log("Something wrong while fetching the number of the notifications");
       }

            // Cleanup socket listeners on unmount or user change
            return () => {
                console.log('Cleaning up socket listeners');
                socket.off('connect');
                socket.off('notification');
            };
        } else {
            console.log('User is not defined');
        }
    }, [user]);

    return { numberOfNotifications, message };
};

export default useSocket;
