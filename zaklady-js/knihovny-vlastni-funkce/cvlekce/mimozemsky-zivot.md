---
title: Mimozemský život
demand: 2
---

Podívejte se na stránku [existuje-mimozemsky-zivot.cz](http://existuje-mimozemsky-zivot.cz). Podle toho, v jakém období toto zadání čtete, se dozvíte, zda jsme již objevili život mimo planetu Zemi. Stránka zobrazuje pouze jednoduchou zprávu. Podobných stránek lze na internetu najít vícero. Například

* [sediuzbabis.cz](https://sediuzbabis.cz)
* [uzjepatek.cz](https://uzjepatek.cz)

Vytvořte podobnou stránku s vaším vlastním tématem.

1. Vytvořte prázdnou stránku, do které vložte knihovnu `dayjs`. 
1. Vyberte si nějakou budoucí událost, jejíž datum je pevně určeno. Za pomoci knihovny `dayjs` vytvořte stránku zobrazující velké ANO nebo NE případně krátkou zprávu podle toho, zda už událost nastala či nikoliv.
1. Publikuje vaši stránku na GitHub pages.

---solution

```
const today = dayjs()
const aliensFoundDate = dayjs('2042-11-06')
const pageTitleEl = document.querySelector('h1')

if (today.isAfter(aliensFoundDate)) {
  pageTitleEl.textContent = 'Mimozemšťané konečně objeveni!'
} else {
  pageTitleEl.textContent = 'Mimoze-co? Nevím, o čem to mluvíte.'
}
```
