// Планирование: setTimeout и setInterval
// setTimeout - вызвать функцию один раз, через интервал времени
// setInterval вызывать функцию регулярно, через интервал времени


// ************************


// setTimeout
// function sayHi() {
//   console.log('Привет, а я через');
// }
// setTimeout(sayHi, 3000); // 1000 = 1s
// console.log("идешь первым")


// ************************


// setTimeout + arguments
// function sayHi(phrase, who) {
//   console.log( phrase + ', ' + who );
// }

// setTimeout(sayHi, 5000, "Привет", "Джон"); // func, delay, arguments
// // !!! не вызывать функцию, а передавать ссылку на неё


// ************************


// Отмена через clearTimeout и идентификатор таймера
// let timerId = setTimeout(() => console.log("ничего не происходит"), 1000);
// clearTimeout(timerId);
// console.log(timerId); // тот же идентификатор (не принимает значение null после отмены)


// ************************


// setInterval
// повторить с интервалом 2 секунды
// let timerId = setInterval(
//   () => console.log('tick'), 
//   1000
// );

// // // остановить вывод через 5 секунд
// setTimeout(
//   () => {
//     clearInterval(timerId); 
//     console.log('stop'); 
//   }, 
//   5000
// );


// ************************


// Более гибко через вложенный setTimeout

// Вместо let timerId = setInterval(() => console.log('tick'), 1000);
// let timerId = setTimeout(
//     function tick() {
//       console.log('tick');
//       timerId = setTimeout(tick, 1000); // (*)
//     }, 1000
// );


// ************************


// Пример использования #1
// let delay = 5000; // 5 секунд

// let timerId = setTimeout(function request() {
//   // ...отправить запрос...
//   if (ошибка запроса из-за перегрузки сервера) {
//     // увеличить интервал для следующего запроса
//     delay *= 2;
//   }
//   timerId = setTimeout(request, delay);
// }, delay);



// Пример использования #2
// let i = 1;
// setInterval(function() {
//   func(i);
// }, 100);

// let i = 1;
// setTimeout(function run() {
//   func(i);
//   setTimeout(run, 100); // гарантия выдержки интервала
// }, 100);


// ************************


// setTimeout с нулевой задержкой - создать макротаску
// setTimeout(() => console.log("Мир"));
// console.log("Привет");


// event-loop событийный цикл
// макротаски и микротаски 
// иллюстрации в папке images


// ************************


// Мини-задача: каким будет i в консоли?
// let i = 0;
// setTimeout(() => console.log(i), 100); 
// предположим, что время выполнения этой функции >100 мс
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }


// ************************


// Мини-задача: Написать функцию printNumbers(from, to)
// которая выводит число каждую секунду
// начиная от from и заканчивая to
// используя рекурсивный setTimeout.

// function printNumbers(from, to) {
// 	let current = from; 
// 	setTimeout(function go() {
// 		if (current < to) {
// 			setTimeout(go, 1000, current, to);
// 		}
// 		current++;
// 	} ,1000);
// }

// printNumbers(5, 10);


// ************************


// Итоговая задача - написать таймер
// Поле - количество секунд, которые прошли
// Кнопки - запуcтить, остановить, продолжить, обнулить


// Через setTimeout (предпочтительнее)
const timerDisplay = document.querySelector('.timer__display');
const timerPlay = document.querySelector('.timer__play');
const timerPause = document.querySelector('.timer__pause');
const timerReset = document.querySelector('.timer__reset');
const timerStop = document.querySelector('.timer__stop');

let timer;

function goTimer(value) {
	clearTimeout(timer);
  if (value === 'stop' || value === 'reset') {
  	timerDisplay.innerHTML = 0;
  }
  if (value === 'play') {
    timer = setTimeout(function go() {
      timerDisplay.innerHTML++
      timer = setTimeout(go, 1000);
    }, 1000);
  }
}

timerPlay.addEventListener('click', function() {
	goTimer('play');
});

timerPause.addEventListener('click', function() {
	goTimer();
});

timerReset.addEventListener('click', function() {
	goTimer('reset');
});

timerStop.addEventListener('click', function() {
	goTimer('stop');
});


// ************************


// Через setInterval
// const timerDisplay = document.querySelector('.timer__display');
// const timerPlay = document.querySelector('.timer__play');
// const timerPause = document.querySelector('.timer__pause');
// const timerReset = document.querySelector('.timer__reset');
// const timerStop = document.querySelector('.timer__stop');

// let timer;

// timerPlay.addEventListener('click', function() {
// 	clearTimeout(timer);
// 	timer = setInterval(function() {
// 		timerDisplay.innerHTML++
// 	}, 1000);
// });

// timerPause.addEventListener('click', function() {
// 	clearTimeout(timer);
// });

// timerReset.addEventListener('click', function() {
// 	timerDisplay.innerHTML = 0;
// });

// timerStop.addEventListener('click', function() {
// 	clearTimeout(timer);
// 	timerDisplay.innerHTML = 0;
// });
