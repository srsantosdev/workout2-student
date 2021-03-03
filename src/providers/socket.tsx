import React, { createContext, useCallback, useState } from "react";
import { connect, Socket } from "socket.io-client";

type SocketType = typeof Socket;

export interface SocketContextData {
  connection: SocketType | null;
  createConnection: () => SocketType
  disconnectSocket: () => void
}

export const SocketContext = createContext({} as SocketContextData)

export const SocketProvider: React.FC = ({ children }) => {
  const [connection, setConnection] = useState<SocketType | null>(null)

  const createConnection = useCallback(() => {
    const socketInstance = connect(String(process.env.REACT_APP_SOCKET_URL), { 
      path: '/socket',
    })

    setConnection(socketInstance)

    return socketInstance;
  }, [])

  const disconnectSocket = useCallback(() => {
    if(!connection){
      return;
    }

    connection.disconnect()
  }, [connection])

  return (
    <SocketContext.Provider value={{
      connection,
      createConnection,
      disconnectSocket,
    }}>
      {children}
    </SocketContext.Provider>
  )
}
