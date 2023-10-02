---
title: Minutka
lead: 'Oživte kuchyňskou minutku.'
demand: 2
solutionAccess: allow
---

Vytvořte si repozitář ze šablony [cviceni-minutka](https://github.com/Czechitas-podklady-WEB/cviceni-minutka) pro stránku s kuchyňskou minutkou. Využijte funkci `setTimeout` ke splnění následujících úkolů.

1. Zařiďte, aby minutka začala zvonit za pět vteřin po otevření stránky. Zvonění zařídíte tak, že k elementu budíku přídáte CSS třídu `alarm--ring`.
1. Nechte uživatele skrze `prompt` zadat kolik vteřin má uplynout než minutka začne zvonit.
1. Můžete zařídit i spuštění zvuku. Stačí ze stránky vybrat `audio` element a zavolat na něm metodu `play`. Abyste zvuk slyšeli, musíte po zadání času na stránku kliknout. Prohlížeč Chrome totiž brání stránkam přehrávat audio či video dokud uživatel se stránkou nějak neinteragoval.
1. Přidejte na stránku tlačítko, které umožní odpočet minutky zrušit dřív, než začne zvonit.

::fig[ukázka řešení]{src=assets/ukazka.gif}

:::solution

```html
<button>Stop</button>
```

```js
const budik = document.querySelector('.alarm');
const audio = document.querySelector('audio');
const tlacitko = document.querySelector('button');
const pocetSekund = Number(prompt('Zadejte počet sekund k odpočtu:'));
const zazvon = () => {
  budik.classList.add('alarm--ring');
  audio.play();
};
const odpocet = setTimeout(zazvon, pocetSekund * 1000);
tlacitko.addEventListener('click', () => {
  clearTimeout(odpocet);
});
```

:::
