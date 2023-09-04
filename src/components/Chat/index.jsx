import { useEffect, useRef } from "react";

const createConnection = () => {
  return {
    connect: () => console.log('Connecting...'),
    disconnect: () => console.log('Disconnected...'),
  }
}


const Chat = () => {
  const connection = createConnection();

  useEffect(() => {
    connection.connect();
    return () => connection.disconnect(); // отписка при размаунтинге
  }, []);



  // компонент это лунтик
  // 1. я родился - эффект запустился первый раз
  // 2. живет - если триггерятся зависимости (меняются) - запуск или если зависимостей нет, но происходит ререндер
  // 3. умирает - место где вызовется отписка в эффекте (его return)
  // 4. опять рожается - эффект запустился первый раз

  // useEffect(
  //   () => {
  //     function handleScroll(e) {
  //       console.log(window.scrollX, window.scrollY,)
  //     }
  //     window.addEventListener('scroll', handleScroll)
  //     return () => window.removeEventListener('scroll', handleScroll)
  //   },
  //   []
  // )


  // const node = useRef(null);

  // useEffect(() => {
  //   const nodeH1 = node.current;
  //   nodeH1.style.transition = 'all 1s';
  //   nodeH1.style.opacity = '1';
  //   nodeH1.style.opacity = '0.5';

  //   return () => { 
  //     console.log(nodeH1.style.opacity);
  //     nodeH1.style.opacity = '1';
  //     console.log(nodeH1.style.opacity);
  //   } // reset
  // }, [])

  // const userId = 1; // некий пропс
  // function fetchTodos(userId) {
  //   // запрашивает с сервера тудушки
  // }
  // useEffect(() => {
  //   let ignore = false;
  //   async function startFetching() {
  //     const todoData = await fetchTodos(userId);
  //   }
  //   if (!ignore) setTodos(todoData);
  //   return () => ignore = true;
  // }, [userId])
  

  return (
    <>
      {/* <h1 ref={node}>Welcome to chat!</h1> */}
      <h1>Welcome to chat!</h1>
      <h1>Welcome to chat!</h1>
      <h1>Welcome to chat!</h1>
      <h1>Welcome to chat!</h1>
      <h1>Welcome to chat!</h1>
      <h1>Welcome to chat!</h1>
      <h1>Welcome to chat!</h1>
      <h1>Welcome to chat!</h1>
      <h1>Welcome to chat!</h1>
      <h1>Welcome to chat!</h1>
      <h1>Welcome to chat!</h1>
      <h1>Welcome to chat!</h1>
      <h1>Welcome to chat!</h1>
      <h1>Welcome to chat!</h1>
      <h1>Welcome to chat!</h1>
      <h1>Welcome to chat!</h1>
      <h1>Welcome to chat!</h1>
    </>
  )
}

export default Chat;