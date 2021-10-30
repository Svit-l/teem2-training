// Задача №1
//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// // первый способ
// // styles[1] = 'Классика';

// // второй способ
// // styles.splice(1, 1, 'Классика');

// // проверка индекса
// const elementIndex = styles.indexOf('Блюз');
// if (elementIndex >= 0) {
//     styles.splice(elementIndex, 1, 'Классика');
// }

// console.log(styles.shift());

// styles.unshift('Рэп', 'Регги');
// console.log(styles);

//Напиши функцию min(a, b), которая возвращает
//меньшее из чисел a, b
//нужно добавить проверку, что функция получает числа

// function min(a, b) {
//   if (a < b) {
//     return a;
//   }
//   return b;
// }
// console.log(min(2, 6));

// function min(a, b) {
//   return a < b ? a : b;
// }
// console.log(min(9, 6));

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     console.log("Ввели не число");
//     return;
//   }
//   return Math.min(a, b);
// }
// console.log(min(9, "строка"));

//Напишите функцию logItems(array) которая принимает
//массив и использует цикл for, который для каждого
//элемента массива будет выводить сообщение в формате
//<номер элемента> - <значение элемента>
//Нумерация элементов должна начинаться с 1.
//['Джаз', 'Блюз', 'Рок-н-ролл', 'Регги', 'Рэп']

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i+1}-${array[i]}`);
//   }
// }
// logItems(['Джаз', 'Блюз', 'Рок-н-ролл', 'Регги', 'Рэп']);

//Напиши функцию findSmallerNumber(numbers)
//которая ищет самое маленькое число в массиве
//Добавь проверку что функция получает массив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3, 1];

// function findSmallerNumber(numbers) {

//   if (!Array.isArray(numbers)) {
//     console.log("Мы получили не масив");
//     return;
//   };

//   let minEl = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < minEl) {
//       minEl = numbers[i];
//     }
//   }
//   return minEl;
// }

// console.log(findSmallerNumber(numbers));

// Task 3-1
// const styles = [
//   { name: "Джаз", engl: "jazz", number: 1 },
//   { name: "Блюз", engl: "blues", number: 2 },
//   { name: "Рок-н-ролл", engl: "rock 'n' roll", number: 3 },
//   { name: "Регги", engl: "reggae", number: 4 },
//   { name: "Рэп", engl: "rap", number: 5 },
// ];

// function logStyles(styles) {
//   for (const { name, engl, number } of styles) {
//     console.log(
//       `Название ${name}, Название на английском ${engl}, номер ${number}`
//     );
//   }
// }

// logStyles(styles);

// Task 4
//Напиши функцию caculculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

// function caculculateAverage(...numbers) {
//   let total = 0;
//   let count = 0;
//   for (const number of numbers) {
//     if (typeof number !== "number") {
//       console.log("Это не число");
//       continue;
//     }
//     total += number;
//     count += 1;
//   }

//   return total / count;
// }

// console.log(caculculateAverage(2, 5, 35, 56, 12, 24, 7, 80, 3, 1, "kll"));

//Напиши функцию findLongestWord(string)
//которая принимает произвольную строку
//состоящую только из слов разделенных
//пробелом (параметр string)
//и возвращает самое длинное слово в этой строке

// function findLongestWord(string) {
//     const words = string.split(" ")
//     let longestWord = words[0]
//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word
//         }
//     }
//     return longestWord
// }

// console.log(findLongestWord('которая принимает произвольную строку'));

//Напишите функцию findTheColor()
//которая принимает название цвета
//определяет его наличие в массиве
//если цвет есть, усталавливет его как фон документа
//если цвета нет выводит console.error('Такой цвет не найден');
//и устанавливает цвет документа красный
// document.body.style.background = 'red';
// const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon']

// function findTheColor (color) {
// if (colors.includes(color)) {
//     document.body.style.background = color;
//     return
// }
// document.body.style.background = 'red'
// return

//     document.body.style.background = colors.includes(color) ? color : 'red';

//     if (!colors.includes(color)) {
//         console.error('Такой цвет не найден');
//     }
// }

// findTheColor('fff')

//Напишите скрипт который заменяет регистр каждого символа
//в стороке на противоположный
//Например 'JavaScript' должен вернуть 'jAVAsCRIPT'

//  02-10-2021
//++++++++++++++++++++++Task1
// Напиши класс Client котрорый создает объект
// со свойствами login email
// Объяви приватные свойства #login #email,
// доступ к которым сделай через геттер и сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get clientData() {
//     return {
//       login: this.#login,
//       email: this.#email,
//     };
//   }
//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const mangoClient = new Client("Mango", "mango@gmail.com");
// mangoClient.changeEmail = "sobaka@gmail.com";
// console.log(mangoClient.clientData);
// console.log(mangoClient.__proto__ === Client.prototype);
// console.log(Client.__proto__ === Function.prototype);

// ++++++++++++++++++++++++++++++task 2

// const vehicles = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];

//1.Реализовать фильтр по свойству amount и получить
//только название модели
// const getAvailableCarNames = (cars, value) => {
//   return cars.filter(({amount}) => amount > value).map(({model}) => model);
// }

// const getAvailableCarNames = (cars, value) => cars.filter(car => car.amount > value);
// const getAvailableCarNames = (cars, value) => {
//   return cars.reduce((acc, car) => {
//     if (car.amount > value) {
//       // acc.push(car.model);
//       return [...acc, car.model]
//     }
//     return acc;
//   }, []);
// }
// console.table(getAvailableCarNames(vehicles, 12));

// ++++++++++++++++++++++++++++++task 3

//Получить машины на распродаже и сортировать по убыванию цены
// const getSortedCarsOnSale = (cars) => {
//   return cars.filter(({onSale}) => !onSale).sort((prevCar, nextCar) => nextCar.price - prevCar.price)
// }

// console.table(getSortedCarsOnSale(vehicles));

// ++++++++++++++++++++++++++++++task 4

//Необходимо написать функцию (isEqualSymbols), принимающую
//в аргументах две строки и возвращающую true, если эти строки
//состоят из идентичных букв и false в противном случае.

// const isEqualSymbols = (str1, str2) => {
//   const stringToArray1 = str1
//     .split("")
//     .filter((item, index, array) => array.indexOf(item) === index);
//   const stringToArray2 = [...str2].filter(
//     (item, index, array) => array.indexOf(item) === index
//   );
//   if (stringToArray1.length !== stringToArray2.length) return false;

//   for (let i = 0; i < stringToArray1.length; i++) {
//     if (!stringToArray1.includes(stringToArray2[i])) return false;
//   }
//   return true;
// };
// console.log(isEqualSymbols("кот", "ток"));
// console.log(isEqualSymbols("кот", "тик"));

// isEqualSymbols('кот', 'ток'); // выведет true
// isEqualSymbols('кот', 'тик'); // выведет false
