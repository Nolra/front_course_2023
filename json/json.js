// Формат JSON используется для преобразования объекта в строку
// чтобы передать его на backend

// JSON (JavaScript Object Notation) – общий формат для представления значений и объектов. 
// JSON используется для обмена данными, когда клиент использует JavaScript


// JavaScript предоставляет методы:
// * JSON.stringify() для преобразования объектов в JSON.
// * JSON.parse() для преобразования JSON обратно в объект.








// !!! JSON.stringify() !!!

// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null
// };

// let studentJSON = JSON.stringify(student);

// console.log(typeof studentJSON); // мы получили строку!
// console.log(studentJSON);


// Метод JSON.stringify(student) берёт объект и преобразует его в строку.

// Полученная строка json называется JSON-форматированным или сериализованным объектом. 
// Мы можем отправить его по сети или поместить в обычное хранилище данных.





// Объект в формате JSON имеет несколько отличий от объектного литерала:

// 1.
// Строки используют двойные кавычки. 
// 'John' становится "John".

// 2.
// Имена свойств объекта также заключаются в двойные кавычки. 
// age:30 становится "age":30.


// JSON поддерживает следующие типы данных:
// Объекты {  }
// Массивы [  ]
// строки,
// числа,
// логические значения true/false,
// null.








// Вложенные объекты поддерживаются и конвертируются автоматически.

// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"]
//   }
// };

// console.log( JSON.stringify(meetup) );








// !!! JSON.parse() !!!

// JSON.parse() - декодирует JSON-строку

// Синтаксис:
// let value = JSON.parse(str);
// str - JSON для преобразования в объект.



// строковый массив
// let numbers = [0, 1, 2, 3];
// console.log( numbers );

// let numbersStringify = JSON.stringify(numbers);
// console.log( numbersStringify );

// let numbersParse = JSON.parse(numbersStringify);
// console.log( numbersParse );


// Вложенный объект:
// let userJSON = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// let user = JSON.parse(userJSON);
// console.log( user.friends[1] ); // 1




// JSON может быть настолько сложным, 
// насколько это необходимо, 
// объекты и массивы могут включать другие объекты и массивы. 
// Но они должны быть в том же JSON-формате.


// Вот типичные ошибки в написанном от руки JSON 
// (иногда приходится писать его для отладки):

// let json = `{
//   name: "John",                     // Ошибка: имя свойства без кавычек
//   "surname": 'Smith',               // Ошибка: одинарные кавычки в значении (должны быть двойными)
//   'isAdmin': false                  // Ошибка: одинарные кавычки в ключе (должны быть двойными)
//   "birthday": new Date(2000, 2, 3), // Ошибка: не допускается конструктор "new", только значения.
//   "friends": [0,1,2,3]              // Здесь всё в порядке
// }`;



// Кроме того, JSON не поддерживает комментарии. 
// Добавление комментария в JSON делает его недействительным.









// Использование reviver

// let value = JSON.parse(str, reviver);
// reviver - Необязательная функция, 
// которая будет вызываться для каждой пары (ключ, значение) 
// и может преобразовывать значение.

// это callback который имеет в аргументах key и value, и return value
// используется для сложного парсинга 

// где-то на сервере в нашей базе данных...
// let user = {
//     id: '555d-444f-663v-43ff',
//     name: "John",                    
//     surname: 'Smith',               
//     isAdmin: false,            
//     birthday: [2000, 2, 3], 
//     friends: [0,1,2,3]              
// };
// запрашиваем нашего юзера
// let userToFrontend = JSON.stringify(user);
// сервер отправляет нам юзера в формате json строки

// const birthdayParser = (key, value) => {
//     if (key === "birthday") {
//         return new Date(value[0], value[1], value[2] )
//     }
//     return value;
// }

// let userToJS = JSON.parse(userToFrontend, birthdayParser);
















// Задачи

// 1
// Работа с JSON.parse
// Дана JSON строка '["Коля", "Вася", "Петя"]'. 
// Преобразуйте ее в массив JavaScript и выведите в консоль "Петя". 

// Работа с JSON.stringify
// Дан объект {a: 'aaa', b: 'bbb'}. 
// Преобразуйте его в JSON. 






// 2
// let todo = {
//   id: 100500,
//   title: 'Learn JSON Format',
//   isCompleted: false,
// };

// let todoJson = JSON.stringify(todo);
// console.log(todoJson);
// console.log(typeof todoJson);

// let todoJs = JSON.parse(todoJson);
// console.log(todoJs);
// console.log(typeof todoJs);

// const todos = [
//   todo,
//   { id: 100498, title: 'Learn HTML', isCompleted: true },
//   { id: 100499, title: 'Learn CSS', isCompleted: true },
// ];
// const todosJson = JSON.stringify(todos);
// console.log(todosJson);
// console.log(JSON.parse(todosJson));