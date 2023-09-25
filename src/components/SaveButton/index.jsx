import React from "react";
import { useOnlineStatus } from "../../helpers/useOnlineStatus";

function SaveButton() {
  const isOnline = useOnlineStatus();

  return (
        <h1>
          {isOnline 
            ? <button onClick={() => { console.log('SAVED!!!') }}>save</button>
            : <button disabled>offline =(</button>
          }
        </h1>
  );
}


export default SaveButton;


