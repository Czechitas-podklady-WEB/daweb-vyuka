---
title: Obsah objednávky
demand: 3
---

Vytvoříme komponenty pro zobrazování obsahu objednávky.

1. Ve složce `src/pages/OrderPage/components` vytvořte komponentu `Order` pro zobrazní obsahu objednávky. Tato komponenta bude mít jedinou *prop* `items`, která bude na začátku `undefined`. Data objednávky později stáhneme z API.
1. Ve stejné složce vytvořte komponentu `OrderItem` s *props* `name` a `image` představující jednu položku objednávky.
1. V komponentě `Order` získáte jednotlivé položky z objednávky tak, že si stáhnete z API všechny nápoje a pomocí metody `filter` zobrazíte pouze ty, které jsou objednané.
1. Pokud je objedávka prázdná, zobrazte příslušnou zprávu.
1. Vyzkoušejte, že stránka `OrderPage` správně zobrazuje obsah objednávky. Zkuste na hlavní stránce změnit objednané nápoje a zkontrolujte, že na stránce s s detailem objedávky se obsah správně aktualizuje.
1. Proveďte *commit* a *push* vašich změn.

Máte hotovo! Web Café Lóra ožil pod vašima rukama. 
