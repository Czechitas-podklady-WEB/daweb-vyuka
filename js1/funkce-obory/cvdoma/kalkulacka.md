---
title: Kalkulačka
demand: 2
---

Představte si úplně obyčejnou kalkulačku pouze s tlačítky pro čísla, čtyřmi základními operacemi a tlačítkem pro rovná se. Pokud na takové kalkulačce chcete spočítat něco velmi jednoduchého, například 2 + 3, musíme stisknout tlačíko :kbd[2], poté :kbd[+], pak :kbd[3] a pak :kbd[=]. Kalkulačka tedy nespočítá náš výsledek ve chvíli, kdy mačkáme :kbd[+], ale až ve chvíli, kdy mačkáme :kbd[=]. Musí si tedy zapamatovat, co jsme namačkali, a všecho spočítat až ve chvíli, kdy stiskneme :kbd[=].

Napište funkci `calc` se třemi parametry `num1`, `op` a `num2`, které představují první zadané číslo, zadanou operaci jako řetězec a druhé zadané číslo. Operace může být `'+'`, `'-'`, `'*'` nebo `'/'`. Funkce vrátí výsledek výpočtu pro zadanou operaci.

Příklad použití

```jscon
> calc(2, '+', 3)
5
> calc(3, '*', 7)
21
> calc(10, '/', 4)
2.5
```
