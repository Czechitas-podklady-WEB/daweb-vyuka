'use strict';

console.log('funguju!');

const time = Number(prompt('Čas:'));

setTimeout(() => {
  const alarmElm = document.querySelector('.alarm');
  alarmElm.classList.add('alarm--ring');
  const audio = document.querySelector('audio');
  audio.play();
}, time * 1000);