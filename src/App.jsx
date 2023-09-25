import React from "react";
import "./global.css"
import StatusBar from "./components/StatusBar";
import SaveButton from "./components/SaveButton";
import Form from "./components/Form";

function App() {
  return (
      <>
        <StatusBar />
        <SaveButton />
        <Form />
      </>
  );
}


export default App;


