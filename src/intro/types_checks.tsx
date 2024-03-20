import React from 'react';

const Types_Checks = () => {

  // typeof - ограниченный список js базовых типов
  /*
    let str: string = 'Hello, world!';
    if (typeof str === 'number') {
      console.log(`STR is number`)
    } else {
      console.log(`STR isnt number`)
    }
  */
  // instanceof - с любыми TS типами, включая кастомные
  /*
    class Human {
      name: string;
      constructor(data: string) {
        this.name = data;
      }
    };
    let human = new Human('Гена'); // { name: string }
    if (human instanceof Human) {
      console.log(`${human.name} - чел`)
    }
  */


  return (
    <></>
  );
}





export default Types_Checks;
