import React from 'react';
import Intro from './intro';
import Types_Ints from './intro/types_ints';
import Types_Checks from './intro/types_checks';
import Types_Assertions from './intro/types_assertions';
import Types_Array from './intro/types_array';
import Enum from './intro/enum';
import Narrowing from './narrowing';
import Typeof from './narrowing/typeof';
import TruthinessNarrowing from './narrowing/truthinessNarrowing';
import EqualityNarrowing from './narrowing/equalityNarrowing';
import In from './narrowing/in';
import Instanceof from './narrowing/Instanceof';
import Predicates from './narrowing/predicates';
import DiscriminatedUnions from './narrowing/discriminatedUnions';
import Never from './narrowing/never';

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

      {/* Сужение типов */}
      <Narrowing />
      {/* typeof */}
      <Typeof />
      {/* Проверка на истинность */}
      <TruthinessNarrowing />
      {/* Проверка на равенство */}
      <EqualityNarrowing />
      {/* Оператор in */}
      <In />
      {/* instanceof */}
      <Instanceof />
      {/* Предикаты типа */}
      <Predicates />
      {/* Исключающие объединения */}
      <DiscriminatedUnions />
      {/* Тип Never */}
      <Never />

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
