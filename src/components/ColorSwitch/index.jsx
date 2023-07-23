import React from "react";
import Clock from "./Clock";

const ColorSwitch = () => {
  const time = new Date();
  return <Clock time={time}/>
}

export default ColorSwitch;