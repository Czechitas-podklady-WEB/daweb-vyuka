---
title: Hodnocení 2
lead: Dokončete komponentu pro hodnocení hvězdičkami.
demand: 4
solutionAccess: protected
---

Navážeme na úložku s hodnocením a zařídíme, aby se při kliknutí na hvězdičku rozsvítily všechny hvězdičky před ní.

::fig{src="assets/rating.gif" size=40}

Logiku fungování zařídíme tak, že tentokrát hvězdičky nebudou mít vlastní stav. Jejich rozsvěcení a zhasínání bude řídit rodičovaská komponenta `Rating` pomocí stavu a props.

1. Upravte komponentu `Star` tak, aby místo stavu `glowing` používala prop jménem `glowing`. Vyzkoušejte si, že můžete jednotlivé hvězdičky rozsvítit nastavením prop `glowing` v kódu komponenty `Rating`.
1. Nyní využijeme stavu `rating` v komponentě `Rating`. Stačí si uvědomit, že například první hvězdička má svítit, když je hodnota `rating` větší nebo rovna 1. Takže můžeme napsat takovouto podmínku.
   ```js
   <Star value={1} glowing={rating >= 1} // zbytek props....
   ```
   Upravte podmínky u všech hvězdiček tak, aby svítily ve správnou chvíli. Zkuste si nastavit výchozí stav na různé hodnoty a vyzkoušejte, že se hvězdičky rozsvítí správně.
1. V tuto chvíli už každá hvězdička volá funkci `onSelect` se správnou hodnotou a předává ji rodiči. Rodič (komponenta `Rating`) pak tuto hodnotu uloží do stavu `rating` a tím se nám rozsvítí příslušné hvězdíčky.
