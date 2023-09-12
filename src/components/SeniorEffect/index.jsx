// import { useEffect } from "react";

// const serverUrl = 'https://localhost:1234';

// const createConnection = () => {
//   return {
//     connect: () => console.log("connecting..."),
//     disconnect: () => console.log("disconnected")
//   }
// };

// const ChatRoom = ({ roomId }) => {
  
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId])

//   return (
//     <>
    
//     </>
//   )
// }

// export default ChatRoom;




// import { useState } from "react";
// import { useEffect } from "react";

// const post = (path) => {console.log(path)};
// const showNotification = (message) => {console.log(message)};

// const Form = ({ theme }) => {
//   // const [submitted, setSubmitted] = useState(false);
  
//   // useEffect(() => {
//   //   if (submitted) {
//   //     post('/api/register')
//   //     showNotification('Успешная регистрация!', theme)
//   //   }
//   // }, [submitted, theme])

//   function handleSubmit () {
//     post('/api/register')
//     showNotification('Успешная регистрация!', theme)
//   }


//   return (
//     <>
    
//     </>
//   )
// }

// export default Form;





// import { useState } from "react";
// import { useEffect } from "react";

// const ShippingForm = ({ country }) => {
//   const [cities, setCities] = useState(null);
//   const [areas, setAreas] = useState(null);

//   const [city, setCity] = useState(null);

//   useEffect(() => {
//     let ignore = false;
//     fetch(`/api/cities?country=${country}`)
//       .then(response => response.json)
//       .then(json => {
//         if (!ignore) {
//           setCities(json);
//         }
//     })
//     return () => { ignore = true }
//   }, [country]) // синхронизирует состояние cities с country

//   useEffect(() => {
//     let ignore = false;
//     if (city) {
//       fetch(`/api/areas?city=${city}`)
//         .then(response => response.json)
//         .then(json => {
//           if (!ignore) {
//             setAreas(json);
//           }
//       })
//     }
//     return () => { ignore = true }
//   }, [city])  // синхронизирует состояние areas с city





//   return (
//     <>
    
//     </>
//   )
// }

// export default ShippingForm;




// import { useState } from "react";
// import { useEffect } from "react";

// const serverUrl = 'https://localhost:1234';

// const createConnection = () => {
//   return {
//     connect: () => console.log("connecting..."),
//     disconnect: () => console.log("disconnected")
//   }
// };

// const ChatRoom = ({ roomId }) => {
//   const [messages, setMessages] = useState([]);
  
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     connection.on('message', ( prevMessages ) => {
//       setMessages((prevMsg) => [...prevMsg, prevMessages])
//     })
//     return () => connection.disconnect();
//   }, [roomId])

//   return (
//     <>
    
//     </>
//   )
// }

// export default ChatRoom;







// import { useState, useEffect, useRef, useInsertionEffect, useCallback  } from "react";

// const serverUrl = 'https://localhost:1234';

// const createConnection = () => {
//   return {
//     connect: () => console.log("connecting..."),
//     disconnect: () => console.log("disconnected")
//   }
// };

// function useEffectEvent(fn) {
//   const ref = useRef(null);
//   useInsertionEffect(() => {
//     ref.current = fn;
//   }, [fn]);
//   return useCallback((...args) => {
//     const f = ref.current;
//     return f(...args);
//   }, []);
// }


// const ChatRoom = ({ roomId, onReceiveMessage }) => {
//   const [messages, setMessages] = useState([]);
  
//   const onMessage = useEffectEvent(
//     ( prevMessages ) => {
//       onReceiveMessage(prevMessages);
//     }
//   )

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     connection.on('message', ( prevMessages ) => {
//       onMessage(prevMessages);
//     })
//     return () => connection.disconnect();
//   }, [roomId])

//   return (
//     <>
    
//     </>
//   )
// }

// export default ChatRoom;

// const createConnection = () => {
//   return {
//     connect: () => console.log("connecting..."),
//     disconnect: () => console.log("disconnected")
//   }
// };


// // const serverUrl = 'https://localhost:1234';

// const ChatRoom = ({ getOptions }) => {
//   const { roomId, serverUrl } = getOptions();

//   useEffect(() => {
//     const connection = createConnection({roomId, serverUrl});
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId, serverUrl])

//   return (
//     <>
    
//     </>
//   )
// }

// export default ChatRoom;