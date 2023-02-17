// В браузере JavaScript может:

// Добавлять новый HTML-код на страницу, изменять существующее содержимое, модифицировать стили.
// Реагировать на действия пользователя, щелчки мыши, перемещения указателя, нажатия клавиш.
// Отправлять сетевые запросы на удалённые сервера, скачивать и загружать файлы (технологии AJAX и COMET).
// Получать и устанавливать куки, задавать вопросы посетителю, показывать сообщения.
// Запоминать данные на стороне клиента («local storage»).


// VARIABLES

// let box = 5;
// console.log( box ); // 5
// box = box + 3;
// console.log( box ); // 8
// box = box + 3;
// console.log( box ); // 11
// box = box + 3;
// console.log( box ); // 14



// console.log( box ); // 10

// let string = 'Alex';
// let string2 = "Alex";
// let string3 = `Alex`;

// console.log(string);
// console.log(string2);
// console.log(string3);



// let box - слева куда сохранить
// 5 - что сохранить
// = - оператор присвоения


// let userName = 'Alex'; // camelCase
// let modelAuto = 'BMW';

// пытаемся называть переменные осмысленно
// семантически














// var oldVar = 123;
// console.log(message)

// let message; // инициализация переменной
// console.log(message) // undefined
// message = 'Hello'; // присваивается значение
// console.log(message) // 'Hello'

// message = 123; // переприсваивается значение
// console.log(message) // 123

// message = 'Привет'; // переприсваивается значение
// console.log(message) // 'Привет'


// let user = `John`, 
// 		age = 25,
// 		hello = "Hello";

// let user = 'John';
// let age = 25;
// let hello = 'Hello';

// console.log(user, age, hello)



// let 1a; // не может начинаться с цифры
// let my-name; // дефис '-' не разрешён в имени
// let, class, return и function так же недопустимы поскольку они зарезервированы

// let let = 5; // нельзя назвать переменную "let", ошибка!
// let return = 5; // также нельзя назвать переменную "return", ошибка!


// const myBirthday = '18.04.1982'; // - константа, изменить нельзя
// let name; // менять можно name = 'Vlad'
// myBirthday = 50; // изменить уже нельзя

// Несколько хороших правил:

// Используйте легко читаемые имена, такие как userName или shoppingCart.

// Избегайте использования аббревиатур или коротких имён, 
// таких как a, b, c

// Делайте имена максимально описательными и лаконичными. 
// Примеры плохих имён: data и value. Такие имена ничего не говорят. 
// Их можно использовать только в том случае, 
// если из контекста кода очевидно, какие данные хранит переменная.



// const messageConst = 'Hello';
// console.log(messageConst);












// ТИПЫ

// В JavaScript есть 8 основных типов данных
// Семь из них называют «примитивными» типами данных:

// // 1) number для любых чисел: целочисленных или чисел с плавающей точкой
// const number1 = 55; // type number
// const number2 = 55.53; // type number

// 2) bigint для целых чисел огромной длины.
// символ "n" в конце означает, что это BigInt
// const bigInt = 1234567890123456789012345678901234567890n;


// 3) string для строк. Строка может содержать ноль или больше символов.
// '' - длина строки 0 символов
// 'abc' - длина строки 3 символа

// let message = 'hello, world!';
// let message2 = '';

// 4) boolean для true/false.
// let isLoginUser = false; // type boolean
// isLoginUser = true; // type boolean


// 5) null для неизвестных значений – отдельный тип, 
// имеющий одно значение null.

// 6) undefined для неприсвоенных значений – отдельный тип, 
// имеющий одно значение undefined.

// 7) symbol для уникальных идентификаторов.

// И один не является «примитивным» и стоит особняком:
// 8) object для более сложных структур данных.


// let age = 31; // number
// let name = 'Vlad'; // string
// let human = true; // boolean
// let left = null; // null
// let right; // undefined
// let obj = {} // [] object




// Оператор typeof 

// позволяет нам увидеть, какой тип данных сохранён в переменной.
// let user; // undefined
// let userType = typeof user;
// console.log(user); // undefined
// console.log(userType); // "undefined"

// let notResponce = null; 
// let notResponceType = typeof notResponce; // object - ошибка в языке археологическая
// console.log(notResponce);


// let obj = {}; // object
// const message = 'Hello, world'; // type string
// const messageType = typeof message;
// console.log(messageType); // "string"



// let isLogin = false; // boolean
// const pi = 3.14; // number
// let piType = typeof pi;
// console.log(piType); // 'number'


// let isLoginType = typeof isLogin; // 'boolean'

// console.log(piType);
// console.log(isLoginType);

// Имеет две формы: typeof x или typeof(x).
// Возвращает строку с именем типа. Например, "string".
// Для null возвращается "object" – это ошибка в языке, 
// на самом деле это не объект.






// Конвертация типов
// Существует 3 наиболее широко используемых преобразования: 
// строковое, численное и логическое.

// 1) Строковое – Происходит, когда нам нужно что-то вывести. 
// Может быть вызвано с помощью 

	// const pi = 3.14; // 3.14 number
	// const piString = String(pi); // "3.14" string
	// console.log(pi, piString);
	// console.log(typeof pi, typeof piString);

	// const isTrue = true;
	// const isTrueString = String(isTrue);
	// // String(isTrue) => String(true) => "true"

	// console.log(isTrue, isTrueString);
	// console.log(typeof isTrue, typeof isTrueString);

// Для примитивных значений работает очевидным образом.

// 2) Численное – Происходит в математических операциях. 
// Может быть вызвано с помощью Number(value).

	// const piString = '3.14';
	// const piNumber = Number(piString);
	// console.log(piString, piNumber);
	// console.log(typeof piString, typeof piNumber);


	// NaN - не а надо так делать
	// const name = 'Gena';
	// const nameNumber = Number(name);
	// console.log(name, nameNumber);
	// console.log(typeof name, typeof nameNumber);



// 3) Логическое – Происходит в логических операциях. 
// Может быть вызвано с помощью Boolean(value).


	// const someNumber = 0;
	// const someBoolean = Boolean(someNumber);

	// console.log(someNumber, someBoolean);
	// console.log(typeof someNumber, typeof someBoolean);






// let user;
// let notResponce = null;
// let obj = {};
// const message = 'Hello, world';
// let isLogin = false;
// const pi = 3.14;

// Boolean

// undefined == false
// null == false
// '' == false
// 0 == false


// {} == true
// 'Hello, world' == true
// 3.14 == true
// -5 == true

// console.log( Boolean(-5) ) // true





















// Работа с переменными

// Объявите две переменные: admin и name.
// Запишите строку "Джон" в переменную name.
// Скопируйте значение из переменной name в admin.
// Выведите на экран значение admin, используя функцию alert, console.log (должна показать «Джон»).






// Придумайте правильные имена

// Создайте переменную для названия нашей планеты. Как бы вы её назвали?
// Создайте переменную для хранения имени текущего посетителя сайта. 
// Как бы вы назвали такую переменную?





// Какие буквы (заглавные или строчные) использовать для имён констант?
// Рассмотрим следующий код:

// const birthday = '18.04.1982';

// const age = someCode(birthday);
// У нас есть константа birthday, а также age, 
// которая вычисляется при помощи некоторого кода, 
// используя значение из birthday 
// (в данном случае детали не имеют значения, поэтому код не рассматривается).

// Можно ли использовать заглавные буквы для имени birthday? 
// А для age? Или одновременно для обеих переменных?

// const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы?

// const AGE = someCode(BIRTHDAY); // а здесь?





// Конвертируем типы

// Number
// console typeof
// String typeof
// Boolean typeof
// Number typeof