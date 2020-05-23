'use strict';

const menuItemTemplate = Handlebars.compile(
  document.querySelector('#menu-item-template').innerHTML
);

const renderMenuItem = (item) => {
  const helperELm = document.createElement('div');
  helperELm.innerHTML = menuItemTemplate(item);
  return helperELm.children[0];
};

const menu = [
  {
    title: 'Telecí hanger steak',
    info: 'Tymiánový porto demiglace, květákové pyré, ragú ze žluté řepy s bylinkami',
    price: 299,
  },
  {
    title: 'Grilované kuřecí stripsy',
    info: 'Stehenní kuřecí stripsy marinované v bílém jogurtu s limetkou a kurkumou, máslový kuskus s mátou, lístky rukoly, bylinkový dip',
    price: 169,
  },
  {
    title: 'Quesadilla s kuřecím masem',
    info: 'Se sýrem cheddar, jalapenos papričkami a bbq omáčkou, malý listový salátek, česnekový dip',
    price: 159,
  },
  {
    title: 'Čočka na kyselo',
    info: 'Uzená krkovice, sázené vejce, kyselá okurka, cibulka smažená v sádle',
    price: 149,
  },
];

const menuElm = document.querySelector('.menu');
for (let i = 0; i < menu.length; i++) {
  menuElm.appendChild(renderMenuItem(menu[i]));
}
