---
title: Česká města
demand: 2
---

Založte si React projekt podle již známého [project starteru](https://github.com/Czechitas-podklady-WEB/project-starter/archive/react-starter.zip).

1.  Do souboru `index.jsx` vložte mimo komponentu `App` pole s názvy deseti největších českých měst.
    ```js
    const cities = [
      'Praha',
      'Brno',
      'Ostrava',
      'Plzeň',
      'Liberec',
      'Olomouc',
      'České Budějovice',
      'Hradec Králové',
      'Ústí nad Labem',
      'Pardubice',
    ];
    ```
1.  Stále mimo hlavní komponentu vezměte pole `cities` a pomocí funkce `map` z něj vyrobte pole JSX elementů. Každý JSX element nechť má následující strukturu.
    ```js
    <div className="city">Název města</div>
    ```
    Výsledné pole uložte do proměnné `cityElements`.
1.  Použije pole `cityElements` uvnitř komponenty `App` v zobrazte jej na vaší stránce.
1.  Zbavte se proměnné `cityElements` a funkci `map` použijte přímo uvnitř komponenty `App`.
