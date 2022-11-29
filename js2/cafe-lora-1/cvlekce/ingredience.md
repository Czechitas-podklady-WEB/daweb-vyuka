---
title: Nápoje jako komponenty
demand: 3
---

V komponentě `Menu` máme příklad tří napojů zatím jako natvrdo vytvořené HTML. Budeme chtít mít každý nápoj v menu jako komponentu. Připravujeme se na to, abychom později mohli seznam nápojů zobrazovat stažením dat z API. Bude se nám také hodit, když každá ingredience (jendotlivá vrstva v šálku) bude také komponenta.

1. Ve složce pro komonentu `Menu` vytvořte složku `components` a v ní vytvořte komponentu `Layer`, která očekává `props` v následujícím tvaru.
   ```js
   {
     color: '#feeeca',
     label: 'mléčná pěna',
   }
   ```
   Podívejte se do `Menu` na strukturu jednotlivých vrstev. Komponenta nechť vrací DOM element pro jednu vrstvu. Do komponenty přesuňte styly s ní související.
1. Použijte vaši komponentu v menu k zobrazení vrstev v nápoji. Klidně zobrazte jen jeden nápoj, ať se moc nenadřete. Vyzkoušejte, že váš projekt funguje. Commitněte kód s výborně napsanou commit zprávou a pushněte do vzdáleného repozitáře.
