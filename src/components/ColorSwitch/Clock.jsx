import React from "react";

const Clock = ({ time }) => {
  const hours = time.getHours(); // получили сколько времени в часах

  const theme = hours > 18 ? "night" : "day";


  // если бы мы разрабатывали на нативном js
  // if (hours > 18) { // если сейчас ночь добавим класс ночь
  //   document.querySelector("#time").classList.add("night")
  // } else { // иначе добавим класс день
  //   document.querySelector("#time").classList.add("day")
  // }
  // вот так бы мы делали

  return (
    <h1 className={ theme } id="time">
      { time.toLocaleTimeString() }
    </h1>

  )
}

export default Clock;