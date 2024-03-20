import React from 'react';
import Intro from './intro';
import Types_Ints from './intro/types_ints';
import Types_Checks from './intro/types_checks';
import Types_Assertions from './intro/types_assertions';
import Types_Array from './intro/types_array';
import Enum from './intro/enum';

const App = () => {
  return (
    <>
      <div>
        <h1>APP</h1>
        <SimpleComponent 
          title={'Строка123'}
          box={5}
          list={["Hello", 1, 4, 6]}
        />
      </div>

      {/* Начало основ TS */}
      <Intro />
      {/* Типы и Интерфейсы */}
      <Types_Ints />
      {/* Проверки типов */}
      <Types_Checks />
      {/* Тип assertions */}
      <Types_Assertions />
      {/* Массивы */}
      <Types_Array />
      {/* Перечисления */}
      <Enum />

    </>
  );
}

interface SimpleComponentProps {
  title: string, 
  box: number, 
  list: (string | number)[]
} 

const SimpleComponent = (
  { title, box, list }: SimpleComponentProps
) => {
  return (
    <div>
      { title }: { box } <br/>
      { list[0] }{ list[1] }{ list[2] }{ list[3] }
    </div>
  )
}


export default App;
