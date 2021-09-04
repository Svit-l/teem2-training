//1. Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// console.log("type");
// const userInput = prompt("Какое официальное название JavaScript?");
// console.log(userInput);
// if (userInput === "ECMAScript") {
//   alert("Верно!");
// } else {
//   alert("Не знаете? ECMAScript!");
// }
//2. Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10
// const userInput = prompt("Введите количество минут")
// const hours = Math.floor(userInput / 60)
// const min = userInput % 60
// const modHours = String(hours).padStart(2, 0)
// const modMin = String(min).padStart(2,0)
// console.log(`${modHours}:${modMin}`)

//3. Напишите цыкл, который выводит в консоль
//числа от max до min по убыванию

// const max = 50;
// const min = 23;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {
//     //console.log (i % 2);
//     if (i % 2===0) {
//         continue 
//     }  
//     //console.log (i);
// total += i;
// }
// console.log(total);

//4. Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// let message = "";
// const userInput = prompt("Введите логин");
// if (userInput === "Админ") {
//     const userPassword = prompt('Введите пароль');
//     if (userPassword === "Я главный") {
//         message = "Здравствуйте!";
//     } else if (userPassword === null){
//  message = "Отменено";
//     } else {
//          message = "Неверный пароль!";
//     }
// } else if (userInput === null) {
//    message = "Отменено";  
// } else {
//      message = "Я вас не знаю";
// }
// console.log(message);

let message = "";
const userInput = prompt("Введите логин");
switch (userInput) {
    case "Админ":
         const userPassword = prompt('Введите пароль');
        switch (userPassword) {
            case "Я главный":
                message = "Здравствуйте!";
                break;
            case null:
                message = "Отменено";
                break;
            default:
                message = "Неверный пароль!";
        }
        break;
    case null:
        message = "Отменено";
        break;
    default:
        message = "Я вас не знаю";
}
console.log(message);