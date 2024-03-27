import React from 'react';

const Predicates = () => {
  type Fish = {
    swim: () => void
  }
  type Bird = {
    fly: () => void
  }

  const isFish = (pet: Fish | Bird): pet is Fish => {
    return (pet as Fish).swim !== undefined
  }

  // pet is Fish - предикат типа
  // X is Type

  const move = (animal: Fish | Bird) => {
    if (isFish(animal)) {
      animal.swim()
    } else {
      animal.fly()
    }
  }





  return (
    <></>
  );
}


export default Predicates;
