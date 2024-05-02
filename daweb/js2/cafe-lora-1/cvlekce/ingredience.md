---
title: Ingredience jako komponenty
lead: Vytvořte komponentu pro zobrazení jedné ingredience.
demand: 3
context: lekce
---

Abychom mohli vytvářet seznam ingrediencí podle dat, každá ingredience nápoje musí být také komponenta. Budeme postupovat obdobně jako u komponenty `Drink`.

1.  Ve složce `components` vytvořte komponentu `Layer`. Podívejte se do `Drink` na ukázkové JSX jednotlivých layers (ingrediencí) a podle něj vytvořte strukturu komponenty, která bude vracet JSX pro jednu ingredienci. `Layer` bude očekávat _props_ v následujícím tvaru, které na patřičných místech v JSX rovnou použijte.

    ```jsx
    <Layer color="#feeeca" label="mléčná pěna" />
    ```

1.  Do komponenty také přesuňte styly s ní související.

1.  Hotovou komponentu použijte v komponentě `Drink` a nahraďte tak předchozí ukázkové příklady layers. `Layer` předejte data pomocí _props_ a otestujte, že váš projekt funguje. Commitněte kód s výborně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
