'use strict';

const plan = [
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
  0, 0, 0, 0,
];

let onTurn = 1;

const squareClick = (e) => {
  const index = e.target.dataset.index;
  if (plan[index] === 0) {
    plan[index] = onTurn;
    if (onTurn === 1) {
      e.target.classList.add('square--cross');
    } else {
      e.target.classList.add('square--circle');
    }

    onTurn = -onTurn;
  }
}

const squareElms = document.querySelectorAll('.square');

for (let i = 0; i < squareElms.length; i += 1) {
  squareElms[i].addEventListener('click', squareClick);
}