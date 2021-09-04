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
const userInput = prompt("Введите количество минут")
const hours = Math.floor(userInput / 60)
const min = userInput % 60
const modHours = String(hours).padStart(2, 0)
const modMin = String(min).padStart(2,0)
console.log(`${modHours}:${modMin}`)

