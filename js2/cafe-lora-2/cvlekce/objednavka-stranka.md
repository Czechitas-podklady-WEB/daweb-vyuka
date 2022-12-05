---
title: Stránka pro detail objednávky
demand: 3
---

Vytvoříme kostru stránky pro detail objednávky. Komponenty pro jednotlivé položky objednávky vytvoříme v dalším cvičení.

1. Ve složce `src/pages` založte novou komponentu `OrderPage`. Její obsah a styly zatím vezměte z připraveného zadání.
1. Na stránce použijte komponenty `Header` a `Footer`. Komponentu `Header` bude potřeba upravit, protože na stránce s objednávku se hlavička zobrazuje bez hlavního menu. Do komponenty `Header` tedy přidejte *prop* s názvem `showMenu` s výchozí hodnotou `true`. Pokud bude `showMenu` mít hodnotu `false`, komponenta `Header` zobrazí hlavičku pouze s odkazem na hlavní stránku jak je navrženo v zadání projektu.
1. Upravte routing v hlavním `index.js` tak, aby se stránka `OrderPage` zobrazovala pod cestou `/objednavka`.
1. Vyzkoušejte, že váš web funguje a že se lze přesouvat mezi oběma stránkami.
1. Proveďte *commit* a *push* vašich změn.

