// https://learn.javascript.ru/fetch
// https://learn.javascript.ru/formdata

// дополнительно - https://learn.javascript.ru/blob
// дополнительно - https://habr.com/ru/post/215117/
// дополнительно - https://www.8host.com/blog/obekty-map-i-set-v-javascript/

// Базовый синтаксис:
// let promise = fetch(url, [options])
// url – URL для отправки запроса.
// options – дополнительные параметры: метод, заголовки и так далее.



// let response = await fetch(url);

// if (response.ok) { // если HTTP-статус в диапазоне 200-299 получаем тело ответа
//   let json = await response.json();
// } else {
//   alert("Ошибка HTTP: " + response.status); // status – код статуса HTTP-запроса, например 404.
// }

// response.text() // - вернуть как текст
// response.json() // - декодировать json
// response.formData() // - посмотрим чуть позже
// response.blob() // - бинарные данные с типом (файлы)


// async function getLogin() {
// 	let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// 	let response = await fetch(url);
// 	let commits = await response.json(); // читаем ответ в формате JSON
// 	console(commits);
// }
// getLogin();




// Заголовки ответа
// response.headers
// let response = fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
// response.then(result => {
// 	// result.headers - это Map объект\

//   // console.log(result.headers);
// 	// console.log(result.headers.get('Content-Type'));
// 	for (let [key, value] of result.headers) {
// 	  console.log(`${key} = ${value}`);
// 	}
// });



// Заголовки запроса
// Для установки заголовка запроса в fetch мы можем использовать опцию headers

// let response = fetch(
//   url, // url
//   {    // option
//     headers: { // например заголовки
//       Authentication: 'secret'
//     }
//   }
// );



// Виды запросов - GET, POST, DELETE, PUT
// GET — получение ресурса
// POST — создание ресурса
// PUT — обновление ресурса
// DELETE — удаление ресурса

// Пример POST
// let user = {
//   name: 'John',
//   surname: 'Smith'
// };

// let response = await fetch('/article/fetch/post/user', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json;charset=utf-8'
//   },
//   body: JSON.stringify(user)
// });



// formData - извлекает данные из формы
// const formElem = document.querySelector('#formElem');


// formElem.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const formData = new FormData(formElem);
//   let obj = {};
//   for(let [name, value] of formData) {
//   	obj[name] = value;
// 	}
//   // console.log(formData)
//   // console.log(obj)
//   // let response = await fetch('/article/formdata/post/user-avatar', {
//   //   method: 'POST',
//   //   body: formData
//   // });
//   // let result = await response.json();
// })






// Примеры использования fetch
// Чтение метаданных ответа
// fetch("https://httpbin.org/json").then(response => {
//   console.log(response.status);
//   console.log(response.headers.get("Content-Type"));
// });






// Чтение текста ответа
// fetch("https://httpbin.org/html")
//   .then((response) => response.text())
//   .then((data) => console.log(data));






// Чтение json ответа
// fetch("https://httpbin.org/json", {
//   headers: {
//     Accept: "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((e) => console.log("parsing failed", e));






// Отправка json
// fetch("https://httpbin.org/post", {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json; charset=UTF-8",
//   },
//   body: JSON.stringify({ k: "v" }),
// }).then(response => console.log(response.ok));





// цепочка промисов
// fetch("https://httpbin.org/json")
//   .then((res) => res.json())
//   .then((data) => console.log("request succeeded with JSON response", data))
//   .catch((error) => console.log("request failed", error));





// fetch + await + promise.all
// async function fetchMoviesAndCategories() {
//   const [moviesResponse, categoriesResponse] = await Promise.all([ // запускает запросы параллельно и ждет resolved
//     fetch('/movies'),
//     fetch('/categories')
//   ]);

//   const [movies, categories] = await Promise.all([ // запускает запросы параллельно и ждет resolved
//     moviesResponse.json(),
//     categoriesResponse.json()
//   ]);
//   return [movies, categories];
// }

// const getResult = async () => {
//   try {
//     const [movies, categories] = await fetchMoviesAndCategories();
//     console.log(movies, categories)
//   } catch(e) {
//     console.log(e)
//   }
// }

// fetchMoviesAndCategories().then(([movies, categories]) => {
//   movies;     // список фильмов
//   categories; // список категорий
// }).catch(error => {
// 	console.log(error);
//   // один из запросов завершился с ошибкой
// });












// Архитектура fetch/async в миниатюре
// 1. Нужно получить некие данные, чтобы приложение могло начать работать.
// 2. До получения данных состояние приложения должно быть дефолтным - в ожидании.
// 3. После получения данных нужно инициалилировать, запустить работу приложения.

// Dom-элементы для манипуляций
// const form = document.querySelector("#formElem"),
//       firstName = document.querySelector(".firstName"),
//       lastName = document.querySelector(".lastName"),
//       submitBtn = document.querySelector(".submitBtn");

// // // // состояние приложения
// let appState = 'pending'; // состояние в ожидании
// firstName.disabled = true; // форма
// lastName.disabled = true; // неактивна
// submitBtn.disabled = true; // в ожидании

// // инициализация
// initializeApp();
// async function initializeApp() {

//   // отправили GET запрос серверу

//   const response = await Promise.all([
//     fetch("https://httpbin.org/json"),
//     fetch("https://httpbin.org/json"),
//     fetch("https://httpbin.org/json"),
//     fetch("https://httpbin.org/json"),
//     fetch("https://httpbin.org/json"),
//     fetch("https://httpbin.org/json")
//   ])

//   const responseParse = await Promise.all([
//     response[0].json(),
//     response[1].json(),
//     response[2].json(),
//     response[3].json(),
//     response[4].json(),
//     response[5].json()
//   ])

//   console.log(responseParse[0])





//   // интерпретировали данные
//   // const appData = await response.json();

//   // // произвели рендер
//   // appRender(appData);

//   // перевели приложение в состояние инициализированного
//   appState = 'initialized'; // состояние в ожидании
//   firstName.disabled = false; // форма
//   lastName.disabled = false; // неактивна
//   submitBtn.disabled = false; // в ожидании
// }










// // render
// function appRender(appData) {
//   console.log("Отрендерим это", appData);
// }

// // прослушка
// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   console.log(appState);
// });
























