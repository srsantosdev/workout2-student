import React from 'react';
import { SocketProvider } from './socket';

const AppProvider: React.FC = ({ children }) => {
  return (
    <SocketProvider>
      {children}
    </SocketProvider>
  )
}

export default AppProvider;