
//callback

// function showInConsole(callback, number) { // 2 - вызываем с переданными параметрами
// 	const mathResult = callback(number); // 3 - здесь callback(number) это squer(10)
// 	// 6 - в mathResult сохраняем результат вызова squer(10)
// 	console.log(mathResult); //7 выводим результат в консоль
// }

// function squer(numberSquer) { // 4 вызываем и 
// 	return numberSquer*numberSquer // 5 возвращаем из функции результат
// }

// showInConsole(squer, 10); // 1 - передаем в showInConsole два параметра
// // squer - описание функции
// // ƒ squer(numberSquer) {
// // 	return numberSquer*numberSquer
// // }
// // и число


// // где-то в другом месте
// function calcSquerToSquer(number) {
// 	let result = squer(squer(number));
// 	return result
// }

// showInConsole(calcSquerToSquer, 5)







// условия + && ||
// 'hello'.length // 5
// function stringLengthDetector(value) { // узнать что за тип данных
// 	if (typeof value === 'string') {
// 		return value.length;
// 	}
// 	if (typeof value === 'number' || typeof value === 'boolean') {
// 		return String(value).length;
// 	}
// }
// console.log(stringLengthDetector('hello,world'))
// console.log(stringLengthDetector(15566))
// console.log(stringLengthDetector(false))

// if (false || false || false || false || true) {
// 	// сработает если хоть одно выражение истинно
// }

// if (true && true && true && true && false) {
// 	// не сработает если есть хоть одна ложь
// }


















































// МАССИВЫ
// Массивы это упорядоченные данные
// Базовый синтаксис

// let arr = new Array();
// let arr = [];
// console.log(arr)



// let fruits = [
// 	"Яблоко", // индекс - 0
// 	"Апельсин", // индекс - 1
// 	"Слива" // индекс - 2
// ];

// let apple = fruits[0]; // Яблоко 
// console.log( fruits ); 
// console.log( fruits.length );
// console.log( apple ); // Яблоко
// console.log( fruits[1] ); // Апельсин
// console.log( fruits[2] ); // Слива

// console.log( fruits ); 
// // Можно заменить или добавить элемент к массиву
// console.log( fruits );
// fruits[2] = 'Груша'; // теперь ["Яблоко", "Апельсин", "Груша"]
// console.log( fruits ); 

// fruits[3] = 'Лимон'; // теперь ["Яблоко", "Апельсин", "Груша", "Лимон"]

// console.log( fruits ); 


// let randomTypesValue = [
// 	"hello", // индекс - 0
// 	3000, // индекс - 1
// 	"100" // индекс - 2
// ];
// console.log(randomTypesValue)
// randomTypesValue[1] -= 1000;
// console.log(randomTypesValue)




// Общее число элементов массива содержится в его свойстве length
// let fruits = ["Яблоко", "Апельсин", "Слива"];
// console.log( fruits.length ); // 3


// Вывести массив целиком
// let fruits = ["Яблоко", "Апельсин", "Слива"];
// console.log( fruits ); // Яблоко, Апельсин, Слива




// В массиве могут храниться элементы любого типа.
// разные типы значений
// let arr = [ 
// 	'Яблоко', // 0 - строка
// 	[
// 		'лошадь',  // 0 - строка
// 		'собака',  // 1 - строка
// 		[
// 			123,  // 0 - число
// 			567,	// 1 - число
// 		] // 2 - массив
// 	], // 1 - массив
// 	true, // 2 - булева истина
// 	name => `Это функция, а ты ${name}`, // 3 - функция
// ];


// // получить элемент с индексом 3c(функция) и выполнить её
// console.log(arr[1][2][1]);
// const funcFromArray = arr[3];
// console.log(funcFromArray('человек'));



// Методы pop/push, shift/unshift


// push добавляет элемент в конец
// let fruits = [
// 	"Яблоко", 
// 	"Апельсин"
// ];

// let fruitsLenght = fruits.length; // 2
// fruits[fruitsLenght] = "Груша";
// // VS
// let fruits = ["Яблоко", "Апельсин"];
// console.log( fruits ); 
// fruits.push("Груша");

// console.log( fruits ); 


// pop удаляет последний элемент
// let fruits = ["Яблоко", "Апельсин", "Груша"];
// console.log( deletedElement, fruits ); // Яблоко, Апельсин

// console.log( fruits.pop() ); // удаляем "Груша" и выводим его
// console.log( fruits ); // Яблоко, Апельсин


// дополнительные фишки pop и push

// let arr = [
// 	'Ilya',
// 	'Tamara',
// 	'Georgi',
// ]

// let updatedArrLength = arr.push('Vlad');
// console.log(updatedArrLength);
// // когда элемент добавляется то побочным свойством метода push  
// // (конкретно его return) он возвращает новую length массива

// let removedElement = arr.pop();
// console.log(removedElement);
// // когда элемент удаляется то побочным свойство метода pop
// // (конкретно его return) он возвращает этот удаленный элемент


















// shift удаляет элемент в начале, сдвигая очередь, 
// так что второй элемент становится первым
// let fruits = ["Яблоко", "Апельсин", "Груша"];
// console.log( fruits.shift() ); // удаляем Яблоко и выводим его
// console.log( fruits ); // Апельсин, Груша

// unshift добавляет элемент в начало массива
// let fruits = ["Апельсин", "Груша"];
// fruits.unshift('Яблоко');
// console.log( fruits ); // Яблоко, Апельсин, Груша






// внутреннее устройство массивов
// let fruits = [
// 	"Банан"
// ];
// let arr = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)
// // console.log( arr === fruits ); // true
// arr.push("Груша"); // массив меняется по ссылке
// console.log( fruits ); // Банан, Груша - теперь два элемента
// console.log( arr ); // Банан, Груша - теперь два элемента





// Перебор элементов
// Одним из самых старых способов перебора элементов массива 
// является цикл for по цифровым индексам:

// let fruits = ["Яблоко", "Апельсин", "Груша"];
// console.log(fruits)
// for (let i = 0; i < fruits.length; i++) {
// 	if (fruits[i] === 'Апельсин') {
// 		fruits[i] = 'Киви';
// 	}
// 	// console.log(fruits[i]) // 0 - Яблоко, 1 - Апельсин, 2 - Груша
// }

// console.log(fruits)

// для массивов возможен и другой вариант цикла, for..of:
// let fruits = ["Яблоко", "Апельсин", "Слива"];
// // // проходит по значениям
// for (let currentElem of fruits) {
//   console.log( currentElem );
// }





// Немного о «length»
// Свойство length автоматически обновляется при изменении массива. 
// Если быть точными, это не количество элементов массива, 
// а наибольший цифровой индекс плюс один.

// Например, единственный элемент, имеющий большой индекс, даёт большую длину:
// let fruits = [];
// fruits[123] = "Яблоко";
// console.log( fruits ); // 124



// Ещё один интересный факт о свойстве length – его можно перезаписать
// Если мы вручную увеличим его, ничего интересного не произойдёт. 
// Зато, если мы уменьшим его, массив станет короче. 
// Этот процесс необратим, как мы можем понять из примера:

// let arr = [1, 2, 3, 4, 5];

// arr.length = 2; // укорачиваем до двух элементов
// console.log( arr ); // [1, 2]

// arr.length = 5; // возвращаем length как было
// console.log( arr[3] ); // undefined: значения не восстановились









// Многомерные массивы
// Массивы могут содержать элементы, которые тоже являются массивами. 
// Это можно использовать для создания многомерных массивов, например, для хранения матриц:
// let matrix = [
//   [1, 2, 3], // 0
//   [4, 5, 6], // 1
//   [7, 8, 9]  // 2
// ];
// console.log( matrix[1][1] ); // 5, центральный элемент






// ЗАДАЧИ

// 1) Что выведет следующий код?

// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// console.log( fruits.length ); // ?




// 2) 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». 
// Ваш код для поиска значения в середине должен работать для массивов с любой длиной. 
// Подсказка - функция округления Math.floor(то, что нужно округлить)
// Удалите первый элемент массива и покажите его.
// Вставьте Рэп и Регги в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл






// 3) напишите функцию, которая 
// принимает как аргумент массив
// и возвращает сумму всех чисел, которые в нем есть
// или если чисел нет, то возвращает ноль



















// МАССИВЫ УГЛУБЛЕННЕЕ
// Больше методов массивов

// мы уже знаем
// arr.push(items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(items) – добавляет элементы в начало.





// Удаление элемента из массива - splice

// arr.splice(index[, deleteCount, elem1, ..., elemN])

// Он начинает с позиции index, 
// удаляет deleteCount элементов и вставляет 
// elem1, ..., elemN на их место. 
// Возвращает массив из удалённых элементов


// let arr = ["Я", "изучаю", "JavaScript"];
// console.log( arr );
// arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
// console.log( arr ); // осталось ["Я", "JavaScript"]



// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // // удалить 3 первых элемента и заменить их другими
// console.log( arr );
// let deletedElemnts = arr.splice(0, 3, "Давай", "танцевать");
// // 1 аргумент - индекс элемента с которого удаляем
// // 2 аргумент - количество удаляеммых элементов
// // 3,4,5... аргументы чем заменяем
// // удаленные элементы можно сохранить как return метода

// console.log( arr ); // теперь ["Давай", "танцевать", "прямо", "сейчас"]
// console.log( deletedElemnts );



// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // // удалить 2 первых элемента
// let removed = arr.splice(0, 2);
// console.log( removed ); // ["Я", "изучаю"] <-- массив из удалённых элементов
// console.log( arr );



// Метод splice также может вставлять элементы без удаления, 
// для этого достаточно установить deleteCount в 0:

// let arr = ["Я", "изучаю", "JavaScript"];
// // // с позиции 2
// // // удалить 0 элементов
// // // вставить "сложный", "язык"
// arr.splice(2, 0, "сложный", "язык");
// function spliceClone(position, count, ...rest) {
// 	// body...
// }
// console.log( arr ); // ["Я", "изучаю", "сложный", "язык", "JavaScript"]








// более простое удаление - slice
// arr.slice([start], [end])


// Он возвращает новый массив, 
// в который копирует элементы, 
// начиная с индекса start и до end (не включая end)

// let arr = ["t", "e", "s", "t"];
// let arr2 = arr.slice(1, 3); // e,s (копирует с 1 до 3)
// let arr3 = arr.slice(-2); // s,t (копирует с -2 до конца)
// console.log(arr);
// console.log(arr2);
// console.log(arr3);


// Можно вызвать slice и вообще без аргументов: 
// let arrClone = arr.slice() // создаёт копию массива arr
// Это часто используют, чтобы создать копию массива для дальнейших преобразований, 
// которые не должны менять исходный массив.











// объединение массивов в новый - concat 
// arr.concat(arg1, arg2) //синтаксис

// Он принимает любое количество аргументов, 
// которые могут быть как массивами, 
// так и простыми значениями.

// let arr = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [15, 26];
// let concatArrays = arr.concat(arr2, arr3);

// console.log(concatArrays);
// console.log(arr);
// console.log(arr2);
// console.log(arr3);
// // // создать массив из: arr и [3,4]
// console.log( arr.concat([3, 4]) ); // [1,2,3,4]
// // // создать массив из: arr и [3,4] и [5,6]
// console.log( arr.concat([3, 4], [5, 6]) ); // [1,2,3,4,5,6]
// // // создать массив из: arr и [3,4], потом добавить значения 5 и 6
// console.log( arr.concat([3, 4], 5, 6) ); // [1,2,3,4,5,6]








// let string = 'test';
// let arr = string.split(""); // ['t','e','s','t'];
// let comebackString = arr.join(" ^___^ ");
// console.log(comebackString);

















// ==============================









// Перебор: forEach
// Метод arr.forEach позволяет запускать функцию для каждого элемента массива
// let arr = [ 'привет', 'как', 'дела' ];
// Его синтаксис:
// arr.forEach(

// 		function(item, index, array) {
// 	  // ... делать что-то с item
// 	  	console.log(item);
// 	  	console.log(array[index]);
// 		}

// );



// Например, этот код выведет на экран каждый элемент массива:
// Вызов console.log для каждого элемента

// ["Bilbo", "Gandalf", "Nazgul"].forEach(
// 	(item, index, array) => {
// 	  console.log(`${item} имеет позицию ${index} в ${array}`);
// 	}
// );





// includes - Поиск в массиве
// arr.includes(item, from) – ищет item, начиная с индекса from, 
// и возвращает true, если поиск успешен.

// let arr = [1, 0, false];
// console.log( arr.includes(1) ); // true

// // const arr = [NaN];
// console.log( arr.includes(NaN) );// true (верно)











// углубленный поиск в массиве find
// Представьте, что у нас есть массив массивов. 
// Как нам найти вложенный массив с определённым условием?

// Здесь пригодится метод arr.find.
// Его синтаксис таков:


// let result = arr.find(
// 	function(item, index, array) {
// 	  // если true - возвращается текущий элемент и перебор прерывается
// 	  // если все итерации оказались ложными, возвращается undefined
// 	}
// );


// Функция вызывается по очереди для каждого элемента массива:
// item – очередной элемент.
// index – его индекс.
// array – сам массив.
// Если функция возвращает true, поиск прерывается и возвращается item. 
// Если ничего не найдено, возвращается undefined.

// Например, у нас есть массив c массивами пользователей, 
// каждый из которых имеет первым элементом фамилию, вторым имя. 
// Попробуем найти того, кто с фамилией Агранова

// let users = [
//   ['Иванов', "Вася"],
//   ['Петров', "Петя"],
//   ['Агранова', "Соня"],
// ];

// let user = users.find(
// 	function(item, index) {
// 		return item[0] === 'Агранова' // ['Агранова', "Соня"] - сохранится в user
// 	} // как только callback вернет true текущая итерация сохранится в переменную
// );



// let users = [
//   ['Иванов', "Вася"], // 0
//   ['Петров', "Петя"], // 1
//   ['Агранова', "Соня"], // 2
// ];

// let user = users.find(
// 	(item, i ) => i == 1 // if true return item
// )[0]; // стрелочный

// console.log(user); // Петров


// let users = [
//   ['Иванов', "Вася"], // 0
//   ['Петров', "Петя"], // 1
//   ['Агранова', "Соня"], // 2
// ];


// let user2 = users.find(
// 	function(item) {
// 		return item[0] == 'Петров' // if true return item
// 	} // декларативный
// );


// console.log(user); // ['Агранова', "Соня"]
// console.log(user2);







// отфильтровать массив - filter
// Синтаксис этого метода схож с find, но 
// filter возвращает массив из всех подходящих элементов

// let results = arr.filter( // results = [...]
// 	function(item, index, array) {
//   // если true - элемент добавляется к результату, и перебор продолжается
//   // возвращается пустой массив в случае, если ничего не найдено
// 	}
// );


// let users = [
//   ['Иванов', "Вася"], // 0
//   ['Агранов', "Петя"], // 1
//   ['Агранова', "Маша"], // 2
// ];

// let checkFuncA = item => item[0][0] === 'А';
// let someUsers = users.filter(
// 	checkFuncA
// );

// let someUsers2 = users.filter(
// 	item => item[0][0] === 'А'
// );



// console.log(someUsers)

// первая-итерация(пример)
// item === ['Иванов', "Вася"]
// i === 0
// array === users


// let users = [
//   "Вася", // 0
//   'Петя', // 1
//   "Маша", // 2
// ];

// let someUsers = users.filter(
// 	item => item[3] === 'я'
// );

// let someUsers2 = users.filter(
// 	function(item) {
// 		return item[3] === 'я'
// 	}
// );

// console.log(someUsers,someUsers2);


// let someUsers2 = users.filter( // соберет в массив items
// 	checkFunc // описание функции, или анонимная функция прямо здесь
// ); // аргументом является callback function

// console.log(someUsers);









// Преобразование массива
// map
// Метод arr.map является одним из наиболее полезных и часто используемых.
// Он вызывает функцию для каждого элемента массива 
// и возвращает массив результатов выполнения этой функции.

// Синтаксис:
// let result = arr.map(
// 	function(item, index, array) {
//   	// возвращается новое значение вместо элемента
// 	}
// );
// Например, здесь мы преобразуем каждый элемент в его длину:


// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(
// 	item => item.length
// );
// console.log(lengths);

// let someArr = ["Bilbo", "Gandalf", "Nazgul"].map(
// 	item => (
// 			item === "Gandalf" 
// 				? item.toUpperCase() 
// 				: item
// 		)
// );
// console.log(someArr)





// let arr = ["Bilbo", "Gandalf", "Nazgul"];

// let changeNasgulToHobbit = arr.map( // ["Bilbo", "Gandalf", "Hobbit"]
// 	item => item === "Nazgul" ? "Hobbit" : item
// )

// console.log(changeNasgulToHobbit)



// console.log(lengths); // 5,7,6






// let numbers = [5, 4, 7, 12, 78, 457, 2, 5];
// console.log(numbers)

// let numbersTenToSquere = numbers.map(
// 	item => item < 10 ? item * item : item
// )
// console.log(numbersTenToSquere)
// console.log(numbers)






// split и join - разбивка и соединение строк в массивы

// let names = 'Вася, Петя, Маша';

// let arr = names.split(', ');

// for (let name of arr) {
//   console.log( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
// }


// У метода split есть необязательный второй числовой аргумент 
// – ограничение на количество элементов в массиве. 
// Если их больше, чем указано, то остаток массива будет отброшен. 
// На практике это редко используется:

// let arr = 'Вася, Петя, Маша, Саша'.split(', ', 2);
// console.log(arr); // Вася, Петя




// Разбивка по буквам
// Вызов split(s) с пустым аргументом s разбил бы строку на массив букв:
// let str = "тест";
// console.log( str.split('') ); // т,е,с,т


// Вызов arr.join(glue) делает в точности противоположное split. 
// Он создаёт строку из элементов arr, вставляя glue между ними.

// Например:
// let arr = ['Вася', 'Петя', 'Маша'];
// let str = arr.join('; '); // объединить массив в строку через ; 

// console.log( str ); // Вася; Петя; Маша














// Итого
// Шпаргалка по методам массива:

// Для добавления/удаления элементов:

// push (...items) – добавляет элементы в конец,
// pop() – извлекает элемент с конца,
// shift() – извлекает элемент с начала,
// unshift(...items) – добавляет элементы в начало.
// splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
// slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
// concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.

// Для поиска среди элементов:
// indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
// find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
// findIndex похож на find, но возвращает индекс вместо значения.


// Для перебора элементов:
// forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.

// Для преобразования массива:
// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
// split/join – преобразует строку в массив и обратно.
// reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.



// Дополнительно:
// Array.isArray(arrBlablabla); // проверяет, является ли arr массивом.

// Array.isArray([34,53]) // true

// Главное это сейчас 
// find/filter 
// forEach/map





// Последнее - синтаксический сахар
// деструктуризация массива


// синтаксис для массива:

// let catArray = [
// 	'Кошачий корм', 
// 	'www.corm.ua', 
// 	600, 
// 	'дополнительные данные', 
// 	'не всегда нужные данные'
// ]
// объявление переменных (деструктурирующее присваивание)
// let [
// 	header, // Кошачий корм
// 	link,   // www.corm.ua
// 	price,  // 600
// 	...restData // ['дополнительные данные', 'не всегда нужные данные']
// ] = catArray;

// console.log(header);
// console.log(link);
// console.log(price);
// console.log(restData);
// Первый элемент отправляется в item1; 
// второй отправляется в item2, 
// все остальные элементы попадают в массив rest.

// Можно извлекать данные из вложенных объектов и массивов, 
// для этого левая сторона должна иметь ту же структуру, что и правая.


// Пример деструктуризации массива:

// // у нас есть массив с именем и фамилией

// let arr = ["Ilya", "Kantor"]
// let [firstName, surname] = arr;

// console.log(firstName)
// console.log(surname)
// // деструктурирующее присваивание
// записывает firstName=arr[0], surname=arr[1]


// console.log(firstName); // Ilya
// console.log(surname);  // Kantor




// оператор rest - Остаточные параметры «…»
// Если мы хотим не просто получить первые значения, 
// но и собрать все остальные, то мы можем добавить ещё один параметр, 
// который получает остальные значения, используя оператор 
// «остаточные параметры» – троеточие ("..."):

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// console.log(name1); // Julius
// console.log(name2); // Caesar
// console.log(rest); // ["Consul", "of the Roman Republic"]

// // Обратите внимание, что `rest` является массивом.
// console.log(rest[0]); // Consul
// console.log(rest[1]); // of the Roman Republic
// console.log(rest.length); // 2





// function withOutArray(array, ...deleteData) {
// 	console.log(deleteData)
// }



// let someArray = ['ttt', 'fff', 555, true, false, undefined, null, 0, 5, 61, 1];
// withOutArray(someArray, null, 5, 1, false, 555);





















// Фильтрация по диапазону

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);

// console.log( filtered ); // 3,1 (совпадающие значения)
// console.log( arr ); // 5,3,8,1 (без изменений)












// Напишите функцию filterRangeInPlace(arr, a, b), 
// которая принимает массив arr и удаляет из него все значения кроме тех, 
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]








