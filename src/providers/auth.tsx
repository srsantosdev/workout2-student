import { createContext, useCallback, useState } from "react";
import { useSocket } from "../hooks";
import api from "../services/api";

interface User {
  name: string;
  document: string;
}

export interface AuthContextData  {
  user: User;
  checkIn: (document: string) => Promise<void>
  checkOut: () => void
}

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const { createConnection, disconnectSocket } = useSocket()
  const [user, setUser] = useState<User>({} as User)

  const checkIn = useCallback(async (document: string) => {
    const socketConnection = createConnection();

    const response = await api.post('/students/checkin', { document })
    setUser(response.data)

    if(!socketConnection) {
      return;
    }

    socketConnection.emit('online-student', {
      document,
    })
  }, [createConnection])

  const checkOut = useCallback(() => {
    disconnectSocket()
    setUser({} as User)
  }, [disconnectSocket])

  return (
    <AuthContext.Provider value={{ user, checkIn, checkOut }}>
      {children}
    </AuthContext.Provider>
  )
}