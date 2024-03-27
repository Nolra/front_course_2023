import React from 'react';

const In = () => {
  type Fish = {
    swim: () => void
  }
  type Bird = {
    fly: () => void
  }
  type Human = {
    swim?: () => void;
    fly?: () => void;
  }


  const move = (animal: Fish | Bird | Human) => {
    if ('swim' in animal && animal.swim) {
      return animal.swim()
    } else if ('fly' in animal && animal.fly) {
      return animal.fly()
    }
    console.log('Чел который ничего не умеет делать')
  }



  // const move = (animal: Fish | Bird) => {
  //   if ('fly' in animal) {
  //     return animal.fly()
  //   } 
  //   return animal.swim()
  // }

  /*
    'key' in object // сужение к истинной ветке
    object - объединение типов
  */





  return (
    <></>
  );
}


export default In;
