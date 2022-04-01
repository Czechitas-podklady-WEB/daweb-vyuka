---
title: Kalkulačka
demand: 2
offerSolution: true
---

:::assign
Naklonujte si [repozitář](https://github.com/Czechitas-podklady-WEB/kalkulacka-zadani) se stránkou, která obsahuje číselník a display jednoduché kalkulačky.

Zařiďte, aby se při kliknutí na libovolné tlačítko na displaji kalkulačky objevila cifra, která je na tlačíku napsaná. Postupujte dle návodu:

1. Nejprve vyrobte funkci s názvem `handleDigitClick`. To bude posluchač, který později navěsíme na všechna tlačítka.
1. Váš posluchač bude mít jeden parametr představující událost. Z vlastnosti `target` tohoto parametru získejte tlačíko, na které bylo kliknuto. Cifru zjístíte z jeho `textContent`.
1. Jakmile znáte cifru, vložte ji jako `textContent` na displej kalkulačky.
1. Pověste váš posluchač na všechna tlačítka s ciframi. 
1. U běžné kalkulačky mačkáním tlačítek postupně sestavujeme nějaké víceciferné číslo. Zařiďte, aby cifry na displeji pribývaly jako na běžné kalkulačce. Také zaříďte, aby se na displej nedalo vložit delší než devíticiferné číslo.
:::

:::solution

```js
const display = document.querySelector('.display');

const handleDigitClick = (event) => {
  const value = event.target.textContent;
  display.textContent += value;
};

document.querySelector('.btn-num:nth-child(1)').addEventListener('click', handleDigitClick);
document.querySelector('.btn-num:nth-child(2)').addEventListener('click', handleDigitClick);
document.querySelector('.btn-num:nth-child(3)').addEventListener('click', handleDigitClick);
document.querySelector('.btn-num:nth-child(4)').addEventListener('click', handleDigitClick);
document.querySelector('.btn-num:nth-child(5)').addEventListener('click', handleDigitClick);
document.querySelector('.btn-num:nth-child(6)').addEventListener('click', handleDigitClick);
document.querySelector('.btn-num:nth-child(7)').addEventListener('click', handleDigitClick);
document.querySelector('.btn-num:nth-child(8)').addEventListener('click', handleDigitClick);
document.querySelector('.btn-num:nth-child(9)').addEventListener('click', handleDigitClick);
document.querySelector('.btn-num:nth-child(10)').addEventListener('click', handleDigitClick);
```
:::
