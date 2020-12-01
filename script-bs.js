/* 1 */
let age = prompt('What is your age?');
console.log('Hello, I\'m ' + age + 'years old');
/* 2 */
const year = 2020;
const calcAge = year - prompt('When you were born?');
console.log(calcAge);
/* 3 */
/* Такий же запис змінної як і в попередній задачі зберігав результат як 'string' а не число... тому використав 'number'*/
const length = Number(prompt('Length of the rectangle'));
const width = Number(prompt('Width of the rectangle'));
const perimeter = (length + width) *2;
console.log(perimeter);
/* 4 */
const radius = prompt('What\'s the radius');
const square = 3.14 * (radius * radius);
console.log('The square of the circle is ' + square);
/*5 */
let speed = 50;
let time = prompt('How much time left to destination?');
let distance = speed * time;
console.log(distance);
/* 6 */
let unit = 'mile';
if (unit === 'mile'){
    distance = speed * time * 1.6;
    console.log('The distance is ' + distance + ' ' + unit + 's');
} else {
    distance = speed * time / 1.6;
    console.log('The distance is ' + distance + ' ' + unit + 's');
}
/* 7 */
let cash = prompt('How much money do you have?');
let price = prompt('What\'s the price of 1 liter of fuel?');
let fuelQty = Math.round(cash / price);
let balance = cash - (fuelQty * price);
console.log('You can buy ' + fuelQty + ' liters of fuel and your ending balance will be ' + balance + ' UAH');






