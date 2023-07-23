import React from "react";
import Gallery from "./components/Gallery";
import ColorSwitch from "./components/ColorSwitch";
import Toolbar from "./components/Toolbar";
import Chat from "./components/Chat";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <Todo />
      <br/><br/><br/><br/>
      <Chat />
      <br/><br/><br/><br/>
      <Toolbar />
      <br/><br/><br/><br/>
      <ColorSwitch />
      <br/><br/><br/><br/>
      <Gallery />
    </div>
  );
}

export default App;
