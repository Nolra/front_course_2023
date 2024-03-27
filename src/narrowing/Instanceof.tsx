import React from 'react';

const Instanceof = () => {

  // object instanceof Foo
  /*
    Проверяет содержится ли Foo.prototype в цепочке прототипов object
    Используем для объектов которые были созданы с помощью ключевого слова new
  */

  const logValue = (value: Date | string) => {
    if (value instanceof Date) {
      console.log(value.getDay())
    } else {
      console.log(value.toLowerCase());
    }
  }

  return (
    <></>
  );
}


export default Instanceof;
