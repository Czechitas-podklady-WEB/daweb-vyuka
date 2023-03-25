---
title: Mimozemský život
demand: 2
---

Podívejte se na stránku [existuje-mimozemsky-zivot.cz](http://existuje-mimozemsky-zivot.cz). Podle toho, v jakém období toto zadání čtete, se dozvíte, zda jsme již objevili život mimo planetu Zemi. Stránka zobrazuje pouze jednoduchou zprávu. Podobných stránek lze na internetu najít vícero. Například

- [sediuzbabis.cz](https://sediuzbabis.cz)
- [uzjepatek.cz](https://uzjepatek.cz)

Vytvořte podobnou stránku s vaším vlastním tématem.

1. Vytvořte prázdnou stránku, do které vložte knihovnu `Day.js`.
1. Vyberte si nějakou budoucí událost, jejíž datum je pevně určeno. Za pomoci knihovny `Day.js` vytvořte stránku zobrazující velké _ANO_ nebo _NE_ případně krátkou zprávu podle toho, zda už událost nastala či nikoliv.

#### Bonus

1. Publikuje vaši stránku přes [GitHub Pages](https://pages.github.com/) (případně [Netlify drop](https://app.netlify.com/drop) či jinou alternativu, pokud je znáte).

---solution

```js
const today = dayjs();
const aliensFoundDate = dayjs('2042-11-06');
const pageTitleEl = document.querySelector('h1');

if (today.isAfter(aliensFoundDate)) {
  pageTitleEl.textContent = 'Mimozemšťané konečně objeveni!';
} else {
  pageTitleEl.textContent = 'Mimoze-co? Nevím, o čem to mluvíte.';
}
```
