---
title: Obsah objednávky
demand: 3
---

Vytvoříme komponenty pro zobrazování obsahu objednávky.

1. Ve složce `src/pages/OrderPage/components` vytvořte komponentu `Order` pro zobrazení obsahu objednávky. Tato komponenta bude mít jedinou _prop_ `items`, která bude na začátku mít hodnotu `'loading'` jak už to známe. Data objednávky později stáhneme z API.
1. Ve stejné složce vytvořte komponentu `OrderItem` s _props_ `name` a `image` představující jednu položku objednávky.
1. V komponentě `Order` získáte jednotlivé položky z objednávky tak, že si stáhnete z API všechny nápoje a pomocí metody `filter` zobrazíte pouze ty, které jsou objednané.
1. Pokud je objedávka prázdná, zobrazte příslušnou zprávu.
1. Vyzkoušejte, že stránka `OrderPage` správně zobrazuje obsah objednávky. Zkuste na hlavní stránce změnit objednané nápoje a zkontrolujte, že se na stránce s detailem objednávky správně aktualizuje obsah.
1. Proveďte _commit_ a _push_ vašich změn.

Máte hotovo! Web _Café Lóra_ ožil pod vašima rukama.
