---
title: Práce s indexy
demand: 3
lead: Vyzkoušejte si jak přistupovat k prvkům v poli pomocí indexů.
solutionAccess: protected
---

Cvičení provádějte ve vašem JavaScript souboru.

1.  Napište funkci `first`, která jako svůj parametr přijme pole a vrátí první prvek tohoto pole. Pokud pole bude prázdné, funkce vrátí `undefined`. Funkci otestujte s několika různými poli. Například:

    ```js
    first([3, 2, 1]); // ⟶ 3
    first([]); // ⟶ undefined
    ```
1.  Napište funkci `last`, která jako svůj parametr přijme pole a vrátí poslední prvek tohoto pole. Pokud pole bude prázdné, funkce vrátí `undefined`. Funkci otestujte s několika různými poli. Například:

    ```js
    last([3, 2, 1]); // ⟶ 1
    last([]); // ⟶ undefined
    ```
1.  Napište funkci `middle`, která jako svůj parametr přijme pole a vrátí prvek uprostřed tohoto pole. Pokud pole bude prázdné, funkce vrátí `undefined`. Pokud pole bude obsahovat sudý počet prvků, vrátí funkce prvek vlevo od středu. Funkci otestujte s několika různými poli. Například:

    ```js
    middle([3, 2, 1]); // ⟶ 2
    middle([3, 2, 1, 0]); // ⟶ 2
    middle([]); // ⟶ undefined
    ```
1. Napište funkci `middleMean`, která jako svůj parametr přijme pole a vrátí prvek uprostřed tohoto pole. Pokud pole bude prázdné, funkce vrátí `undefined`. Pokud pole bude obsahovat sudý počet prvků, vrátí funkce průměr dvou prvků uprostřed. Funkci otestujte s několika různými poli. Například:

    ```js
    middleMean([3, 2, 1]); // ⟶ 2
    middleMean([3, 2, 1, 0]); // ⟶ 1.5
    middleMean([]); // ⟶ undefined
    ```
1. Napište funkci `insert`, která jako první parametr přijme pole a jako druhý parametr nějakou hodnotu. Funkce zkontroluje, zda pole již obsahuje tuto hodnotu. Pokud ano, vrátí `false`. Pokud ne, vloží hodnotu na konec pole a vrátí `true`. Funkci otestujte s několika různými poli. Například:

    ```js
    insert([3, 2, 1], 4); // ⟶ true
    insert([3, 2, 1], 3); // ⟶ false
    ```
