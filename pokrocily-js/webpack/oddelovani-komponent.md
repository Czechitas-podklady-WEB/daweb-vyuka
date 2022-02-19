Čím budou naše webové aplikace pokročilejší a schopnější tím více budou obsahovat nejen kódu ale také různých knihoven. Brzy již přestane být únosné mít všechen kód v jednom obřím `index.js`, protože by se v něm za chvíli už nikdo nikdy nevyznal. Bude tedy potřeba jej rozdělit do více samostatných souborů. 

## Oddělování komponent

Nejpřímočařejší způsob jak rozsekat kód na části je vytvořit specilání soubor pro každou komponentu. Pro náš nákupní seznam se dvěma komponentami bychom tak měli tři JavaScriptové soubory.

- `shopping-item.js` obsahující komponentu `ShoppingItem`
- `shopping-list.js` obsahující komponentu `ShoppingList`
- `index.js`, který spojí vše dohromady.

Kdyby náš nákupní seznam ještě navíc pracoval s dalšími knihovnami jako třeba `validator.js` nebo `dayjs`, museli bychom do hlavičky stránky vložit pět různých skriptů.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/validator/13.5.2/validator.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.4/dayjs.min.js" ></script>
<script src="shopping-item.js" defer></script>
<script src="shopping-list.js" defer></script>
<script src="index.js" defer></script>
```

Zde se však pomalu dostáváme do potíží. Prohlížeč dokáže mnohem rychleji stáhnout jeden velký soubor než pět malých souborů. A to je naše aplikace pořád malinkatá. Reálné projekty nezřídka obsahují stovky i tísíce komponent plus desítky různých knihoven. Stáhování tisíce JavaScriptových souborů by naší stránku strašlivě zpomalilo a uživatel by z hrůzou utekl jinam. Potřebujeme tedy jiné řešení. To nám nabízí balíčkovací systém NPM a program Webpack. 
