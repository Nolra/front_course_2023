import React from 'react';

const EqualityNarrowing = () => {

  const example = (x: string | number, y: string | boolean) => {
    if (x === y) {
      x.toUpperCase() // ok
      y.toLowerCase() // ok
    }
    // x.toUpperCase() // error
    // y.toLowerCase() // error
  }

  const printAll = (strs: string | string[] | null) => { // if  | null - error
    if (strs !== null) {
      if (typeof strs === 'object') {
        for (const str of strs) { // error
         console.log(str);
        }
      } 
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }


  interface Container {
    value: number | null | undefined
  }
  const multipleValue = (container: Container, factor: number) => {
    if (container.value != null) { // абстрактное равенство
      container.value * factor;
    }
  }

  return (
    <></>
  );
}

/* 
  ===
  !==
  ==
  !=
*/


export default EqualityNarrowing;
