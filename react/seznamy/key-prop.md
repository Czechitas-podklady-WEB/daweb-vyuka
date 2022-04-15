## Práce s key prop

U příkladů výše jsme při zobrazování seznamů narazili na toto varování v konzoli

```
Warning: Each child in a list should have a unique "key" prop.
```

Tím se nám React snaží říct, že u každé komponenty v seznamu potřebuje mít unikátní klíč, který tuto položku identifikuje. Jde o podobný princip jako je například `id` u HTML elementů. Díky unikátním klíčům dokáže React rychleji vyřešit změny uvnitř seznamu jako přidávání nebo mazání položek.

Nejjednodušší situaci máme ve chvíli, kdy jsou naše data připravená tak, že každá položka obsahuje vlastnost s unikátními hodnotami. Podívejme se například na náš nákupní seznam.

```js
const list = [
  { product: 'mrkev', amount: '3ks', bought: false },
  { product: 'paprika', amount: '2ks', bought: true },
  { product: 'cibule', amount: '2ks', bought: false },
  { product: 'čínské zelí', amount: '1ks', bought: true },
  { product: 'arašídy', amount: '250g', bought: false },
  { product: 'sojová omáčka', amount: '1ks', bought: false },
];
```

Všechny hodnoty vlastnoti `product` jsou unikátní. Můžeme tedy tuto vlastnost použít jako klíč.

```js
<div className="shopping-list">
  {list.map((item) => (
    <ShoppingList
      key={item.product}
      product={item.product}
      amount={item.amount}
      bought={item.bought}
    />
  ))}
</div>
```

Všimněte si, že například vlastnost `amount` unikátní hodnoty nemá. Nelze tedy použít jako klíč. Pokud to uděláte, React si bude v konzoli opět hlasitě stěžovat.

V praxi občas narazíme na data, která žádnou unikátní vlastnost použitelnou jako klíč nemají. V takovém případě čeká trošku bolehlav i zkušenější programátory. Řešení tětcho situací proto necháme na některou z pozdějších lekci, až budete v Reactu více kovaní.
