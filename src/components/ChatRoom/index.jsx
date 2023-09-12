import { useState } from "react";
import { useEffect } from "react";

const getServerUrl = (id) => {
  return id === 'general' ? 'https://localhost:1234' : 'https://localhost:3000'
};

const ChatRoom = ({ roomId = 'general' }) => { // roomId = general --> travel --> music
  // const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  const serverUrl = getServerUrl(roomId);
  
  useEffect(() => {
    const createConnection = () => {
      return {
        connect: () => console.log("connecting..."),
        disconnect: () => console.log("disconnected")
      }
    }
    const connection = createConnection(serverUrl, roomId);
    connection.connect(); // 1. эффект начинает синхронизацию
    return () => { // 2. как остановить синхронизацию
      connection.disconnect(); // !!!
    }
  }, [roomId, serverUrl])

  useEffect(() => { // отдельная синхронизация - отдельный эффект
    const logVisit = (chat) => {
      console.log(`chat ${chat} was visited`);
    };    
    logVisit(roomId)
  }, [roomId])




  return (
    <>
      {roomId}  {/* general --> travel */}
    </>
  )
}

export default ChatRoom;