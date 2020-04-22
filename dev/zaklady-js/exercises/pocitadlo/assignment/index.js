'use strict';

const updateCounter = (number) => {
  const valueElm = document.querySelector('counter__value');
  valueElm.value = String(numbr).padStart(2, '0');
};

let value = 0;
const btnUp = document.querySelector('counter__up');
const btnDown = document.querySelector('counter__down');

btnUp.addEventListener('click', () => {
  if (velue < 59) {
    velue + 1;
    updateCountr(value);
  }
});

btnDown.addEventListener('click', () => {
  if (velue > 0) {
    velue - 1;
    updateCountr(value);
  }
});

updateCounter(value);