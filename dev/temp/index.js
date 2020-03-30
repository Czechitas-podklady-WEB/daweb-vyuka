'use strict';

const btnClick = (event) => {
  const displayElm = document.querySelector('.display');
  displayElm.textContent += event.target.textContent;
};

document.querySelector('#btn0').addEventListener('click', btnClick);
document.querySelector('#btn1').addEventListener('click', btnClick);
document.querySelector('#btn2').addEventListener('click', btnClick);
document.querySelector('#btn3').addEventListener('click', btnClick);
document.querySelector('#btn4').addEventListener('click', btnClick);
document.querySelector('#btn5').addEventListener('click', btnClick);
document.querySelector('#btn6').addEventListener('click', btnClick);
document.querySelector('#btn7').addEventListener('click', btnClick);
document.querySelector('#btn8').addEventListener('click', btnClick);
document.querySelector('#btn9').addEventListener('click', btnClick);
