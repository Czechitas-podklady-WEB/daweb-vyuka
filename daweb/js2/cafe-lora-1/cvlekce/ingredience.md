---
title: Ingredience jako komponenty
lead: Vytvořte komponentu pro zobrazení jedné ingredience.
demand: 3
---

Abychom mohli vytvářet seznam ingrediencí podle dat, každá ingredience musí být také komponenta.

1.  Ve složce `components` vytvořte komponentu `Layer`, která očekává `props` v následujícím tvaru.

    ```jsx
    <Layer color="#feeeca" label="mléčná pěna" />
    ```

    Podívejte se do `Menu` na strukturu jednotlivých vrstev. Komponenta nechť vrací JSX element pro jednu vrstvu. Do komponenty přesuňte styly s ní související.

1.  Použijte vaši komponentu v komponentě `Drink` k zobrazení vrstev v nápoji. Vyzkoušejte, že váš projekt funguje. Commitněte kód s výborně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
