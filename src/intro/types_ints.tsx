import React from 'react';

const Types_Ints = () => {
  // Типы и Интерфейсы
  // type - псевдонимы типов
  /*
    type SinteticId = string | number;
    function printId(id: SinteticId) {
      console.log("Your ID is " + id);
    }
  */
  /*
    type Point = {
      x: number;
      y: number;
    }
    function printCoord(point: Point) {
      console.log("Point coord: " + point.x + " " + point.y)
    }
    printCoord({ x: 123, y: 456})
  */

  // interface - интерфейсы
  /*
    interface Point {
      x: number;
      y: number;
    }
    function printCoord(point: Point) {
      console.log("Point coord: " + point.x + " " + point.y)
    }
    printCoord({ x: 123, y: 456})
  */
  
  // Различия type and interface
  // расширение (extends) интерфейсов
  /*
    interface Animal {
      name: string
    }
    interface Bear extends Animal {
      honey: boolean
    }
    type GetBearFn = (name: string, isHoney: boolean) => Bear
    const getBear: GetBearFn = (name, isHoney) => ({
      name,
      honey: isHoney
    })
    const bear = getBear('Гена', true);
  */
 
  // расширение type
  /*
    type Animal = {
      name: string
    }
    type Bear = Animal & {
      honey: boolean
    }
    type GetBearFn = (name: string, isHoney: boolean) => Bear
    const getBear: GetBearFn = (name, isHoney) => ({
      name,
      honey: isHoney
    })
    const bear = getBear('Гена', true);
  */
  
  // серьезное отличие type vs interface
  /*
    type Window = { title: string };
    type Window = { box: number }; // ошибка, изменить нельзя
    interface Window { title: string };
    interface Window { box: string }; // Window {title: string; box: string;}
  */
  



  return (
    <></>
  );
}

/*

*/




export default Types_Ints;
