## Složitější komponenty

Z praktického hlediska je náš ilustrativní příklad výše stále hodně jednoduchý. V praxi míváme mnohem obsáhlejší data i mnohem složitejší komponenty. Vezměme například data pro nám již známý nákupní seznam.

```js
const list = [
  { name: 'mrkev', amount: '3ks', bought: false },
  { name: 'paprika', amount: '2ks', bought: true },
  { name: 'cibule', amount: '2ks', bought: false },
  { name: 'čínské zelí', amount: '1ks', bought: true },
  { name: 'arašídy', amount: '250g', bought: false },
  { name: 'sojová omáčka', amount: '1ks', bought: false },
];
```

Pokud tento seznam budeme chtít zobrazit, budeme potřebovat složitější JSX strukturu. Například jako v následující ukázce.

```jsx
const HomePage = () => (
  <>
    <h1>Nákupní seznam</h1>
    <div className="shopping-list">
      {list.map((item) => {
        const tickClass = item.bought
          ? 'item__done item__done--tick'
          : 'item__done';

        return (
          <div className="shopitem">
            <button className={tickClass} />
            <div className="shopitem__name">${item.name}</div>
            <div className="shopitem__amount">${item.amount}</div>
            <button className="btn-delete">Smazat</button>
          </div>
        );
      })}
    </div>
  </>
);
```

Všimněte si, že funkce, která vyrábí JSX pro jednotlivé položky našeho seznamu, je už o kus obsáhlejší. Dokonce o tolik, že už nejde napsat zkráceným způsobem a musíme použít složené závorky a `return`. Tato ukázka opět poslouží jako dobré cvičení na pozornost ohledně závorek.

V praxi však často nastane situace, že funkce použitá uvnitř `map` je tak složitá, že je těžké se v kódu orientovat. Náš poslední příklad už je také trochu na hraně. V takovém případě si vzpomeneme na předchozí lekci, kde jsme probírali rozdělování jedné velké komponenty na menší celky. Rozhodně se nám vyplatí vytvořit si pro zobrazování jednotlivých prvků seznamu komponentu, například takto.

```jsx
const ShopItem = ({ name, amount, done }) => {
  const tickClass = bought ? 'item__done item__done--tick' : 'item__done';
  return (
    <div className="shopitem">
      <button className={tickClass} />
      <div className="shopitem__name">${name}</div>
      <div className="shopitem__amount">${amount}</div>
      <button className="btn-delete">Smazat</button>
    </div>
  );
};
```

Nyní stačí komponentu použít uvnitř `HomePage`.

```jsx
const HomaPage = () => (
  <>
    <h1>Nákupní seznam</h1>
    <ul className="shopping-list">
      {list.map((item) => (
        <ShopItem name={item.name} amount={item.amount} bought={item.bought} />
      ))}
    </ul>
  </>
);
```

Takto je náš kód mnohem čitelnější. Toto je jeden z hlavních důvodů, proč rozdělujeme naše aplikace na komponenty. Lépe se tak dokážeme v kódu orientovat nejen my, ale také naši nebozí kolegové, kteří pracují na stejném projektu a musí číst náš kód.
