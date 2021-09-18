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

function min(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Ввели не число");
    return;
  }
  return Math.min(a, b);
}
console.log(min(9, "строка"));
