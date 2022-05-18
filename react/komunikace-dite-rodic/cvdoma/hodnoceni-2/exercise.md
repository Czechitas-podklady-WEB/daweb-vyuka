---
title: Hodnocení 2
demand: 4
---

Navážeme na úložku s hodnocením a zařídíme, aby se při kliknutí na hvězdičku rozsvítily všechny hvězdičky před ní.

::fig{src="assets/rating.gif" size=40}

Logiku fungování zařídíme tak, že tentokrát hvězdičky nebudou mít vlastní stav. Jejich rozsvěcení a zhasínání bude řídit rodičovaská komponenta `Rating` pomocí stavu a props.

1. Upravte komponentu `Star` tak, aby místo stavu `glowing` používala prop jménem `glowing`. Zatím zakomentujte funkci pro `onClick`, která nám v tuto chvíli přestane fungovat. Vyzkoušejte si však, že můžete jednotlivé hvězdičky rozsvítit nastavením prop `glowing` v kódu komponenty `Rating`.
1. Nyní využijeme stavu `value` v komponentě `Rating`. Stačí si uvědomit, že například první hvězdička má svítit, když je hodnota `value` větší nebo rovna 1. Takže můžeme napsat takovouto podmínku.
   ```js
   <Star glowing={value >= 1} // zbytek props....
   ```
   Upravte podmínky u všech hvězdiček tak, aby svítily ve správnou chvíli. Zkuste si nastavit výchozí stav na různé hodnoty a vyzkoušejte, že se hvězdičky svítí správně.
1. V tuto chvíli už při kliknutí na hvězdičku nepotřebujeme posílat informace o rozsvěcení a zhasínání. To se od teď dělá změnou stavu `value`. Už tedy v komponentě nepotřebujeme props `onGlow` a `onDim`. Stačí nám jedna prop `onSelect`, která se zavolá s hodnotou, kterou je potřeba nastavit do stavu `value`. Je tedy potřeba, aby každá hvězdička věděla, jakou hodnotu má poslat svému rodiči. To můžeme zařídit tak, že každé `Star` dáme prop `rating`. První hvězdička tak bude mít `rating={1}`, druhá `rating={2}` apod. V tuto chvíli už každá hvězdička může zavolat funkci `onSelect` se správnou hodnotou a předat ji rodiči. Rodič (komponenta `Rating`) pak tuto hodnotu uloží do stavu `value` a tím se nám rozsvítí příslušné hvězdíčky.
