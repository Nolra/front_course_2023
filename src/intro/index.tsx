import React from 'react';

const Intro = () => {
  // синтаксис
  // 1. - типизация переменных
  /*
    const myName = "Alice"; - type "Alice"
    let myName = "Alice"; //  - type string
    let myAge = 15; // - type number
    myAge = 16;
    myName = "Гена";
  */
  
  // 2. - типизация функций
  /*
    1) типизация аргументов функции
      function greet(name: "Alice" | "Bob") {
        console.log("Hello, " + name.toUpperCase() + "!!!" );
      }
      greet("Bob");

    2) типизация возвращаемых значений функции
      type GreetFn = (name: "Alice" | "Bob") => string 
      // описание типа функции (аргументы) => возвратное значение
      const greet: GreetFn = (name) => {
        return "Hello, " + name.toUpperCase() + "!!!";
      }
      const greetResult = greet("Alice");
  */


  // 3. - типизация объектов
  /*
    type Coord = { // как тип
      x: number; 
      y: number; 
    }
    interface Coord2 { // как интерфейс - одно и тоже
      x: number; 
      y: number; 
    }
    function printCoord(coord: Coord | Coord2) {
      console.log("Coord: x:" + coord.x + "; y:" + coord.y + ";")
    }
    printCoord({ x: 5, y: 10 })
  */
  // 3.1 - Опциональные свойства объекта
  /*
  interface NameObjInt {
    firstName: string; 
    lastName?: string;
  }

  function printName(nameObj: NameObjInt) {
    if (nameObj.lastName) {
      console.log(
        'Hello, ' + nameObj.firstName.toUpperCase() + " " + nameObj.lastName.toUpperCase()
      ); 
    } else {
      console.log('Hello, ' + nameObj.firstName.toUpperCase()); 
    }
  }
  */

  // 4. Комбинирование типов
  /*
    type SinteticId = string | number;
    function printId(id: SinteticId) {
      console.log("Your ID is " + id);
    }
    printId(123);
    printId("myId");
  */

  //5. Собственные типы
  /*
    type Human = {
      name: string;
      age: number;
      height: number;
    };

    let firstHuman: Human = {
      height: 180,
      age: 20,
      name: 'Гена'
    }
  */

  //6. Собственные типы + типизирование функций
  // type SinteticId = number | string;
  // type PrintIdFn = (id: SinteticId) => string
  // const printId: PrintIdFn = (id) => String(id)

  //7. Свойства объектов
  /*
    interface Person {
      name: string;
      age?: number; // опциональное свойство
      readonly id: number;
    }
    let person1: Person = {
      name: 'гена',
      id: 123,
    }
    person1.id = 456; // read-only error
  */
  
  // Generic - общие типы
  /*
    Позволяют создавать типы-компоненты, совместимые с большим количеством типов,
    а не только с одним как обычные типы (речь о динамике)
    "Открытые типы", "Высчитываемые"
  */
  /*
    type SomeFnType = <SomeType> (arg: SomeType) => SomeType;
    const someFn: SomeFnType = (arg) => {
      return arg;
    }
    function someFn<SomeType1> (arg: SomeType1): SomeType1 {
      return arg
    }
    someFn(24)
  */

  return (
    <></>
  );
}

/*
  1 - Всё, что угодно - any
  2 - примитивы
    1) string - "Hello, world" // `SomeText and ${someVar}`
    2) number - 42 // 0.222, 0xbeef, 0b0010
    3) boolean - false | true;
  3 - массивы
    1) string[] - ["Hello", "world"]
    2) number[] - [1, 3, 6]
    3) any[] - ["Hello", 42, false]
*/




export default Intro;
