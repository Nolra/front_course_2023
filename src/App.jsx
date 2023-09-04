import React, { useState } from "react";
import "./global.css"
import Video from "./components/Video";
import Chat from "./components/Chat";
import Logger from "./components/Logger";
import NoNeedToEffect from "./components/NoNeedToEffect";

// function App() {
//   const [show, setShow] = useState(false);
//   return (
//       <>
//           <button onClick={() => setShow(!show)}>
//               {show ? 'Unmount' : 'Mount'} the component
//           </button>
//           {show && <hr />}
//           {show && <Logger />}
//       </>
//   );
// }

function App() {
  return (
      <>
        <NoNeedToEffect />
      </>
  );
}


export default App;


