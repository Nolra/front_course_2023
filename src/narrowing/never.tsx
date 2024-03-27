import React from 'react';

const Never = () => {

  interface Circle {
    kind: 'circle';
    radius: number;
  }
  interface Square {
    kind: 'square';
    sideLength: number;
  }
  interface Triangle {
    kind: 'triangle';
    sideLength: number;
  }


  type Shape = Circle | Square | Triangle;


  const getArea = (shape: Shape) => {
    switch (shape.kind) {
      case 'circle': return Math.PI * shape.radius ** 2;
      case 'square': return shape.sideLength ** 2;
      // case 'triangle': return shape.sideLength ** 2;
      default:
        const _exhaustiveCheck: never = shape; // error
        return _exhaustiveCheck
    }



  }


  return (
    <></>
  );
}


export default Never;
