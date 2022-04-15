---
title: Superhrubá mzda
demand: 3
---

Vytvořte webovou stránku, která pomůže zaměstnavatelům spočítat náklady na jednoho zaměstnance, tedy takzvanou superhrubou mzdu. Zaměstnavetel zadá na vstupu dvě hodnoty: hodinovou sazbu zaměstnance a velikost úvazku v procentech. Tedy například 100% je plný úvazek (8 hodině denně), 50% poloviční apod. Stránka vypíše výši superhrubé mzdy, výší hrubé mzdy a výší čisté mzdy, vše v korunách.

Pravidla pro tyto výpočty se v čase mění. Aktuální pravidla v době vzniku tohoto cvičení platí od 1.7.2019 a jsou následující ([zdroj](https://www.vypocet.cz/popis-vypoctu-ciste-mzdy)).

Hrubou mzdu spočítáme z hodinové sazby a velikosti úvazku. Předpokládejme, že každý měsíc má 21 pracovních dní. Výsledné číslo zaokrouhlíme běžným způsobem na celé koruny.

Superhrubá mzda se spočítá z hrubé mzdy takto:

1. Přičteme náklady na zdravotní pojištění (9 % z hrubé mzdy)
1. Přičteme náklady na sociální pojištění (24,8 % z hrubé mzdy)
1. Výsledné číslo zaokrouhlíme **nahoru** na celé koruny.

Čistá mzda se spočítá z hrubé mzdy takto:

1. Odečteme 4,5 % hrubé mzdy jako zdravotní pojištění, které platí zaměstnanec,
1. Odečteme 6,5 % hrubé mzdy jako sociální pojištění, které platí zaměstnanec,
1. Spočítáme daňový základ tak, že superhrubou mzdu zaokrouhlíme na stovky nahoru..
1. Odečteme daň z příjmu, která činí 15 % z daňového základu.
1. Přičteme 2070 jako základní slevu na dani, na kterou má nárok každý.
1. Výsledek zaokrouhlíme **dolů** na celé koruny.

**Příklad:** Celkové náklady na mzdu zaměstnance z hodinovou sazbou 450 Kč/h a 70% úvazkem jsou 70&nbsp;807 Kč. Hrubá mzda činí 52&nbsp;920 Kč a čistá mzda 38&nbsp;533 Kč. Své výpočty můžete ověřit například na [této stránce](https://www.vypocet.cz/cista-mzda). Bude nám stačit už pouze jedna lekce, abyste takovou stránku dokázali vyrobit úplně sami.

---solution

```
const pay = Number(prompt('Hodinová mzda:'));
const time = Number(prompt('Velikost uvazku (%):'));

const gross = Math.round(pay * 8 * 21 * time / 100);
const superGross = Math.ceil(gross + gross * 0.09 + gross * 0.248);
const taxBase = Math.ceil(superGross / 100) * 100;

const net = Math.floor(
  gross - gross * 0.045 - gross * 0.065 - taxBase * 0.15 + 2070
);

document.body.innerHTML = (
  'superhrubá: ' + superGross + ' Kč, ' +
  'hrubá: ' + gross + ' Kč, ' +
  'čistá: ' + net + ' Kč'
);
```
