import { useMemo } from "react";
import { 
  useEffect, useState, useEffectEvent,
  useRef, useInsertionEffect, useCallback
} from "react";

const sendMessage = (message) => {
  console.log('Отправлено сообщение: ' + message)
}

function useEffectEvent(fn) {
  const ref = useRef(null);
  useInsertionEffect(() => {
    ref.current = fn;
  }, [fn]);
  return useCallback((...args) => {
    const f = ref.current;
    return f(...args);
  }, []);
}

const serverUrl = 'https://localhost: 1234'

const ChatRoom = ({ roomId, theme, url, numberOfItems }) => { 
  const [message, setMessage] = useState('');


  // const memoizedSomeData = useMemo(() => bigArray.map(...), [bigArray]);

  // const doSomethingMemo = useCallback(() => {
  //   doSomething(someArg)
  // }, [someArg])




  const onConnected = useEffectEvent(() => {
    showNotification('Connected!', theme);
  });

  const handlerSendClick = () => {
    sendMessage(message)
  } // мы уверены, что функция вызовется только в ответ на действие юзера

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connection', () => {
      onConnected();
    })
    connection.connect();
    return () => {
      connection.disconnect();
    }
  }, [roomId]) // мы уверены что синхронизация произойдет только при изменении roomId

  const onVisit = useEffectEvent((pageUrl) => {
    logVisit(pageUrl, numberOfItems)
  });

  useEffect(() => {
    onVisit(url)
  }, [url])

  // компонент должен автоматически подключатся к чату 
  // кнопка отправить при нажатии пользователя отправляет сообщение в чат (event handler)
  // главный вопрос почему? (из-за чего?) этот код должен выполниться

  return (
    <>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handlerSendClick}>отправить</button>
    </>
  )
}

export default ChatRoom;



