import React from 'react';
import { createContext, useContext, useEffect } from 'react';
import { useSocket } from '../hooks/useSocket'
import { AuthContext } from './../auth/AuthContext';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, connectedSocket, disconnectedSocket } = useSocket('http://localhost:8080');
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        if ( auth.logged ) {
            connectedSocket();
        }
    }, [ auth, connectedSocket ]);

    useEffect(() => {
        if ( !auth.logged ) {
            disconnectedSocket();
        }
    }, [ auth, disconnectedSocket ]);

    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}