// https://learn.javascript.ru/recursion
// https://doka.guide/js/recursion/

// классика - возведение в степень
// pow(x, n), которая возводит x в степень n
// цикл - итеративный способ

// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result = result * x;   // умножаем result на x n раз в цикле
//   }
//   return result;
// }
// console.log( pow(2, 3) ); // 8



// функция вызывающая саму себя - рекурсивный способ
// function pow(x, n) {
//   if (n == 1) {
//     return x; // точка остановки
//   } else {
//     return x * pow(x, n - 1); // уходим в глубину рекурсии
//   }
// }

// // console.log( pow(2, 3) ); // 8

// // Стек
// pow(2, 3) = 2 * pow(2, 2) // ... 2 * 4 = 8
// pow(2, 2) = 2 * pow(2, 1) // ... 2 * 2 = 4
// pow(2, 1) = 2			 // 2 затем наверх



























// Рекурсивный обход
// объект сотрудников и их зарплаты
// нужна функция суммы всех зарплат

// let company = {
//   sales: [{
//     name: 'John',
//     salary: 1000
//   }, {
//     name: 'Alice',
//     salary: 600
//   }],
//   development: {
//     sites: [{
//       name: 'Peter',
//       salary: 2000
//     }, {
//       name: 'Alex',
//       salary: 1800
//     }],
//     internals: [{
//       name: 'Jack',
//       salary: 1300
//     }]
//   }
// };

// function sumSalaries(department) {

//   if (Array.isArray(department)) { // случай (1)
//     return department.reduce((acc, current) => acc + current.salary, 0);
//   } else { // случай (2)

//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//     }
//     return sum;
//   }
// }

// console.log(sumSalaries(company))





// Задачи
// 1. Рассчитать сумму натуральных чисел до n
// 2. Рассчитать сумму элементов массива чисел