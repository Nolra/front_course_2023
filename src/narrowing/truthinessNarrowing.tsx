import React from 'react';

const TruthinessNarrowing = () => {

  const getUserOnlineMessage = (numUsersOnline: number) => {
    if (numUsersOnline) {
      return `В сети ${numUsersOnline} челов`
    }
    return `Никого нет`
  }

  console.log(Boolean('hello')) // true
  console.log(!!'world') // true
  

  const printAll = (strs: string | string[] | null) => { // if  | null - error
    if (strs && typeof strs === 'object') {
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
}


export default TruthinessNarrowing;
