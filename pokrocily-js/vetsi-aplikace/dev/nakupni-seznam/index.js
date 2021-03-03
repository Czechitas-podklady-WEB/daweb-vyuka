'use strict';

const ShoppingItem = (props) => {
  return `
    <div class="item">
      <span class="item__name">${props.name}</span>
      <span class="item__amount">${props.amount}</span>
    </div>
  `;
};

const ShoppingList = (props) => {
  let result = '<div class="shopping-list">';

  for (let i = 0; i < props.items.length; i += 1) {
    result += ShoppingItem(props.items[i]);
  }

  result += '</div>';
  return result;
};

const list = [
  { name: 'mrkev', amount: '3ks' },
  { name: 'paprika', amount: '2ks' },
  { name: 'cibule', amount: '2ks' },
  { name: 'čínské zelí', amount: '1ks' },
  { name: 'arašídy', amount: '250g' },
  { name: 'sojová omáčka', amount: '1ks' },
];

const mainElm = document.querySelector('main');
mainElm.innerHTML = ShoppingList({ items: list });

const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', () => {
  const nameInput = document.querySelector('#name-input');
  const amountInput = document.querySelector('#amount-input');

  list.push({ name: nameInput.value, amount: amountInput.value });

  nameInput.value = '';
  amountInput.value = '';

  mainElm.innerHTML = ShoppingList({ items: list });

  nameInput.focus();
});
