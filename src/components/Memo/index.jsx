import React, { useMemo } from "react";

function Memo({todos, tab}) {
  
  // 1 - значение которые мы хотим закэшировать
  // 2 - хук
  // 3 - аргументы - callback вычисляющий значение с RETURN
  // 3 - () => { return 'закешируй меня' }
  // 4 - список зависимостей [dep1, dep2]
  // const cachedValue = useMemo(calculateValueFunction, dependenciesList)

  // этот вид кэширование называется МЕМОИЗАЦИЯ
  // особенный вид кэширования который предпологает сохранение значения МЕЖДУ РЕНДЕРАМИ
  
  
  // const visibleTodos = filterTodos(todos, tab);
  // const visibleTodos = useMemo(
  //   () => filterTodos(todos, tab), 
  //   [todos, tab]
  // );

  // console.time('filter');
  // сonst visibleTodos = filterTodos(todos, tab);
  // console.timeEnd('filter'); // если больше 1ms то нужно мемоизировать
 
  return (
      <>

      </>
  );
}


export default Memo;


