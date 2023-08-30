import { useRef, useState } from "react"

const Timer = () => {
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const timerRef = useRef(null); // сделали реф для таймера


  const startHandler = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(timerRef.current); // сбросили таймер
    timerRef.current = setInterval( // создали таймер
      () => {setNow(Date.now)},
      100
    )
  }


  const stopHandler = () => {
    clearInterval(timerRef.current); // сбросили таймер
    setStartTime(Date.now());
    setNow(Date.now());
  }

  const timePassed = now - startTime;
  return (
    <>
      <h1>
        Time: { timePassed }
      </h1>
      <button onClick={startHandler}>start</button>
      <button onClick={stopHandler}>stop</button>   
    </>
  ) 
}

export default Timer;