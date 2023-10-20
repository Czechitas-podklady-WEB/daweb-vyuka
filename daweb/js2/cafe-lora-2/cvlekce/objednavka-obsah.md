---
title: Obsah objednávky
lead: Vytvořte komponenty pro zobrazování obsahu objednávky.
demand: 3
---

1.  Ve složce `src/components` vytvořte komponentu `Order` pro zobrazení obsahu objednávky. Tato komponenta bude mít jedinou _prop_ `items`, která bude očekávat pole objednaných nápojů. Toto pole bude obsahovat objekty s následující strukturou:
    ```js
    {
      id: 7,
      name: 'Romano',
      image: 'https://localhost:4000/assets/cups/romano.png',
    }
    ```
1.  Vytvořte také komponentu `OrderItem` s _props_ `name` a `image` představující jednu položku objednávky.
1.  Na stránce se detailem objednávky získáte jednotlivé položky z objednávky tak, že pošlete GET požadavek na API endpoint

    ```
    /api/drinks?filter=ordered:eq:true&select=id,name,image
    ```

    Tato URL adresa obsahuje speciální parametry, které ze seznamu nápojů vyfiltrují pouze ty, které jsou objednané a vrátí pouze jejich `id`, `name` a `image`. Pozor, že pokud nemáte zatím žádný nápoj objednaný, API endpoint vrátí prázdné pole.

1.  Pokud je objedávka prázdná, zobrazte příslušnou zprávu.
1.  Vyzkoušejte, že stránka s detailem objednávky správně zobrazuje obsah objednávky. Zkuste na hlavní stránce změnit objednané nápoje a zkontrolujte, že se na stránce s detailem objednávky správně aktualizuje obsah.
1.  Proveďte _commit_ a _push_ vašich změn.

Máte hotovo! Web _Café Lóra_ ožil pod vašima rukama.
