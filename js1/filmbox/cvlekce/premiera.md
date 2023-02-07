---
title: 'Bonus: Premiéra'
demand: 3
---

Zobrazte datum premiéry filmu.

1. Zapojte do stránky `film.html` knihovnu dayjs přidáním HTML do hlavičky.

   ```html
   <script src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"></script>
   ```

1. Do prvku s id `premiera` vepište HTML `Premiéra <strong>29. 11. 2022</strong>`, kde datum nahraďte datumem premiéry filmu naformátovaným pomocí `dayjs` a metody `.format()`.

   1. Datum v dayjs vytvoříte například voláním `dayjs('2022-12-24')`. Vánoce nahraďte datumem premiéry filmu.

   1. Hezké datum z dayjs vytvoříte voláním `dayjs('2022-12-24').format('D. M. YYYY')`.

#### Bonus

Spočítejte kolik dní uběhlo od premiéry nebo za kolik dní premiéra bude. Pomůže vám metoda `.diff()`.

1.  Dnešní datum pro další výpočty v dayjs vytvoříte voláním `dayjs()`.

1.  Datum premiéry pak voláním `dayjs('2022-12-24')`.

1.  Pro vzdálenost mezi datumy pužijte metodu `.diff()` například takto: `dayjs("2022-12-24").diff(dayjs(), 'days')`.

1.  Do elementu s id `premiera` připište, před kolika dny nebo za kolik dní bude nebo jestli je dnes.

#### Extra bonus

Zařiďte, aby tvar slova _den_ byl ve správném tvaru, aby se třeba nestalo „což bylo před 1 dní“.

---solution

Všechny úlohy mají jedno společné vypracované řešení zde [github.com/Czechitas-podklady-WEB/FilmBox/tree/reseni](https://github.com/Czechitas-podklady-WEB/FilmBox/tree/reseni).
