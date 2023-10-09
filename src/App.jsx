import React, { useCallback } from "react";
import "./global.css"
import { decrementByOne, incrementByOne, reset } from "./store/actionCreators";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const counter = useSelector(state => state); // получить данные из стор
  const dispatch = useDispatch(); // диспатчить в стор события

  const increment = useCallback(
    () => dispatch(incrementByOne()), [dispatch]
  );
  const decrement = useCallback(
    () => dispatch(decrementByOne()), [dispatch]
  );
  const resetCounter = useCallback(
    () => dispatch(reset()), [dispatch]
  );

  return (
      <div>
        <Button onClick={increment}> + + + </Button>
        <Button onClick={decrement}> - - - </Button>
        <Button onClick={resetCounter}> RESET </Button>
        <h1>
          {counter}
        </h1>
      </div>
  );
}

const Button = ({onClick, children}) => {
  return <button onClick={onClick}> {children} </button>
}

export default App;
