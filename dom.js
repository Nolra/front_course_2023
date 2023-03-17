// осмысленные данные
// for (var i = 0; i < Things.length; i++) {
// 	Things[i]
// } // циклы позволяют перебирать похожие элементы

// function function_name(argument) {
// 	// body...
// } // возможность совершать действия

// let customNumber = 4564;
// Количество элементов списка
// индекс элемента списка
// данные которые мы хотим показать пользователю (его зарплата)

// let customString = 'df333';
// для передачи данных с сервера
// для передачи данных на сервер
// для текстовых узлов <h1> текстовый узел </h1>
// для значений атрибутов и свойств html 

// let customBoolean = true;
// некоторые инпуты - чекбоксы, радио кнопки
// атрибут disabled у кнопок  

// let customArray = [];
// хранение данных одинаковых, похожих по паттерну (списки)
// работа со списками или группами элементов html





// объекты и их методы
// let user = {
// 	name: 'Alex',
// 	surname: 'Ivanov',
// 	age: 36,
// 	married: false,
// }

// let user2 = {
// 	name: 'Max',
// 	surname: 'Evstropov',
// 	age: 46,
// 	married: false,
// }

// this это констекст ИСПОЛНЕНИЯ функции
// в данном случае это object user

// function getFullName(divider) {
// 	return this.name + divider + this.surname;
// }

// как привязать к контексту?
// console.log(getFullName) // просто инструкция
// user.getFullName = getFullName;
// // user2.getFullName = getFullName;
// console.log(user) // обновленный объект с присвоенным методом (функцией)
// let userFullName = user.getFullName(' ОГО '); // return this.name + ' ' + this.surname;
// console.log(userFullName)

// console.log(user2.getFullName(' aГa '))
// user2.getFullName = getFullName;
// let user2FullName = user2.getFullName(' и '); // return this.name + ' ' + this.surname;

// console.log(userFullName) // Alex ОГО Ivanov
// console.log(user2FullName) // Alex и Ivanov


// user.fullName() // Alex Ivanov
// console.log(user.fullName()) // Alex Ivanov

// user.name // Alex
// user.name // 36


// function someFunc(argument) {
// 	// body...
// }


// arr.forEach(someFunc)


// // callback функции
// function showMessage(sayFunction, name) {
// 	sayFunction(name)
// }

// showMessage(sayHello, 'Илья');
// showMessage(sayBye, 'Илья');
// showMessage(sayHowAreYou, 'Илья');
// showMessage(sayLoveYou, 'Илья');


// // showMessage(
// // 	function(name) {
// // 		console.log(`Hi, ${name}!`)
// // 	}, 'Гена');

// function sayHello(name) {
// 	console.log(`Hello, ${name}!`)
// }

// function sayBye(name) {
// 	console.log(`Goodbye, ${name}!`)
// }

// function sayHowAreYou(name) {
// 	console.log(`How are you, ${name}?`)
// }

// function sayLoveYou(name) {
// 	console.log(`I love you, ${name}!`)
// }











// DOM (Document Object Model), DOM-дерево

// let customWindow = {
// 	BOM: {
// 		location: {},
// 		screen: {},
// 		history: {},
// 	},
// 	JS: {
// 		Object: {},
// 		Array: {},
// 		String: {},
// 		Number: {},
// 	},
// 	document:{}
// }


// document – объект входа. 

// console.log(document)
// console.log(document.body.children)
// console.log(document.body.style)
// document.body.style.backgroundColor = "red";
// console.log(document.body.style)
// document.body.style.background = "red";
// document.body.style.cssText = 'color: red; font-size: 40px;';










// Методы поиска (получить элемент)
// querySelector и querySelectorAll // НУЖНО ЗАПОМНИТЬ
// document.querySelectorAll(css) - возвращает все элементы по css селектору.


// let elementsLi = document.querySelectorAll('.todo-list li'); // возвращает массив

// console.log(elementsLi)

// for (let elem of elementsLi) {
//   console.log(elem.textContent);
// }


// querySelector
// elem.querySelector(css) возвращает первый элемент по css селектору.

// let todoList = document.querySelector('.todo-list'); // возвращает первый элемент по селектору
// let firstLiOnPage = document.querySelector('li');
// подразумеваем, что элемент у нас на странице такой один
// todoList.children[3].textContent = 'САХАР';
// console.log(todoList)
// console.log(firstLiOnPage)





// Реакция на действия пользователя
// let todoList = document.querySelector('.todo-list');

// todoList.onclick = function(event) {
// 	// console.log(this);
// 	console.log(event.target);
// };

// this VS event.target






// event.stopPropodation()




// addEventListener и removeEventListener // НУЖНО ЗАПОМНИТЬ
// element.addEventListener('eventName', functionName) - прослушка события

// let todoList = document.querySelector('.todo-list');

// todoList.addEventListener('click', showThisAndEventTarget);
// todoList.addEventListener('click', showHello);

// function showThisAndEventTarget(event) {
// 	console.log(this);
// 	console.log(event.target);
// };

// function showHello(event) {
// 	console.log('Hello');
// 	todoList.removeEventListener('click', showHello);
// };


// element.removeEventListener('eventName', functionName) - удаление прослушки события



// Для управления классами:
// className – строковое значение, удобно для управления всем набором классов.
// classList – объект с методами add/remove/toggle/contains, 
// удобно для управления отдельными классами.

// let todoList = document.querySelector('.todo-list');

// todoList.addEventListener('click', function(event) {
// 	this.classList.toggle('blablabla');
// });



// console.log(todoList.classList.contains('blablabla'));
// console.log(todoList.classList) // имеет blablabla
// todoList.classList.remove('blablabla');
// console.log(todoList.classList) // blablabla удален
// console.log(todoList.classList.contains('blablabla'));

// element.classList.toggle('active'); // add, remove, toggle

// function validatorEmail(isValid, inputElement) {
// 	if (isValid && inputElement.classList.contains('someChange')) {
// 		inputElement.classList.add('greenGood');
// 		inputElement.classList.remove('redError');
// 	}
// 	if (!isValid && inputElement.classList.contains('someChange')) {
// 		inputElement.classList.remove('greenGood');
// 		inputElement.classList.add('redError');
// 	}
// 	inputElement.classList.toggle('someChange');
// }






// Можно запомнить className (все классы элемента как строка)
// Так же можно запомнить classList (все классы как массив)
// И очень удобен classList.toggle('someClass') очень удобен
// чтобы не мучится с флагами и доп.функции


// function psevdoToggle(someClass) { // псевдо код
// 	if (this.classList.contains(someClass)) {
// 		this.classList.remove(someClass)
// 	} else {
// 		this.classList.add(someClass)
// 	}
// }



// let todoList = document.querySelector('.todo-list');
// console.log(todoList.classList[1]);
// todoList.classList.toggle('active');
// console.log(todoList.className);
// todoList.classList.toggle('active');
// console.log(todoList.className);





// показать - спрятать
// 1) Получаем все элементы и сохраняем их в переменные
// let todoList = document.querySelector('.todo-list');
// let showHideBtn = document.querySelector('.button-show-hide');
// let testItem = document.querySelector('.test');

// // // 2) Прикрепляем прослушку событий
// showHideBtn.addEventListener('click', showHideBlock); // что делает эта функция callback? эта прячет и показывает блок
// testItem.addEventListener('click', changeText); // это меняет текст например


// // // 3) Описали функции для событий
// function showHideBlock(event) {
// 	todoList.classList.toggle('hidden-block'); // скрыть-показать список

// 	showHideBtn.classList.toggle('show-btn'); // изменить стиль кнопки
// 	showHideBtn.classList.toggle('hide-btn'); // изменить стиль кнопки
// }

// function changeText(event) {
// 	console.log('Смена текста');
// 	testItem.textContent = 'Уже купили';
// 	testItem.removeEventListener('click', changeText);
// }


// 1) querySelector - поиск элемента
// 2) addEventListener - прослушка
// 3) Описание callback обработчика события

// show-btn
// hide-btn

// стилизовать - убрать стиль
// поменять текст



// ПРОДОЛЖИМ ЗДЕСЬ




// Другие атрибуты:
// element.getAttribute(attrName); // получить атрибут
// getAttribute - можно запомнить

// let link = document.querySelector('.link');
// let linkHref = link.getAttribute('href');
// console.log(linkHref);
// console.log(link.textContent)
// console.log(link.getAttribute('class'))
// псевдокод
// let link = {
// 	href: "https://www.w3schools.com",
// 	getAttribute: attrName => this[attrName]
// } 




// let link = document.querySelector('.link');
// link.setAttribute('href', '#test');

// 1 аргумент какое свойство объекта
// 2 каким значением заменить
// console.log(link.getAttribute('href'))

// element.getAttribute(attrName);
// element.hasAttribute(attrName);
// element.removeAttribute(attrName);











// innerHTML и outerHTML

// let todoList = document.querySelector('.todo-list');
// // console.log(todoList.children)

// for (let item of todoList.children) {
// 	item.textContent = 'привет'
// }




// console.log(todoList.outerHTML)
// console.log(todoList.textContent)
// todoList.innerHTML = '<div>привет</div>'; // заменит вложенный в элемент html
// todoList.outerHTML = '<div>привет</div>'; // элемент html и всё вложенное в него





// button disabled and input value

// Присваиваем элементы переменным
// let clickMeBtn = document.querySelector('.clickMe');
// let importantInput = document.querySelector('.importantInput');

// // // Вешаем события
// clickMeBtn.addEventListener('click', toggleDisabled);
// clickMeBtn.addEventListener('click', resetInputValue);

// function resetInputValue(event) {
// 	console.log(importantInput.value);
// 	importantInput.value = '';
// }


// // // Описываем функции для событий
// function toggleDisabled(event) {
// 	if (importantInput.hasAttribute('disabled')) {
// 		importantInput.removeAttribute('disabled');
// 	} else {
// 		importantInput.setAttribute('disabled', true);
// 	}
// }
// аналогично
	// if (importantInput.disabled) {
	// 	importantInput.disabled = false
	// } else {
	// 	importantInput.disabled = true
	// }
// }

















// tabs
// 1 - НАШЛИ ЭЛЕМЕНТЫ и СОХРАНИЛИ В ПЕРЕМЕННЫЕ
// let list = document.querySelector('.tabs ul'); // здесь сам элемент ul, содержащий cписок
// const listElements = document.querySelectorAll('.tabs ul li'); // здесь массив <li>
// const infos = document.querySelectorAll('.info'); // здесь массив divs c классом info

// // ПОВЕСИЛИ СОБЫТИЯ
// listElements.forEach((item, index) => {
	// item.addEventListener(
	// 	'click', 
	// 	(event) => showInfo(event.target)
	// );
// });

// ОПИСАЛИ РЕАКЦИИ - КАЛЛБЕКИ
// function showInfo(tab) {
// 	let tabIndex = tab.dataset.tab;
// 	setActiveClass('active', listElements, tabIndex, 'tab'); // скинули всем класс, а активному добавили
// 	setActiveClass('is-show', infos, tabIndex, 'info'); // скинули всем класс, а активному добавили
// }



// функция showInfo должна
// выбирать активный tab и выделять его через active класс
// так же она должна показывать соотвествующий табу ей контент
// остальное нужно деактивировать active и скрывать контент соотвественно


// черный-ящик
// function setActiveClass(someClass, elements, dataValue, dataKey) {
// 	elements.forEach((elem) => {
// 		if (dataValue === elem.dataset[dataKey]) {
// 			elem.classList.add(someClass);
// 		} else {
// 			elem.classList.remove(someClass);
// 		}
// 	});
// }



// function setActiveTabs(activeTab) {
// 	listElements.forEach((tab) => {
// 		if (activeTab === tab.dataset.tab) {
// 			tab.classList.add('active');
// 		} else {
// 			tab.classList.remove('active');
// 		}
// 	});
// }

// function setActiveInfo(activeTab) {
// 	infos.forEach((info) => {
// 		if (activeTab === info.dataset.info) {
// 			info.classList.add('is-show');
// 		} else {
// 			info.classList.remove('is-show');
// 		}
// 	});
// }