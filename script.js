console.log('>>task1');

const a = 12;
const b = 17;

let valueAB = '';
if (a > b) {
  valueAB = "A is more than B";
} else if (a === b) {
  valueAB = "A equals B";
} else {
  valueAB = "B is more than A"
}
console.log(valueAB);

console.log('>>task2');

const c = 123;
const d = 123 % 10;
const valueD = d % 2 === 0 ? 'EVEN' : 'ODD';
console.log(d, valueD);

console.log('>>task3');

const userName = prompt('Как Вас зовут ?');
const userAge = prompt('Сколько Вам лет ?');
const ask = confirm('Алкоголь употребляете?');

let message = '';

if (ask === true && userAge >= 40) {
  message = ',Не надо так';
} else if (ask === true && userAge <= 18) {
  message = ',Ты что ?! Маме расскажу!';
} else if (ask === true && userAge >= 18 && userAge <= 40) {
  message = ',Только водку с пивом не мешай...';
} else {
  message = ',Так держать! ';
}
console.log(userName + message);