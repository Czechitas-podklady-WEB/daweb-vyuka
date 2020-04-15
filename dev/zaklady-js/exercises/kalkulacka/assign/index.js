'use strict';

const calc = (num1, op, num2) => op(num1, num2);

const plus = (num1, num2) => num1 + num2;
const minus = (num1, num2) => num1 - num2;
const times = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

let acc = 0;
let op = null;
let display = 'output';

const numClick = (event) => {
  console.log('doplňte kód');
};

const getValue = () => {
  console.log('doplňte kód');
}

const setAccumulator = (value) => {
  console.log('doplňte kód');
}

const equalsClick = () => {
  console.log('doplňte kód');
}

const clearClick = () => {
  console.log('doplňte kód');
}

const plusClick = () => {
  console.log('doplňte kód');
}

const minusClick = () => {
  console.log('doplňte kód');
}

const timesClick = () => {
  console.log('doplňte kód');
}

const divideClick = () => {
  console.log('doplňte kód');
}

document.querySelector('#btn0').addEventListener('click', numClick);
document.querySelector('#btn1').addEventListener('click', numClick);
document.querySelector('#btn2').addEventListener('click', numClick);
document.querySelector('#btn3').addEventListener('click', numClick);
document.querySelector('#btn4').addEventListener('click', numClick);
document.querySelector('#btn5').addEventListener('click', numClick);
document.querySelector('#btn6').addEventListener('click', numClick);
document.querySelector('#btn7').addEventListener('click', numClick);
document.querySelector('#btn8').addEventListener('click', numClick);
document.querySelector('#btn9').addEventListener('click', numClick);
document.querySelector('#btn-clear').addEventListener('click', clearClick);
document.querySelector('#btn-equals').addEventListener('click', equalsClick);
document.querySelector('#btn-plus').addEventListener('click', plusClick);
document.querySelector('#btn-minus').addEventListener('click', minusClick);
document.querySelector('#btn-times').addEventListener('click', timesClick);
document.querySelector('#btn-divide').addEventListener('click', divideClick);