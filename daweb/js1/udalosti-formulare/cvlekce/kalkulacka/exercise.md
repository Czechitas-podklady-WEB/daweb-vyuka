---
title: Kalkulačka
lead: 'Oživte kalkulačku.'
demand: 2
context: lekce
solutionAccess: protected
---

Vytvořte si repozitář ze šablony [cviceni-kalkulacka](https://github.com/Czechitas-podklady-WEB/cviceni-kalkulacka) se stránkou, která obsahuje číselník a displej jednoduché kalkulačky.

Zařiďte, aby se při kliknutí na libovolné tlačítko na displeji kalkulačky objevila cifra, která je na tlačíku napsaná. Postupujte dle návodu:

::fig[Kalkulačka]{src=assets/kalkulacka.gif}

1. Nejprve vyrobte funkci s názvem `handleDigitClick`. To bude posluchač, který později navěsíme na všechna tlačítka.
1. Váš posluchač bude mít jeden parametr představující událost. Z vlastnosti `target` tohoto parametru získejte tlačíko, na které bylo kliknuto. Cifru zjístíte z jeho `textContent`.
1. Jakmile znáte cifru, vložte ji jako `textContent` na displej kalkulačky.
1. Pověste váš posluchač na všechna tlačítka s ciframi.
1. U běžné kalkulačky mačkáním tlačítek postupně sestavujeme nějaké víceciferné číslo. Zařiďte, aby cifry na displeji přibývaly jako na běžné kalkulačce (tj. nově přidaná cifra se přidá doprava, jako je na animaci výše). Také zaříďte, aby se na displej nedalo vložit delší než devíticiferné číslo.

#### Bonus

- Pomocí podmínky `if` zařiďte, aby číslo na displeji nezačínalo nulou, ledaže je tam nula samotná.

:::solution

```js
const display = document.querySelector('.display');

const handleDigitClick = (event) => {
  if (display.textContent.length >= 9) {
    return; // Uživatel se pokouší zadat delší číslo, než kolik máme číslic na displeji – nedovolíme mu to.
  }
  const digit = event.target.textContent;
  display.textContent += digit;
};

document.querySelector('#btn-0').addEventListener('click', handleDigitClick);
document.querySelector('#btn-1').addEventListener('click', handleDigitClick);
document.querySelector('#btn-2').addEventListener('click', handleDigitClick);
document.querySelector('#btn-3').addEventListener('click', handleDigitClick);
document.querySelector('#btn-4').addEventListener('click', handleDigitClick);
document.querySelector('#btn-5').addEventListener('click', handleDigitClick);
document.querySelector('#btn-6').addEventListener('click', handleDigitClick);
document.querySelector('#btn-7').addEventListener('click', handleDigitClick);
document.querySelector('#btn-8').addEventListener('click', handleDigitClick);
document.querySelector('#btn-9').addEventListener('click', handleDigitClick);
```

#### Bonus

```js
const handleDigitClick = (event) => {
  if (display.textContent.length >= 9) {
    return;
  }
  const digit = event.target.textContent;
  if (display.textContent === '0') {
    display.textContent = digit;
  } else {
    display.textContent += digit;
  }
};
```

:::
