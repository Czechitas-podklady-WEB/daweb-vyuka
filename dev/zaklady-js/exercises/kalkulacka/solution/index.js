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
  const displayElm = document.querySelector('.display');
  const digit = event.target.textContent;

  if (display === 'output' || displayElm.textContent === '0') {
    displayElm.textContent = digit;
  } else {
    displayElm.textContent += event.target.textContent;
  }

  display = 'input';
};

const getValue = () => {
  const displayElm = document.querySelector('.display');
  return Number(displayElm.textContent);
}

const setAccumulator = (value) => {
  acc = value;
  display = 'output';

  const displayElm = document.querySelector('.display');
  displayElm.textContent = value;
}

const equalsClick = () => {
  const value = getValue();

  if (op === null) {
    setAccumulator(value)
  } else {
    setAccumulator(calc(acc, op, value))
    op = null;
  }
}

const clearClick = () => {
  setAccumulator(0);
  op = null;
}

const plusClick = () => {
  equalsClick();
  op = plus;
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