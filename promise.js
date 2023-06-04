// https://learn.javascript.ru/promise-basics
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://doka.guide/js/promise/


// Промис Promise
// let promise = new Promise(
//     function(resolve, reject) {  // функция-исполнитель (executor)
//       // resolve(value) — если работа завершилась успешно, value - результат
//       // reject(error) — если произошла ошибка, error – объект ошибки
//       resolve('done 123');
//     }
// );


// иллюстрация /images/promise-1.png
// console.log(promise); // state («состояние») - внутреннее свойство
// "pending" («ожидание»)
// "fulfilled" («выполнено успешно») при вызове resolve, 
// "rejected" («выполнено с ошибкой») при вызове reject


// promise.then(
//   result => console.log(result),
//   error => console.log(error)
// ); 

// result («результат») - внутреннее свойство
// вначале undefined, 
// value при вызове resolve(value) 
// error при вызове reject(error)


// **************************************************


// let promise = new Promise(function(resolve, reject) {
//   // эта функция выполнится автоматически, при вызове promise
//   // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
//   setTimeout(() => resolve('done'), 3000);
// });

// promise.then(result => console.log(result));
// console.log("Мне ждать?")

// **************************************************


// Методы: then, catch, finally
// then - обработка результата и ошибки promise
// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve("done!"), 1000);
// });

// // // // resolve запустит первую функцию, переданную в .then
// promise.then(
//   result => console.log(result), // выведет "done!" через одну секунду
//   error => console.log(error) // не будет запущена
// );


// **************************************************


// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// // // // reject запустит вторую функцию, переданную в .then
// promise.then(
//   result => console.log(result, 'result'), // не будет запущена
//   error => console.log(error, 'error') // выведет "Error: Whoops!" спустя одну секунду
// );


// **************************************************


// catch(f) – это сокращённый вариант then(null, f).
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Все клево'), 1000);
// });

// promise
//   .then(result => console.log(result, 'тут result потому что вызвали resolve'))
//   .catch(error => console.log(error, 'тут ошибка потому что reject вызвали')); // выведет "Error: Ошибка!" спустя одну секунду


// **************************************************


// finally аналогичен finally из try..catch
// не имеет аргументов - не обрабатывает результат промиса
// new Promise((resolve, reject) => {
//   /* сделать что-то, что займёт время, и после вызвать resolve/reject */
// })
//   // выполнится, когда промис завершится, независимо от того, успешно или нет
//   .finally(() => остановить индикатор загрузки)
//   .then(result => показать результат, err => показать ошибку)


// **************************************************


// Пример-задача: loadScript
// версия с помощью callback - loadStatus
// function loadScript(src, loadStatus) { // будем запускать с адресом скрипта и callback для обработки результата
//   let script = document.createElement('script'); // создали тег
//   script.src = src; // добавили ему адрес скрипта в интернете
//   // loadStatus(errorObj, scriptURL)
//   script.onload = () => loadStatus(null, src); // все хорошо, запускаем callback c null в первом аргументе
//   script.onerror = () => loadStatus(new Error(`Ошибка загрузки скрипта ${src}`));

//   document.head.append(script);
// }

// // // использование:
// loadScript(
//   'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js',
//   (error, src) => {
//     if (error) console.log(`Ошибка: ${error.message}`)
//     else console.log(`${src} загружен!`)
//   }
// )


// Добавим к функции promise (обертку, возвращающую промис)
// function loadScriptPromise(src) { // чтобы прокинуть
//   return new Promise((resolve, reject) => { // будем возвращать промис
//     loadScript(
//       src, 
//       (err, src) => {
//         if (err) reject(err)
//         else resolve(src);
//       }
//     );
//   })
// }

// // теперь исполнение этого loadScriptPromise кода асинхронно
// loadScriptPromise('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js')
//   .then(
//     src => console.log(`${src} загружен!`), // ok
//   ).catch(
//     error => console.log(`Ошибка: ${error.message}`) // не ok
//   )


// **************************************************


// promise API

// Promise.resolve()
// Метод Promise.resolve(value) возвращает Promise выполненный с переданным значением. 

// Использование метода Promise.resolve
// const promise = Promise.resolve("Успешно"); // Строковое значение в качестве аргумента
// promise.then(
//   (value) => console.log(value), // Если успешно выполнен (fulfilled)
//   (reason) => console.log(reason) // Если завершился ошибкой (rejected)
// ); // Успешно


// Promise.resolve помогает сокращать некоторые сложные конструкции:
// let similarProm = new Promise(res => res(5));
// ^^ то же самое
// let prom = Promise.resolve(5);
// конвертировать обычный JS-объект в promise:


// Этот метод можно использовать как оболочку для значений, 
// когда точно не известно промис это или простое значение.
// function goodProm(maybePromise) {
//   return Promise.resolve(maybePromise);
// }
// goodProm(5).then(console.log); // 5


// **************************************************


// Использование Promise.reject
// Promise.reject может послужить заменой такому коду:
// let rejProm = new Promise((res, reject) => reject(5));
// let rejProm = Promise.reject(5)

// rejProm.catch(e => console.log(e)) // 5

// function foo(myVal) {
//   if (!myVal) {
//     return Promise.reject(new Error('myVal is required'))
//   }
//   return new Promise((res, rej) => {
//     // конвертация колбека
//   })
// }


// **************************************************


// Использование Promise.all
// Алгоритм работы Promise.all можно описать примерно так:

// Принимает множество Promise
//     затем ждет, пока все они завершатся
//     затем возвращает новый промис, который разрешается в массив
//     улавливает ошибку, если один из них отклоняется
// Следующий пример показывает, когда все промисы разрешаются:

// let prom1 = Promise.resolve(5); // вернет промис 5
// let prom2 = Promise.resolve({statusCode: 200}); // вернет промис {statusCode: 200}

// Promise.all([prom1, prom2])
//   .then(([val1, val2]) => { // на выходе будет массив
//       console.log(val1); // 5
//       console.log(val2.statusCode); // 200
//   })

// Этот пример показывает, когда один из них терпит неудачу:

// let prom3 = Promise.reject("error"); // вернет промис 5
// let prom4 = Promise.resolve({statusCode: 200}); // вернет промис {statusCode: 200}

// Promise.all([prom3, prom4])
//   .then(([val3, val4]) => { // на выходе будет массив
//       console.log(val3); // 5
//       console.log(val4.statusCode); // 200
//   })
//   .catch(e =>  console.log(e)) // "error", перейдет сразу к .catch


// **************************************************


// Практика


// **************************************************

// Задача №1: Конструктор Promise
// Каким будет вывод этого фрагмента кода?

// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })
// console.log('end');

// Анализ
// Блоки синхронного кода всегда выполняются последовательно сверху вниз.
// Когда мы вызываем new Promise(callback), функция коллбэка будет выполнена сразу же.

// Результат - этот код должен последовательно выводить start, 1, end.

// **************************************************

// Задача №2: .then()
// Каким будет вывод этого фрагмента кода?

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

// Анализ
// Это фрагмент асинхронного кода. То есть коллбэк-функция в .then().
// Помните о том, что интерпретатор JavaScript всегда сначала выполняет синхронный код, а затем асинхронный.
// При столкновении с этой проблемой нам нужно только различать синхронный и асинхронный код.

// Результат - выводом будет start , 1 , end и 2 .

// **************************************************

// Задача №3: resolve()
// Каким будет вывод этого фрагмента кода?

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })

// promise1.then(res => {
//   console.log(res)
// })

// console.log('end');

// Анализ
// Этот фрагмент кода почти такой же, как и предыдущий; 
// единственная разница в том, что после resolve(2) есть console.log(3).

// Помните, что метод resolve не прерывает выполнение функции. 
// Код, стоящий за ним, по-прежнему будет выполняться.

// Результат - выходным результатом будет start , 1 , 3 , end и 2 .

// **************************************************

// Задача №4: resolve() не вызывается
// Каким будет вывод этого фрагмента кода?

// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })

// promise1.then(res => {
//   console.log(2)
// })

// console.log('end');
// Анализ
// В этом коде метод resolve никогда не вызывался, 
// поэтому promise1 всегда находится в состоянии ожидания (pending). 
// Так что promise1.then(…) никогда не выполнялся. 2 не выводится в консоли.

// Результат
// Выходным результатом станет start , 1 , end .

// **************************************************

// Задача №5: Нечто, сбивающее с толку
// Каким будет вывод этого фрагмента кода?

// console.log('start')

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))

// console.log('middle')

// fn().then(res => {
//   console.log(res)
// })

// console.log('end')

// Анализ
// Этот код преднамеренно добавляет функцию, чтобы запутать испытуемых, то есть нас, и это fn.
// Пожалуйста, помните, что независимо от того, сколько существует слоев вызовов функций, 
// наши базовые принципы остаются неизменными:
// Сначала выполняется синхронный код, а затем асинхронный.
// Синхронный код выполняется в том порядке, в котором он был вызван.

// Результат - Выходным результатом будет start , middle, 1 , end и success.

// **************************************************

// Задача №6: с Fulfilling Promise
// Каким будет вывод этого фрагмента кода?

// console.log('start')

// Promise.resolve(1).then((res) => {
//   console.log(res)
// })

// Promise.resolve(2).then((res) => {
//   console.log(res)
// })

// console.log('end')

// Анализ
// Здесь Promise.resolve(1) вернет объект Promise, 
// состояние которого fulfilled, а результат равен 1 . Это синхронный код.

// Выходным результатом будет start , end , 1 и 2.

// **************************************************

// Задача №7: setTimeout vs Promise
// Каким будет вывод этого фрагмента кода?

// console.log('start')

// setTimeout(() => {
//   console.log('setTimeout')
// })

// Promise.resolve().then(() => {
//   console.log('resolve')
// })

// console.log('end')

// Анализ
// Хотя setTimeout и Promise.resolve() выполняются одновременно, 
// и даже код setTimeout еще впереди, но из-за низкого приоритета 
// относящаяся к нему коллбэк-функция выполняется позже.

// Результат - Выходным результатом будет start , end , resolve и setTimeout.

// **************************************************

// Задача №8: Микрозадачи смешиваются с макрозадачами
// Каким будет вывод этого фрагмента кода?

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(4);

// Анализ
// Эту задачу легко выполнить, если вы поняли предыдущий код.

// Нам просто нужно выполнить эти три шага:
// Найти синхронный код.
// Найти код микрозадачи.
// Найти код макрозадачи.

// Сначала выполните синхронный код:
// Выведется 1, 2 и 4, timerStart, timerEnd, success.

// **************************************************

// Задача №9: приоритезировать микрозадачи и макрозадачи
// Прежде чем мы определим приоритет между микрозадачами и макрозадачами, 
// здесь мы рассмотрим случай поочередного выполнения микрозадач и макрозадач.

// Что выводит этот фрагмент кода?

// const timer1 = setTimeout(() => {
//   console.log('timer1');
  
//   const promise1 = Promise.resolve().then(() => {
//     console.log('promise1')
//   })
// }, 0)

// const timer2 = setTimeout(() => {
//   console.log('timer2')
// }, 0)

// Анализ
// Сначала выполняются все микрозадачи.
// Выполняется одна макрозадача.
// Повторно выполняются все (вновь добавленные) микрозадачи.
// Выполняется следующая макрозадача.
// Цикл повторяется / Цикл завершается.

// Таким образом, в приведенном выше коде коллбэк-функция Promise.then 
// будет выполняться перед коллбэк-функцией второго setTimeout, 
// потому что это микрозадача, и она была врезана в последовательность задач.

// Результат timer1 promise1 timer2
 


// Задача №10: типичный вопрос с собеседования
// Что выводит этот фрагмент кода?

// console.log('start');

// const promise1 = Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
// });

// const timer1 = setTimeout(() => {
//   console.log('timer1')
//   const promise2 = Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)

// console.log('end');

// Анализ
// Выполним весь синхронный код:
// Выполним все микрозадачи:
// Выполним первую макрозадачу:
// Выполним все вновь добавленные микрозадачи:
// Выполним следующую макрозадачу:

// Примечание. На этом шаге макрозадача добавляет в очередь задач новую микрозадачу.

// результат: start, end, promise1, timer1, promise2, timer2
