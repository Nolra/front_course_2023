import React from "react";
import Button from "../../ui/Button";
import { useState } from "react";

const Toolbar = () => {
  // useState(false) - это инициализация вашего state
  const [ pleerStatus, setPleerStatus ] = useState(false);
  const [ counter, setCounter ] = useState(0);

  const play = () => { 
    console.log("Включили плеер!") 
    setPleerStatus(true);
    setCounter(counter => counter + 1); // триггер рендеринга
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    console.log(counter)
  }
  const stop = () => { 
    console.log("Выключили плеер!") 
    setPleerStatus(false);
    setCounter(counter + 1);
  }




  return (
    <>
      <Button onClickHandler={play}> Play </Button>
      <Button onClickHandler={stop}> Stop </Button>

      <h1>
        {
          pleerStatus 
            ? "Плеер включен"
            : "Плеер выключен"
        }
      </h1>
    </>
  )
}

export default Toolbar;