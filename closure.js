// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closure
// https://doka.guide/js/closures


// Области видимости
// let a = 5; // глобальная переменная
// {
// 	let b = 17; // локальная переменная
// }




















// function salute(welcomeText) { // глобальная область видимости
//   console.log(welcomeText);
//   console.log(blabla);
// }

// let blabla = "Hello World!"; // на момент salute('Привет')
// salute('Привет'); // область видимости создается при каждом вызове

// blabla = "Fuck World!"; // актуально будет для salute('Здравствуйте')
// salute('Здравствуйте'); // для каждого вызова создается своя область видимости















// Локальные области циклов
// for (const fruit of ['apple', 'pears', 'banana']) { // fruit - локальная переменная блочного уровня видимости
//   console.log(fruit);
// }

// console.log(fruit); // Uncaught ReferenceError: fruit is not defined










// цепочка областей видимости (scope chain)
// let color = 'green';

// function outputColor() {
// 	function displayColor() {
// 		console.log(color); // "green"
// 	}
// 	displayColor();
// }
// outputColor();











// Поднятие (hoisting) функций и переменных
// greet();
// function greet() { // function declaration «перемещаются»(hoisting) в начало текущего контекста
//   console.log('Hello!');
// }

// console.log(width); // undefined
// var width = 500; // hoisting var











// Блочная облать видимости const/let
// if (true) {
//   let subject = "Математика";
// }
// console.log(subject); // 














// Контекст функции. Ключевое слово this

// let myFunc = () => {
//   return this;
// }

// console.log(myFunc()); // глобальный объект
// console.log(this); // глобальный объект










// let userObj = {
//   name: "Alex",
//   age: 27,
//   getAge: function() {
//     return this.age; // this = userObj
//   }
// }

// console.log(userObj.getAge())





// объект myFish (мини-задача)
// let myFish = {
//   fish: 'Треска',
//   getFish: function() {
//   	return this.fish;
//   },
//   getOwnObject: function() {
//   	return this;
//   }
// }





// // вывести в консоль результат выполнения метода getFish
// console.log(myFish.getFish()); // "Треска"
// // вывести в консоль результат выполнения метода getOwnObject
// console.log(myFish.getOwnObject()); // объект myFish

















// Указание контекста функции. Методы call и apply
// let user = { // объект user
//   name: 'Василий',
//   age: 27
// }
// function getUserAge() { // объявление функции getUserAge
//   return this.age;
// }
// let getUserAgeApply = getUserAge.call(user);
// console.log(getUserAgeApply) // 27
// getUserAge - функция
// .call() - метод для вызова функции в контексте
// user - контекст вызова функции
// getUserAgeApply - куда сохраняем return






















// Привязка функции к контексту (метод bind)
// const mouse = {
//   model: 'M100',
// }

// const pc = {
// 	model: 'modern core i5',
// }
  
// // let getModelMouse = mouse.getModel; // сохраним в переменную ссылку на метод
// // console.log(getModelMouse()); // контекст потерян

// function getModel() {
//   return this.model;
// }

// let getModelMouse = getModel.bind(mouse); // привязка функции к контексту
// let getModelPC = getModel.bind(pc); // привязка функции к контексту

// console.log(getModelMouse())
// console.log(mouse)

// console.log(getModelPC())
// console.log(pc)









// Мини-задача
// const user0001 = { // даны два объекта
//   name: 'Афанасий',
//   score: 1300
// }
// const user0002 = {
//   name: 'Анастасия',
//   score: 2500
// }

// function changeScore(amount) {
// 	return this.score + amount;
// }

// let changeScoreUser0001 = changeScore.bind(user0001);
// let changeScoreUser0002 = changeScore.bind(user0002);

// console.log(changeScoreUser0001(200));
// console.log(changeScoreUser0002(500));
// 1 написать функцию changeScore прибавляющую к score объекта user значение amount

// 2 привязать каждый объект к функции, сохранив в отдельные переменные (changeScoreUser0001,changeScoreUser0002)

// 3 вызвать функции с привязанным контекстом и проверить результат
































// const user0001 = {
//   name: 'Афанасий',
//   score: 1300
// }
// const user0002 = {
//   name: 'Анастасия',
//   score: 2500
// }

// function changeScore(amount) {
//   this.score = this.score + amount;
// }


// let changeScoreUser0001 = changeScore.bind(user0001);
// let changeScoreUser0002 = changeScore.bind(user0002);

// changeScoreUser0001(400);
// changeScoreUser0002(300);

// console.log(user0001, user0002);









































// Замыкания - функция внутри другой функции
// Пример #1
// function createCalcFunction(number) {
// 	return function() {
// 		console.log(1000 * number)
// 	}
// }

// const calc42 = createCalcFunction(42); // замкнули значение
// console.log(calc42)
// calc42();





















// Пример #2
// function createIncrementor(number1) {
// 	return function(number2) {
// 		return number1 + number2;
// 	}
// }

// const addOne = createIncrementor(1); // замкнули значение
// console.log(addOne(10));
// const addTen = createIncrementor(10); // замкнули значение
// console.log(addTen(15));







// Пример #3
// function counter() { // фабрика счетчиков

//   let state = 0; // локальная переменная (каждый вызов counter() ее создаст)

//   function increase() { // функция увеличить state
//     state++
//   };
//   function decrease() { // функция уменьшить state
//     state--
//   };
//   function valueOf() { // показать state в консоли
//     console.log(state)
//   };

//   return { 		// возвращаем объект который содержит три функции
//     increase,	// которые в момент вызова counter схватывают уникальный state
//     decrease,	// независимое лексическое окружение от других вызовов counter()
//     valueOf,
//   }
// }

// const ticktock = counter();
// ticktock.increase()
// ticktock.valueOf()
// // // 1
// ticktock.increase()
// ticktock.valueOf()
// // // 2
// ticktock.decrease()
// ticktock.valueOf()
// // 1






// const tick1 = counter();
// const tick2 = counter();

// tick1.valueOf() // 0
// tick2.valueOf() // 0

// tick1.increase()
// tick1.valueOf() // 1
// tick2.valueOf() // 0





























// Мини-задача создать html url generator
// 1 - создать функцию urlGenerator, использующую замыкание
// 2 - urlGenerator должен возвращать строку `https://${url}.${domain}`
// 3 - получать значение url и domain из html
// 4 - выводить обе ссылки в html - https://google.com и https://google.org
// 5 - внедрить отлов ошибок
























































	// const addButton = document.querySelector('.url-generator__add');
	// const urlInput = document.querySelector('input[name="url"]');
	// const domainInput = document.querySelector('input[name="domain"]');
	// const linksList = document.querySelector('.url-generator__links');

	// function urlGenerator(domain) {
	// 	return function(url) {
	// 		return `https://${url}.${domain}`;
	// 	}
	// }

	// addButton.addEventListener('click', function() {
		
	// 	try {

	// 		if (!(urlInput.value && domainInput.value)) {
	// 			throw new SyntaxError("Данные неполны");
	// 		} 



	// 		const geneator = urlGenerator(domainInput.value);
	// 		const url = geneator(urlInput.value);

	// 		const a = document.createElement("a");
	// 		a.href = url;
	// 		a.innerHTML = url;
	// 		a.className = "url-generator__link";
	// 		linksList.append(a);

	// 		domainInput.value = "";
	// 		urlInput.value = "";

	// 	} catch(error) {

	// 		if (error.message === "Данные неполны" ) {
	// 			alert('Заполните оба поля domain и url');
	// 		} else {
	// 			throw error;//проброс
	// 		}

	// 	}
	// });


