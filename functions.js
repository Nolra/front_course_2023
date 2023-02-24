// 1) Function Declaration
// function - ключевое слово для объявления
// someChange - имя функции
// параметры, через, запятую - аргументы
// {} - тело функции
// все вместе это описание функции


// function someChange(параметры, через, запятую) {
//   /* тело, код функции */
// }


// раньше

// function washMashine( thing1, thing2 ) {
//  // const washThings = 'washing: ' + thing1 + ',' + thing2 + '.'; // раньше
//  return `washing: ${thing1}, ${thing2}`;
// } // описание функции

// const washThings1 = washMashine('кроссовки', 'шляпа'); // вызов функции
// // 'washing: кроссовки, шляпа'
// const washThings2 = washMashine('рубашку', 'футболки'); // вызов функции
// // 'washing: рубашку, футболки'
// console.log(washThings1, washThings2)
// console.log(typeof washThings1, typeof washThings2)
































// function sumAandB(a, b) {
// 	console.log(a,b)
//  return a + b;
// }

// const sumAB = sumAandB(6, 5);



// console.log(sumAandB(44,99));









// function sumAB(a, b) {
//  console.log(a + b);
// }

// showGreeting();
// sumAandB();
// sumAB(2, 3); // 5





// function showMessage() {
//  let message = 'Hello World';
//  console.log(message);
//  return 'showMessage is called'
// }

// showMessage(); // просто выведет в консоль 'Hello World'

// const resultShowMessageReturn = showMessage();
// console.log( resultShowMessageReturn );





// function summ(a,b) {
// 	return a + b;
// }

// let myMoney = summ(500, 200) // 700
// let yourMoney = summ(15, 5); // 20

// let ourMoney = myMoney + yourMoney; // 700 + 20

// console.log(myMoney,yourMoney,ourMoney); // 700 20 720














// function greetName(name) { // нашли функцию
//  console.log(`Hello ${name}`); // ищем name
//  console.log('Hello ' + name); // аналогично
//  console.log("Hello ${name}"); // неверно
// }

// greetName('Vasya'); // 1 вызвали функцию





// let a = 5;
// let b = 10;
// console.log(`sum = ${a > 10 ? a : b}`);

// a > 10 // if cond
// 	? a // if cond true
// 	: b // else


// function anyName( firstName ) {
//  console.log(firstName);
// }

// anyName('Petya');
// console.log(firstName);





// дефолтное значение "="
// на случай, если атрибут не передан
// function sayHello(firstName = 'Unknow', secondName = 'User') {
//  console.log(`Hello ${firstName} ${secondName}`);
// }
// sayHello('max');



// sayHello('Vasya'); // Hello Vasya
// sayHello(); // Hello Unknow User

// function getSum(a, b) {
//  return a + b;
// }

// let sumSum = getSum(10, 2) + getSum(5, 2);
// console.log(sumSum);


// console.log(getSum('Hello ', 'World'));





// let wallet = 100; // 6 здесь теперь уже 60

// // описание функции оплаты не чистая функция
// function paid(orderSum) { // 1 сюда попадает 40
//  if (wallet >= orderSum) { // 2 здесь проверяется что 100 >= 40
//    changeWallet(orderSum); // 3 здесь мы вызываем changeWallet
//    return 'Куплено'; // 8 вернуть строку Куплено
//  }
//  return 'Больше нет деник';
// }

// // описание функции уменьшения деняг (служебная для paid) не чистая
// function changeWallet(changeSum) {  // 4 сюда попадает 40
//  wallet = wallet - changeSum;				// 5 здесь перезаписывается wallet
//  console.log(`Balance: ${wallet}`); // 7 вывести в консоль Balance: 60
// }

// console.log( paid(40) ); // 9 вывести в консоль Куплено 60
// console.log( paid(20) ); // Куплено 40
// console.log( paid(10) ); // Куплено 30
// console.log( paid(30) ); // Куплено 0
// console.log( paid(3) );  // больше нет денег

// console.log(paid(150));
// console.log(paid(40));
// console.log(paid(20));







//Function Expression
// let sayHi = function ( ) {
//  console.log('Hello');
//  return 12345
// };

// console.log(sayHi());



























// function function_name(argument) {
// 	// body...
// 	return argument
// }

// let returnResult = function_name('Hello,world!');
// console.log(returnResult) // 'Hello,world!'



// function square(a) {
// 	return a * a;
// }

// let square = (a) => {
// 	console.log(a)
// 	return a * a;
// }

// let square = a => a * a;
// console.log( square,square(5) )





// console.log(square(25))

// let AorB = (a,b) => a ? a : b;


// функции функции в чем? 
// 1. блок кода! 
// -способ организации, 
// -повторное использование, 
// -избегание копипасты, 
// -самодокументируемость, 
// -читаемость
// 2. возвращение значение (вычисление) (=> и return)
// 3. ДЕЙСТВИЕ! что сделать?! это алгоритмика
// - просто что-то сделать
// - и отреагировать! то есть callback function

// console.log(
// 	AorB(255,5200)
// )






// let inputA = document.querySelector('.inputA');
// let inputB = document.querySelector('.inputB');
// let resultBtn = document.querySelector('.resultBtn');


// resultBtn.addEventListener(
// 	'click',
// 	function(event) {

// 		AorB( 
// 			Number(inputA.value), 
// 			Number(inputB.value) 
// 		)


// 	}
// )






// 2) Function Expression функциональное выражение


// let sayHi = function(stringHi) {
//   console.log( stringHi );
// };
// sayHi('Привет');



// // Мы можем скопировать функцию в другую переменную:

// let sayHi = function() {   // (1) создаём
//   console.log( "Привет" );
// }

// let func = sayHi;    // (2) копируем

// func(); // Привет    // (3) вызываем копию (работает)!
// sayHi(); // Привет   //     прежняя тоже работает (почему бы нет)
// console.log(func,sayHi)










// Arrows Function - стрелочные функции

// function function_name1(argument) {
// 	// body...
// }

// let function_name2 = function(argument) {
// 	// body...
// }

// let sum = (arg1, arg2) => arg1 + arg2;
// let sumResult = sum(5,7); // 12
// console.log(sumResult)










// const func1 = (arg1, arg2) => arg1 + arg2;




// const devision = (arg1, arg2) => (
// 	arg2 === 0 
// 		? 'Devision by zero' 
// 		: arg1 / arg2
// );
// console.log(devision(50,10))
// console.log(devision(50,0))

// const devision = (arg1, arg2) => {
// 	if (arg2 === 0 ) {
// 		return 'Devision by zero'
// 	} else {
// 		return arg1 / arg2
// 	}
// };










// const double = n => n * 2;
// console.log(double(5))

// const sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
//   const result = a + b;
//   return result; // если мы используем фигурные скобки, то нам нужно явно указать "return"
// };

// const sumAB = (a, b) => a + b;

// console.log( sum(1, 2) ); // 3











// Callback functions
// function sayHello(name) { // 
//   console.log(`Hello ${name}`);
// }

// function sayGoodBye(name) {
//   console.log(`GoodBye ${name}`);
// }

// function errorShow(name) {
//   console.log(`У вас ошибка, уважаемый ${name}`);
// }

// function showMessage(callbackSayBLABLABLA, namePerson) {  // 2 начинается инструкция с нашими параметрами
//   callbackSayBLABLABLA(namePerson); // callbackSayBLABLABLA это sayHello // namePerson это 'Ivan'
// }

// showMessage(sayHello, 'Ivan'); // 1 - вызов showMessage с двумя аргументами
// // первый аргумент - описание функции sayHello
// // второй аргумент - 'Ivan'



// showMessage(sayGoodBye, 'Irina');






// function sayGoodBye(name) {
//   console.log(`GoodBye ${name}`);
// }

// function errorShow(name) {
//   console.log(`У вас ошибка, уважаемый ${name}`);
// }

// function sayHello(name) { // 3 передаем сюда 'Ivan'
//   console.log(`Hello ${name}`); // 4 вызываем консль
// }

// function showMessage(callback, personName) { // 2 поставляем на место аргументов данные переданные
// 	callback(personName) // получаем тут sayHello('Ivan')
// }


// showMessage(sayHello, 'Ivan'); // 1 вызов showMessage c аргументами
// // первый - описание функции sayHello
// // второй - строка (типо имя)


// showMessage(sayGoodBye, 'Irina');
// showMessage(errorShow, 'Irina');










// showMessage((name) => {
//   console.log(`How are you, ${name}`);
// }, 'Ivan');





// декларация
// function_name()// прекрасно отработает
// function function_name(argument) {
// 	// body...
// 	return argument
// }
// function_name('someArgument')



// выражение
// sum()//ошибка
// let sum = function(num1,num2) {
// 	// body...
// 	return num1 + num2; 
// };

// let sum2 = (num1,num2) => num1 + num2;






// Итого
// Функции – это значения. Они могут быть присвоены, скопированы или объявлены в любом месте кода.
// Если функция объявлена как отдельная инструкция в основном потоке кода, то это Function Declaration.
// Если функция была создана как часть выражения, то считается, что эта функция объявлена при помощи Function Expression.
// Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.
// Функции, объявленные при помощи Function Expression, создаются, только когда поток выполнения достигает их.












// Напишите функцию detect_data_type(value), которая принимает аргумент и возвращает тип.

// function detect_data_type(value) {    ...ваш код...};
// document.writeln(detect_data_type(7)); 
// number document.writeln(detect_data_type('wm-school')); 
// string document.writeln(detect_data_type(false)); // boolean






// Задача
// Напишем функцию, которая будет проверять тип данных и если
// это будет строка, то проверять сколько в ней символов и выводить результат в console.log,
// если это будет число, то нужно переводить в строку и выводить результат в console.log количество символов
// после того как мы вывели количество символов нужно вывести 
// символ за символом в консоль в формате ('abc') 1 - 'a', 2 - 'b', 3 - 'c'
// если это что-то другое, то console.log должен сообщить что это неверный тип данных

// реализуйте его во всех трех синтаксисах функций
// в чем разница между ними?







// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// Если одно из трех   значений число строка или boolean то делать следующее
// если строка то снова проверив рандом на три части использовать три разных метода работы со строками
// если число то три разных метода работы с числами
// если булево значение то преобразование к разным другим типам



