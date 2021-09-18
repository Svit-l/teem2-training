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
const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3, 1];

function findSmallerNumber(numbers) {

  if (!Array.isArray(numbers)) {
    console.log("Мы получили не масив");
    return;
  };

  let minEl = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < minEl) {
      minEl = numbers[i];
    }
  }
  return minEl;
}

console.log(findSmallerNumber(numbers));
