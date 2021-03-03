import React, { createContext, useEffect } from "react";
import { connect } from "socket.io-client";

export interface SocketContextData {
}

export const SocketContext = createContext({} as SocketContextData)

export const SocketProvider: React.FC = ({ children }) => {
  connect('http://localhost:9354', { path: '/socket' })

  useEffect(() => {}, [])

  return (
    <SocketContext.Provider value={{}}>
      {children}
    </SocketContext.Provider>
  )
}
