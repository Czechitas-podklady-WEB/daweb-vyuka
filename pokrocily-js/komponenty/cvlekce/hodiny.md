---
title: Hodiny
demand: 2
---

Naklonuje si [repozitář](https://github.com/Czechitas-podklady-WEB/hodiny-zadani) se stránku zobrazující digitální hodiny. Následujte instrukce níže.

1. Vytvořte komponentu `Clock`, která bude na vstupu očekávat takovýto objekt:
   ```js
   {
     hours: 12,
     minutes: 34,
   }
   ```
   Komponenta nechť z takového objektu vytvoří HTML pro jedny hodiny. Jak má vypadat HTML hodin najdete v souboru `index.html`.
1. HTML kód hodin ze stránky vyjměte a nechte v ní pouze element `app`.
1. Ve vašem programu vyberte element `app` a pomocí komponenty `Clock` do něj zapojte hodiny zobrazující nějaký čas.
1. Zkuste pomocí funkce `Clock` vložit do stránky několik různých hodin pod sebe.
1. Zkuste vyrobit pole hodin a zobrazit je pomocí cyklu na stránce.
