---
title: Lokální čas
demand: 2
---

Stáhněte si [základ aplikace](assets/lokalni-cas-zadani.zip) zobrazující lokální čas na vašem počítači. Prohlédněte si zdrojový kód. Máte dopředu k dispozici funkci `localTime`, která vrátí aktuální čas v tomto formátu.

```js
{
  hours: 9,
  minutes: 16,
  sesonds: 25,
}
```

Komponenta `Time` zobrazuje tento čas na obrazovce. Můžete si vyzkoušet, že při obnovení stránky se skutečně zobrazí aktuální čas.

Na stránce s nachází připravené tlačítko. Pověste na něj funkci, která aktualizuje čas zobrazený na stránce. Provede to tak, že znova získá aktuální čas pomocí funkce `localTime` a zavolá komponentu `Time`.
