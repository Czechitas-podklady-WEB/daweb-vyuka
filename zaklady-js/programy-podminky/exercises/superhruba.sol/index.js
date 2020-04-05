'use strict';

const pay = Number(prompt('Hodinová mzda:'));
const time = Number(prompt('Velikost uvazku (%):'));

const gross = pay * 8 * 21 * time / 100;
const superGross = Math.ceil(gross + gross * 0.09 + gross * 0.248);
const taxBase = Math.ceil(superGross / 100) * 100;

const net = Math.floor(
  gross - gross * 0.045 - gross * 0.065 - taxBase * 0.15 + 2070
);

document.write(
  'superhrubá: ' + superGross + ' kč, ' +
  'hrubá: ' + gross + ' kč, ' +
  'čistá: ' + net + ' kč'
);


