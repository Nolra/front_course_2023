import React from 'react';

const Typeof = () => {

  const printAll = (strs: string | string[]) => { // if  | null - error
    if (typeof strs === 'object') {
      for (const str of strs) { // error
       console.log(str);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }

  return (
    <></>
  );

  /*
    typeof someVar === ''

    boolean
    number
    object
    string
    undefined
    function

    bigint
    symbol
  */


}


export default Typeof;
