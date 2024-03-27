import React from 'react';

const Narrowing = () => {

  const padLeft = (padding: number | string, input: string): string => {
    if (typeof padding === 'number') { // Сужение типа
      return new Array(padding + 1).join(' ') + input;
    }
    return padding + input;
  }

  // console.log(padLeft(5, 'some'))
  // console.log(padLeft('привет ', 'some'))

  // Присвоения
  // let value = Math.random() < 0.5 ? 10 : 'Hello, world!';  
  // value = 2
  // value = 'dfdf'

  return (
    <></>
  );
}


export default Narrowing;
