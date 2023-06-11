// https://learn.javascript.ru/async-await

// Async/await
// Асинхронные функции
// Ключевое слово async
// async function someFunction() {
//   return 'верну промис';
// }
// // // У слова async один простой смысл: эта функция всегда возвращает промис
// someFunction().then(result => console.log(result));



// Await - только для асинхронных функций
// async function someFunction() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("готово!"), 1000)
//   });
//   let result = await promise; // будет ждать, пока промис не выполнится
//   console.log(result); // "готово!"
// }
// someFunction();



// await заставит интерпретатор JavaScript ждать,
// пока промис справа от await не выполнится
// аналогично result.then()



// асинхронность в классах и объектах
// классы
// class Waiter {
//   async wait() {
// 	 	let promise = new Promise((resolve, reject) => {
// 	    setTimeout(() => resolve('Результат'), 2000)
// 	  });
//     return await promise;
//   }
// }
// new Waiter()
// 	.wait()
// 	.then(result => console.log(result));



// объекты
// const obj = {
// 	text: 'Результат',
// 	wait: async function() {
// 			 	let promise = new Promise((resolve, reject) => {
// 			    setTimeout(() => resolve(this.text), 2000)
// 			  });
// 		    return await promise;
// 	}
// }

// obj.wait().then( result => console.log(result) );



// Async + Области видимости стрелочных функций
// Пример
// const test = {
//   name: 'test object',
//   createAnonFunction: function() {
//   	const than = this;
//     return async function() {
// 			 	let promise = new Promise((resolve, reject) => {
// 			    setTimeout(() => resolve(than.name), 2000)
// 			  });
//     		return await promise;
//     };
//   },



  // createArrowFunction: function() {
  //   return async () => {
		// 	 	let promise = new Promise((resolve, reject) => {
		// 	    setTimeout(() => resolve(this.name), 2000)
		// 	  });
  //   		return await promise;
  //   };
  // }
// };
// const anon = test.createAnonFunction();
// const arrow = test.createArrowFunction();
// anon().then( result => console.log(result));
// arrow().then( result => console.log(result));



// Обработка ошибок
// async function someFunction() {
//   try {
//     let response = await Promise.reject(new Error("Упс!"));
//   } catch(err) {
//     console.log(err); // TypeError: failed to fetch
//   }
// }

// someFunction();

// const arr = [];

// async function someFunction() {
//   let response = !true 
//   ? await Promise.resolve("все ок")
//   : await Promise.reject(new Error("Упс!"));
//   return response;
// }
// // someFunction() вернёт промис в состоянии rejected

// someFunction()
//   .then(
//     data => {
//       arr.push(data)
//       console.log(arr);
//     }
//   )
//   .catch(
//     error=>console.log(error)
//   ); // TypeError: failed to fetch













// ПРАКТИКА
// мини-задача
// Вызовите async–функцию из "обычной"
// async function wait() {
//   await new Promise(resolve => setTimeout(resolve, 3000));
//   return 10;
// }

// function go() {
//   // ...что здесь написать?
//   // чтобы вызвать wait() и дождаться результата "10" от async–функции
//   // не забывайте, здесь нельзя использовать "await"
// }

// go()


// Напишем небольшой компонент симулирующий долгое вычисление
// 1.HTML 
// - input принимающий некоторую строку от пользователя, 
// - button кнопка "рассчитать", будет disable, если input пуст.
// - Поле div для вывода количества посчитанных символов в строке
// 2.JS
// - создать асинхронную функцию, 
// которая будет вызываваться по кнопке "рассчитать",
// выставлять состояние кнопки (disable), 
// затем будет симулировать долгий расчет(через setTimeout - 3s),
// во время расчета disable должны быть и input и кнопка.

// - вывести результат промиса(количество символов в строке) 
// в поле div, не используя .then()

// * дополнительная задача
// - Отключить disable button, позволив пользователю вводить пустую строку и 
// обработать ошибку через try..catch, создав свой собственный экземляр ошибки и 
// выводить её в консоль.
// пример создания и использования собственной ошибки
// class SomeError extends Error {
//   constructor(message, cause) {
//     super(message);
//     this.cause = cause;
//     this.name = 'SomeError';
//   }
// }
// throw new SomeError("Некая ошибка");
