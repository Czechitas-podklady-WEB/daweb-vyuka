---
title: Ingredience jako komponenty
demand: 3
---

Abychom mohli vytvářet seznam ingrediancí podle dat, každá ingredience musí být také komponenta.

1. Ve složce `Menu/components` vytvořte vytvořte komponentu `Layer`, která očekává `props` v následujícím tvaru.
   ```js
   {
     color: '#feeeca',
     label: 'mléčná pěna',
   }
   ```
   Podívejte se do `Menu` na strukturu jednotlivých vrstev. Komponenta nechť vrací DOM element pro jednu vrstvu. Do komponenty přesuňte styly s ní související.
1. Použijte vaši komponentu v komponentě `Drink` k zobrazení vrstev v nápoji. Vyzkoušejte, že váš projekt funguje. Commitněte kód s výborně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
