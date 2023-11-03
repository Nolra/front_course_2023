import React from "react";
import GlobalStyle from "./globalStyles";
import Button from "./components/Button";

function App() {
  const mode = 'light'
  const onClick = () => console.log('hello');
  return (
      <div>
        <GlobalStyle />
        <Button mode={mode} onClick={onClick} />
      </div>
  );
}

export default App;
