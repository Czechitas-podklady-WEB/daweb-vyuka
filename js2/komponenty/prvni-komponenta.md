Jak se v tomto kurzu stáváme stále zkušenějšími a mocnějšími, nazrává čas k tomu, abychom se pokusili sestavit malinko větší a zajímavější aplikaci, na které budeme ilustrovat pokročilejší dovednosti. Od této chvíli budeme společně pracovat na aplikaci s názvem _Nákupy_, která bude umožňovat správu nákupních seznamů pro jednotlivé dny v týdny. 

Abychom se nemuseli trápit se stylováním, začneme již s hotovým základem aplikace, který najdete v [tomto repozitáři](https://github.com/Czechitas-podklady-WEB/nakupy-start). Použijte jej jako šablonu pro založení vlastního repozítáře, do kterého si budete dle výkladu postupně přidávat další funkčnosti. 

## První komponenta

V minulé lekci jsme se naučili vyrobit obsah stránky z dat ze serveru. Dokonce už jsme načali téma nákupních seznamů a takto vypadala funkce zobrazující položky seznamu:

```js
const renderShoppingList = (items) => {
  const shoppingList = document.querySelector('.shoplist');
  shoppingList.innerHTML = items
    .map((item) => {
      return `
        <div class="list-item">
          <div class="list-item__product">${item.product}</div>
          <div class="list-item__amount">${item.amount} ${item.unit}</div>
        </div>
      `;
    })
    .join('');
};
```

Zde je jedna položka relativné malý kousek HTML. Brzy však obsah našich stránek bude složitější a vytvoření jedné položky zabere více řádků kódu. V takovém případě se nám vyplatí přesunout tvorbu jedné položky do speciální funkce. Nazveme ji `ListItem` a vložíme ji do souboru `script.js` v naší nově založené aplikaci _Nákupy_.

```js
const ListItem = (item) => {
  return `
    <div class="list-item">
      <div class="list-item__product">${item.product}</div>
      <div class="list-item__amount">${item.amount} ${item.unit}</div>
    </div>
  `;
};
```

Tuto funkci pak můžeme použít při vytváření celého nákupního seznamu.

```js
const renderShoppingList = (items) => {
  const shoppingList = document.querySelector('.shoplist__items');
  shoppingList.innerHTML = items.map((item) => ListItem(item)).join('');
};
```

Funkci `ListItem` budeme říkat :term{cs="komponenta" en="component"}. Komponenta je vždy nějaká funkce, která dostane na vstupu data v podobě objektu, a vytvoří z těchto dat kus obsahu naší stránky. Díky komponentám můžeme naši stránku stavět z menších a snadno stravitelných stavebních bloků.

Dle zažitých konvencí budeme komponenty vždy pojmenovávat s velkým písmenem na začátku. Tuto konvenci si vytvořili především React programátoři, aby dokázali rychle odlišit funkce představující komponenty od všech ostatních funkcí. JavaScriptu je úplně jedno, jaké písmenko na začátku názvu funkce uvedeme. Jde pouze o pomůcku pro nás a čtenáře našeho programu, aby všichni rychle dokázali poznat, z jakých komponent se náš program skládá. Protože v tomto kurzu směřujeme k vývoji v Reactu, budeme tuto konvenci dodržovat už od této chvíle.

Rozšiřme nyní naši aplikaci o možnost u každé položky označit, zda jsme ji již koupili či nikoliv. Jednu položku takového seznamu bychom mohli reprezentavat například takto:

```js
const item1 = {
  product: 'Rohlíky',
  amount: '10',
  done: true,
};
```

Komponenta pro takovouto položku by pak mohla vypadat takto:

```js
const ListItem = (item) => {
  let tickClass = '';
  if (item.done) {
    tickClass = ' btn-tick--on';
  }

  return `
    <div class="list-item">
      <button class="icon-btn btn-tick${tickClass}"></button>
      <div class="list-item__product">${item.product}</div>
      <div class="list-item__amount">${item.amount} ${item.unit}</div>
    </div>
  `;
};
```

Jednotlivé položky už si jako profíci stáhneme z API. Výsledné použítí pak bude vypadat takto:

```js
const renderShoppingList = (items) => {
  const shoppingList = document.querySelector('.shoplist__items');
  shoppingList.innerHTML = items.map((item) => ListItem(item)).join('');
};

fetch('https://nakupy.kodim.app/api/sampleweek/mon/items')
  .then((response) => response.json())
  .then((data) => renderShoppingList(data.result));
```

Výhodou je, že v naší funkci `renderShoppingList` nemusíme nic měnit. O všechny změny nutné kvůli rozšíření dat o položku `done` jsme se postarali uvnitř komponenty `ListItem`.
