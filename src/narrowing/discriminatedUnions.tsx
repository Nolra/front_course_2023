import React from 'react';

const DiscriminatedUnions = () => {

  interface Circle {
    kind: 'circle';
    radius: number;
  }
  interface Square {
    kind: 'square';
    sideLength: number;
  }

  type Shape = Circle | Square;




  const getArea = (shape: Shape) => {
    if (shape.kind === 'circle') {
      return Math.PI * shape.radius ** 2
    } else {
      return shape.sideLength ** 2
    }
  }


  return (
    <></>
  );
}


export default DiscriminatedUnions;
