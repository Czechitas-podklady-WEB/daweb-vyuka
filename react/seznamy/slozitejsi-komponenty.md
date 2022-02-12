## Složitější komponenty

Z praktického hlediska je náš ilustrativní příklad výše stále hodně jednoduchý. V praxi míváme mnohem obsáhlejší data i mnohem složitejší komponenty. Vezměme například data pro nám již známý nákupní seznam.

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

Pokud tento seznam budeme chtít zobrazit, budeme potřebovat složitější JSX strukturu. Například jako v následující ukázce.

```js
const App = () => (
  <>
    <h1>Nákupní seznam</h1>
    <div className="shopping-list">
      {list.map((item) => {
        const itemClass = item.bought ? 'item item--selected' : 'item';
        return (
          <div className={itemClass}>
            <span className="item__product">{item.product}</span>
            <span className="item__amount">{item.amount}</span>
          </div>
        );
      })}
    </div>
  </>
);
```

Všimněte si, že funkce, která vyrábí JSX pro jednotlivé položky našeho seznamu, je už o kus obsáhlejší. Dokonce o tolik, že už nejde napsat zkráceným způsobem, a musíme použít složené závorky a `return`. Tato ukázka opět poslouží jako dobré cvičení na pozornost ohledně závorek.

V praxi však často nastane situace, že funkce použitá uvnitř `map` je tak složitá, že je těžké se v kódu orientovat. Náš poslední příklad už je také trochu na hraně. V takovém případě se nám rozhodně vyplatí vytvořit si pro zobrazování jednotlivých prvků seznamu komponentu, například takto.

```js
const ShoppingItem = (props) => {
  const itemClass = props.bought ? 'item item-selected' : 'item';
  return (
    <div className={itemClass}>
      <span className="item__product">{props.product}</span>
      <span className="item__amount">{props.amount}</span>
    </div>
  );
};

const App = () => (
  <>
    <h1>Nákupní seznam</h1>
    <div className="shopping-list">
      {list.map((item) => (
        <ShoppingList
          product={item.product}
          amount={item.amount}
          bought={item.bought}
        />
      ))}
    </div>
  </>
);
```

Takto je náš kód mnohem čitelnější. Toto je jeden z hlavních důvodů, proč rozdělujeme naše aplikace na komponenty. Lépe se tak dokážeme v kódu orientovat nejen my, ale také naši kolegové, kteří pracují na stejném projektu a musí číst náš kód.
