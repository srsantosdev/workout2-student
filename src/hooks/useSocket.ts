import { useContext } from "react";
import { SocketContext, SocketContextData } from "../providers/socket";

export function useSocket(): SocketContextData {
  const context = useContext(SocketContext)

  return context;
}