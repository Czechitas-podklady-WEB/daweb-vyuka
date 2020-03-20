---
title: Superhrubá mzda
demand: 3
---

Vytvořte webovou stránku, která pomůže zaměstnavatelům spočítat náklady na jednoho zaměstnance, tedy takzvenou superhrubou mzdu. Zaměstnavetel zadá na vstupu dvě hodnoty: hodinovou sazbu zaměstnance a velikost úvazku v procentech. Tedy například 100% je plný úvazek (8 hodině denně), 50% poloviční apod. Stránka vypíše výši superhrubé mzdy, výší hrubé mzdy a výší čisté mzdy, vše v korunách.

[Výpočet superhrubé mzdy](https://cs.wikipedia.org/wiki/Superhrub%C3%A1_mzda#V%C3%BDpo%C4%8Det_superhrub%C3%A9_mzdy) funguje následovně:

1. Spočítáme hrubou mzdu. Předpokládejme, že každý měsíc má 21 pracovních dní.
1. Přičteme náklady na zdravotní pojištění (9% z hrubé mzdy)
1. Přičteme náklady na sociální pojištění (25% z hrubé mzdy)
1. Výsledné číslo zaokrouhlíme nahoru na stovky.

Čistá mzda se spočítá z hrubé mzdy takto:

1. Odečteme 4.2% hrubé mzdy jako zdravotní pojištění, které platí zaměstnanec,
1. Odečteme 6.5% hrubé mzdy jako sociální pojištění, které platí zaměstnanec,
1. Odečteme daň z příjmu, která činí 15% superhrubé mzdy.
1. Přičteme 2070 jako základní slevu na dani, na kterou má nárok každý.

**Příklad:**

Celkové náklady na mzdu zaměstnance z hodinovou sazbou 450 Kč/h a 70% úvazkem jsou 70.900 Kč. Hrubá mzda činí 52.920 Kč a čistá mzda 38.533 Kč. Své výpočty můžete ověřit například na [této stránce](https://www.vypocet.cz/cista-mzda). Bude nám stačit už pouze jedna lekce, abyste takvou stránku dokázali vyrobit úplně sami.
