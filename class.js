// https://learn.javascript.ru/classes

// // Синтаксис
// class User {
//   constructor(name) {
//     this.name = name;
//     this.citysen = "Georgia";
//   }
//   sayHi() {
//     console.log("Hi, " + this.name);
//   }
// }

// // Использование:
// let user = new User("Иван");
// user.sayHi();
// console.log(user);
// Создаётся новый объект.
// constructor запускается с заданным аргументом и сохраняет его в this.name



// console.log(typeof User); // function
// Код функции берётся из метода constructor

































// get/set для объекта
// get – функция без аргументов, которая сработает при чтении свойства,
// set – функция, принимающая один аргумент, вызываемая при присвоении свойства

// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     let nameArr = value.split(" ");
//     this.name = nameArr[0];
//     this.surname = nameArr[1];
//     // [this.name, this.surname] = value.split(" ");
//   },
// };
// console.log(user.fullName)
// user.fullName;
// user.fullName = 'Jack London';
// console.log(user.name)
// console.log(user.surname)
// // set fullName запустится с данным значением

// user.fullName = "Alice Cooper";
// console.log(user.name); // Alice
// console.log(user.surname); // Cooper




























// get/set и защищенные свойства
// class CoffeeMachine {
//   _waterAmount = 0; // счетчик количества воды (защищенное _свойство)

//   set waterAmount(value) { // сеттер для защищенного свойства
//     if (value < 0) throw new Error("Отрицательное количество воды");
//     this._waterAmount = value;
//   }
//   get waterAmount() { // геттер защищенного свойства
//     return this._waterAmount;
//   }

//   constructor(power) {
//     this._power = power;
//   }
// }

// // // создаём новую кофеварку
// let coffeeMachine = new CoffeeMachine(100);
// console.log(coffeeMachine)


// // // устанавливаем количество воды
// coffeeMachine.waterAmount = 10; // Error: Отрицательное количество воды
// console.log(coffeeMachine.waterAmount);
// console.log(coffeeMachine)
















// Наследование от класса
// class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     run(speed) {
//       this.speed = speed;
//       console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
//     stop() {
//       this.speed = 0;
//       console.log(`${this.name} стоит неподвижно.`);
//     }
//   }
  
//   let busya = new Animal("Бусинка");

//   busya.run(40);
//   console.log(busya);
//   busya.stop();
//   console.log(busya);


//  class Horse extends Animal // - синтаксис


//   class Rabbit extends Animal {
//     hide() {
//       console.log(`${this.name} прячется!`);
//     }
//   }
  
//   let rabbit = new Rabbit("Белый кролик");
  
//   rabbit.run(5); // Белый кролик бежит со скоростью 5.
//   rabbit.hide(); // Белый кролик прячется!











// Задача 1.
// Все печатные издания имеют название, год издания, 
// состоят из определённого количества страниц, а ещё могут портиться.

// 1. Создайте базовый класс PrintEditionItem со свойствами:
//     name,
//     releaseDate,
//     pagesCount,
//     state,
//     type.

// Конструктор класса должен принимать название (name), 
// дату выпуска (releaseDate) и количество страниц (pagesCount) в качестве аргумента. 
// Состояние (state) по умолчанию установите равным 100, тип type пока должен быть равен null.


// 2. Испорченное издание можно подклеить и этим улучшить его состояние. 
// Создайте метод fix(), увеличивающий state в полтора раза. 
// Метод не должен принимать аргументов.

// 3. Нельзя улучшить новое издание и бесполезно подклеивать полностью уничтоженное. 
// Создайте «сеттер» для свойства state, 
// принимающий в качестве аргумента 
// новое состояние печатного издания (число от 0 до 100).

// Если новое состояние меньше 0, 
// «сеттер» должен записать в свойство state значение 0. 
// Если новое состояние больше 100, должно быть записано значение 100. 
// В остальных случаях в свойство state записывается переданное в «сеттер» значение.

// 4. Создайте «геттер», который читает значение свойства state.
// Создайте класс Magazine, который будет наследоваться от класса PrintEditionItem. 
// Конструктор класса должен принимать такие же параметры, как и класс-родитель. 
// От базового печатного издания журнал отличается только (type) типом. 
// Значение свойства type равно "magazine".

// 5. Создайте класс Book, наследующийся от класса PrintEditionItem. 
// Конструктор класса должен принимать такие же параметры, 
// как и класс-родитель, а также имя автора книги author. 
// Значение свойства type равно "book".

// 6. Создайте классы NovelBook для романов, 
// FantasticBook для фантастических произведений и DetectiveBook для детективов, 
// наследующиеся от класса Book. 
// Значения свойства type равны "novel", "fantastic" и "detective" соответственно.









// Задача 2. 
// Следующая задача — подготовить библиотеку к работе в цифровом режиме, 
// то есть реализовать возможности хранить книги, выдавать их читателям и принимать обратно.

// 1. Создайте класс Library со свойствами:
// name,
// books.

// Конструктор класса должен принимать название библиотеки name (строка). 
// Значением свойства books должен быть пустой массив.

// 2. Реализуйте метод addBook(book), 
// который будет в качестве аргумента принимать объект (книгу или журнал). 
// Метод должен добавлять книгу в хранилище books, 
// только если состояние state книги больше 30.

// 3. Создайте метод findBookBy(type, value), 
// который в качестве аргумента будет принимать ключ, 
// по которому идёт поиск (тип, автор, название, год выпуска и пр.) и искомое значение. 
// Метод должен возвращать книгу в случае успеха и null, если книга не найдена.

// 4. Создайте метод giveBookByName(bookName), 
// который будет в качестве аргумента принимать название книги. 
// Если запрошенная книга найдена, метод должен удалять книгу 
// из хранилища books и возвращать её. Если книга не была найдена, 
// метод должен возвращать null.