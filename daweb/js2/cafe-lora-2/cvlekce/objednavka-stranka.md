---
title: Stránka pro detail objednávky
lead: Oživte stránku pro zobrazení detailu objednávky.
demand: 3
---

Oživíme kostru stránky pro detail objednávky pomocí už existujících komponent. Komponenty pro jednotlivé položky objednávky vytvoříme v dalším cvičení.

1. Ve složce `src/pages` najdete soubor `order.html` i s JavaScriptem `order.jsx` a styly `order.css`.
1. Na stránce použijte komponenty `Header` a `Footer`. Komponentu `Header` bude potřeba upravit, protože na stránce s objednávkou se hlavička zobrazuje bez hlavního menu. Do komponenty `Header` tedy přidejte _prop_ s názvem `showMenu` s výchozí hodnotou `true`. Pokud bude `showMenu` mít hodnotu `false`, komponenta `Header` zobrazí hlavičku pouze s odkazem na hlavní stránku, jak je navrženo v zadání projektu v souboru `order.html`.
1. Vyzkoušejte, že váš web funguje a že se lze přesouvat mezi oběma stránkami.
1. Proveďte _commit_ a _push_ vašich změn.
