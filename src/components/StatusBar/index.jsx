import React from "react";
import { useOnlineStatus } from "../../helpers/useOnlineStatus";

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? 'Online' : 'Offline'}</h1>
}

export default StatusBar;
