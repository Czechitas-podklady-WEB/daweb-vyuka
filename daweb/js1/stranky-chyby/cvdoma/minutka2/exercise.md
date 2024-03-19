---
title: Minutka 2
demand: 3
context: cvdoma
lead: Vylepšete aplikaci Minutka.
solutionAccess: protected
---

Vytvořte si repozitář ze šablony [cviceni-minutka-2](https://github.com/Czechitas-podklady-WEB/cviceni-minutka-2) pro vylepšenou kuchyňskou minutku.

Umožněte uživateli zadat počet vteřin skrze připravené textové poličko. K získání hodnoty z políčka použijte vlastnost `value`. Nezapomeňte obsah políčka zkonvertovat na číslo. Minutku spusťte tlačítkem :i[Start].

Zařiďte, aby minutka správně odpočítávala vteřiny a začala zvonit ve chvíli, kdy dosáhne nuly. Pokud si věříte, zkuste celý program napsat rovnou bez nápovědy. Pokud malinko ztrácíte půdu pod nohama, následujte tyto kroky.

1. Vytvořte si proměnou `time`, do které uložíte počáteční počet vteřin zadaný uživatelem.
1. Při kliknutí na :i[Start] nastavte časovač pomocí `setInterval`. Ten se bude opakovat každou vteřinu a pokaždé sníží hodnotu v proměnné `time` o jedna.
1. Jakmile proměnná `time` dosáhne nuly, zapněte zvonění a zrušte časovač aby nezačal počítat do mínusu.

:::solution

```js
const nastartujMinutku = (e) => {
  e.preventDefault();
  let time = Number(document.querySelector('.time-input').value);

  const sekundyElm = document.querySelector('.alarm__seconds');
  const alarmElm = document.querySelector('.alarm');

  // pro opakované použití
  alarmElm.classList.remove('alarm--ring');

  sekundyElm.textContent = String(time);

  const odpocet = () => {
    if (time > 0) {
      time -= 1;
      sekundyElm.textContent = String(time);
    }
    if (time <= 0) {
      clearInterval(casovac);
      alarmElm.classList.add('alarm--ring');
      document.querySelector('audio').play();
    }
  };

  const casovac = setInterval(odpocet, 1000);
};

const formularElm = document.querySelector('.controls');
formularElm.addEventListener('submit', nastartujMinutku);
```

:::
