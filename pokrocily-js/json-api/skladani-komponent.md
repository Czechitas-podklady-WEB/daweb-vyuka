## Skládání komponent

Většina webových aplikací se skládá z mnoha různých komponent. Když aplikaci tvoříme, postupujeme směrem zdola nahoru. Vytváříme nejdříve jednoduché komponenty jako tlačítka, položky seznamů, vstupní pole apod. Tyto pak skládáme do větších komponent jako formuláře, seznamy, různá menu a další. Nakonec se dostaneme až k největším komponentám jako jsou samotné jednotlivé stránky naší aplikace.

Struktura komponent často kopíruje strukturu naších dat. Připomeňme si [projekt](https://github.com/Czechitas-podklady-WEB/prvni-komponenta) s nákupním seznamem z minulé lekce. Díky tomu, že už umíme API, nemusíme si data ukládat v souboru `index.js`, ale stáhneme si je z adresy 

```
https://apps.kodim.cz/daweb/trening-api/apis/shopping
```

Tento endpoint nám vrátí větší množství položek, které chceme zobrazit v našem seznamu. Jednu položku vytváříme pomocí komponenty `ShoppingItem`. Nyní vytvoříme ještě komponentu `ShoppingList`, která bude představovat celý nákupní seznam. Jak už jsme zvyklí, pro komponentu si vytvoříme speciální složku.

```js
import { ShoppingItem } from '../ShoppingItem/index.js';

export const ShoppingList = (props) => {
  const { items } = props;
  let resultHTML = '<ol class="shopping-list">';
  for (let i = 0; i < items.length; i += 1) {
    resultHTML += ShoppingItem(items[i]);
  }

  return resultHTML + '</ol>';
};
```

Jelikož chceme použít komponentu `ShoppingItem` uvnitř komponenty `ShoppingList`,
musíme ji zde nyní importovat.

Komponentu pak použijeme v našem hlavním `index.js`. 

```js
import { ShoppingList } from './ShoppingList/index.js';

fetch('https://apps.kodim.cz/daweb/trening-api/apis/shopping')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const container = document.querySelector('.container');
    container.innerHTML = ShoppingList({
      items: data,
    });
  });
```

Všimněte si, jak se nám hezky zjednodušil hlavní soubor `index.js`, který pouze získá data z API a zobrazí komponentu `ShoppingList`. O všechno ostatní už se postarají komponenty samy. Do budoucna to bude náš hlavní cíl. Vždy budeme chtít, aby co největší část našeho programu byla v komponentách. Nakonec dojdeme k tomu, že celá náše webová aplikace bude jedna velká komponenta. 
