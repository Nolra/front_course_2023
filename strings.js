// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
// https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Useful_string_methods


// строки чуть подробнее
// .length - длина перебираемого значения (строки, массива)
// [0]-индексы
// console.log(
// 	'HeLlo'.length,
// 	'HeLlo'[0],
// 	'HeLlo'[1],
// 	'HeLlo'[2],
// 	'HeLlo'[3],
// 	'HeLlo'[4],
// )
// let hello = 'Hello, World';
// let helloLength = hello.length;
// let helloUpperCase = hello.toUpperCase();
// let index4Upper = hello[4].toUpperCase();

// console.log(
// 	hello
// 		.toUpperCase()
// 		.toLowerCase()
// )




// Как изменить регистр
// toLowerCase
// Преобразует символы в строке в нижний регистр.

// "Hello".toLowerCase(); // "hello"

// toUpperCase
// Преобразует символы в строке в верхний регистр.

// "Hello".toUpperCase(); // "HELLO"
// let hello = "Hello";
// let world = "World";
// // let worldGreeting = `${hello} ${world}`;
// let worldGreeting = hello.concat(' ', world);
// console.log(worldGreeting);

// Как объединить строки
// concat
// Объединяет две или более строки и возвращает одну строку.

// let firstHello = "Hello".concat(" proger"); // "Hello proger"
// let secondHello = "Hello".concat(" ", "p", "r", "o", "g", "er"); // "Hello proger"
// console.log(firstHello);
// console.log(secondHello);



// Как разделить строку на подстроки
// split
// Разбивает строку в массив по указанному разделителю, 
// Вторым параметром можно указать ограничитель.




// // Получаем каждый символ
// let splitedString = "Hello proger".split(""); // ["H", "e", "l", "l", "o", " ", "p", "r", "o", "g", "e", "r"]
// let splitedString2 = "Hello proger".split(" "); // ["Hello", "proger"]
// console.log(splitedString);
// console.log(splitedString2);








// // Получаем каждое слово из строки
// "Hello proger".split(" "); //["Hello", "proger"]

// // Устанавливаем ограничитель
// "Hello proger".split(" ", 1); //["Hello"]
// 1 аргумент у split это divider (разделитель)
// 2 аргумент это ограничитель элементов возвращаемого массива








// Как повторить строку
// repeat
// Принимает в качестве параметра число и повторяет строку указанное количество раз.

// "Proger".repeat(3); // "ProgerProgerProger"









// includes
// Проверяет, содержит ли строка указанную подстроку. 
// Возвращает значение true или false. 
// Вторым параметром можно указать позицию в строке, 
// с которой следует начать поиск.

// "Hello proger".includes("proger"); // true
// "Hello proger".includes("Hello", 1); // false









// indexOf
// Возвращает индекс первого найденного вхождения указанного значения. 
// Поиск ведётся от начала до конца строки. Если совпадений нет, возвращает -1. 
// Вторым параметром можно передать позицию, с которой следует начать поиск.

// "Hello World".indexOf("o"); // 4
// "Hello World".indexOf("o", 5); // 7









// search
// Проверяет, есть ли в строке указанное значение 
// и возвращает индекс начала совпадения.
// "hi, hello, hey".search("hello"); // 4

























// Как извлечь подстроку
// slice
// Извлекает часть строки и возвращает новую строку. 
// Обязательный параметр — начало извлечения.
// Вторым параметром можно установить границу (по умолчанию — до конца строки).

// let str = "Методы строк - как извлечь подстроку".slice(0,5);
// console.log(str);
// let str = "Методы строк - как извлечь подстроку".slice(16, 21);
// console.log(str);
// // Отрицательные значения тоже работают
// "Методы строк - как извлечь подстроку".slice(-7); 
// "Методы строк - как извлечь подстроку".slice(-7, -2);









// substr
// Извлекает часть строки указанной длины. 
// Первым параметром принимает стартовую позицию, вторым — длину. 
// Значение первого параметра может быть отрицательным, тогда позиция определяется с конца строки.

// let str = "Методы строк - как извлечь подстроку".substr(7, 5); 
// console.log(str);

// let str = "Методы строк - как извлечь подстроку".substr(-7, 5); 
// console.log(str)








// Как заменить подстроку
// replace
// Ищет в строке указанное значение и возвращает новую строку, 
// в которой выполнена замена на второй параметр. 
// Можно заменить найденные значения другой строкой 
// или передать функцию для работы над совпадениями.

// "hi, hello, hi".replace("hi", "hey"); // "hey, hello, hi"

// replaceAll
// Заменяет все найденные совпадения другой строкой или переданной функцией.

// "hi, hello, hi".replaceAll("hi", "hey"); // "hey, hello, hey"


