import { useRef, useState } from "react"

const Counter = () => {
  const ref = useRef(0); // { current: 0 }
  const [stateCounter, setStateCounter] = useState(0);

  const clickHandler = () => {
    ref.current = ref.current + 1;
    console.log(ref.current);
  }

  return (
    <>
      <button onClick={clickHandler}>Click me for Ref</button>
      Ref Counter = { ref.current }

      <br/><br/>
      <button onClick={() => setStateCounter(stateCounter+1)}>
        Click me for State
      </button>
      Ref Counter = { stateCounter }
    </>
  ) 
}

export default Counter;