import { useEffect } from "react"

const createConnection = () => {};

const useChatRoom = ({
  serverUrl,
  roomId
}) => {
  useEffect(() => {
    const options = { serverUrl, roomId };
    const connection = createConnection(options);
    connection.connect();
    return () => { connection.disconnect(); }
  }, [serverUrl, roomId])
}

export { useChatRoom };
