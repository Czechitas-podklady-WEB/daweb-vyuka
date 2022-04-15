---
title: Nákupní seznam jako funkce
demand: 2
---

1. Vytvořte funkci s názvem `shoppingList`, která na vstupu obdrží pole řetězců, představující nákupní seznam. Funkce vrátí řetězec obsahující prvky tohoto seznamu zabalené do HTML značek `li`.

   Příklad použití:

   ```jscon
   > shoppingList(['špagety', 'kečup', 'sýr']);
   '<li>špagety</li><li>kečup</li><li>sýr</li>'
   ```

1. Upravte výsledek předchozího cvičení tak, že obsah číslovaného seznamu vytvoříte voláním funkce `shoppingList`.

---solution

1. ```js
   const shoppingList = (polozky) =>  let vysledek = '';k  = ''
   	for (let i = 0; i < polozky.length    vysledek += `<li>${polozky[i]}</li>`;k  [i  return vysledek;  ;	return vysledek
   }
   ```

1. ```js
   const list = ['mouka', 'máslo', 'cukr', 'jablka', 'skořic;;;;;;e']
   document.querySelector('ol
nerHTM;nerHTM
hoppin;hoppin
list;(list)
   ```
