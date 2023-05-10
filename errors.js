// https://learn.javascript.ru/try-catch

// // Обработка ошибок
// try {

// } catch(error) { // error - объект ошибки

// }






// try {
//   console.log('Начало блока try');
//   lalala; // ошибка, переменная не определена!
//   console.log('Конец блока try (никогда не выполнится)');
// } catch(error) { // error - объект ошибки
// 	console.log(`Возникла ошибка!`, error);
// 	console.log(error.name);
// 	console.log(error.message); 
// 	console.log(error.stack);
// }





















// Обработка не(!) синтаксических ошибок
// try {
//   {{{{{{{{{{{{
// } catch(error) {
//   alert("Движок не может понять этот код, он некорректен");
// }
























// Генерация собственных ошибок
// Оператор throw генерирует ошибку
// let json = '{ "age": 30 }'; // данные неполны

// try {
//   let user = JSON.parse(json); // <-- выполнится без ошибок
//   if (!user.name) {
//     throw new ReferenceError("Данные неполны: нет имени"); // (*)
//     // throw ТипОшибки("здесь будет ее текст - error.message")
//   }

//   console.log( user.name ); // никогда не выполнится

// } catch(error) {
//   console.log( "JSON Error: " + error.message ); // JSON Error: Данные неполны: нет имени
// }























// Проброс исключения
// let json = '{ "age": 30 }'; // данные неполны


// try {
//   let user = JSON.parse(json);
// //   blabla(); // неожиданная ошибка
//   if (!user.name) {
//     throw new ReferenceError("Данные неполны: нет имени");
//   }
// } catch(e) {
//   if (e.message == "Данные неполны: нет имени") {
//     console.log( "JSON Error: " + e.message );
//   } else {
//     throw e; // проброс (*)
//   }
// }
// console.log( "ПРИВЕТ");


// Отлов ошибки снаружи
// function readData() { // 2 начинается исполнение функции
//   let json = '{ "age": 30 }';
//   try {
//     // ...
//     blabla(); // 3 ошибка!
//   } catch (error) {
//     // ...
//     if (error.message !== 'Данные неполны: нет имени') {
//       throw error; // 4 проброс исключения (не знаю как это обработать)
//     }
//   }
// }

// try {
//   readData(); // 1 вызывается функция // 5 ошибка приходит сюда и пробрасывается
// } catch (error) {
//   console.log( "Внешний catch поймал: " + error ); // 6 поймал!
//   throw error
// }

























// finally - расширенный синтаксис
// try {
//     blablabla; //    ... пробуем выполнить код...
// } catch(e) {
//     console.log("Наша ошибка " + e) //    ... обрабатываем ошибки ...
//     throw e; 
// } finally {
//     console.log("Выполнится всегда") //    ... выполняем всегда ...
// }

