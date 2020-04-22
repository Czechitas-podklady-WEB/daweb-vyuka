'use strict';

const updateCounter = (num) => {
  const valueElm = document.querySelector('.counter__value');
  valueElm.textContent = String(num).padStart(2, '0');
};

let value = 0;
const btnUp = document.querySelector('.counter__up');
const btnDown = document.querySelector('.counter__down');

btnUp.addEventListener('click', () => {
  if (value < 59) {
    value += 1;
    updateCounter(value);
  }
});

btnDown.addEventListener('click', () => {
  if (value > 0) {
    value -= 1;
    updateCounter(value);
  }
});

updateCounter(value);