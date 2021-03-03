import React from 'react';

import { AuthProvider } from './auth';
import { SocketProvider } from './socket';

const AppProvider: React.FC = ({ children }) => {
  return (
    <SocketProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </SocketProvider>
  )
}

export default AppProvider;