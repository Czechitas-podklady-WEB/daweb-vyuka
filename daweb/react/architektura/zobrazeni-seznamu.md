## Vzor: zobrazení seznamu

Nejzákladnější stavební vzor je zobrazení seznamu položek. Tuto techniku už jste v tomto kurzu sami viděli nejméně stokrát. Ukažme si obecný přístup pro zobrazení seznamu v Reactu.

Na zobrazení seznamu potřebujeme tyto ingredience:

1. Komponenty `List` a `ListItem` pro zobrazení seznamu a jednotlivých položek.
1. Stav `items` pro uložení dat ze serveru.
1. Efekt, který stáhne data ze serveru a uloží je do stavu `items`.
1. Komunikaci směrem od rodiče k dítěti, která předá položku seznamu komponentě `ListItem`.

Diagram komponent bude vypadat takto:

::fig{src="assets/diagram01.png" size="40"}

Implementace tohoto vzoru je relativně přímočará.

Komponenta `List`:

```jsx
const List = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('https://example.com/api/items');
      const data = await response.json();
      setItems(data);
    };

    fetchItems();
  }, []);

  if (items === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="list">
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};
```

Komponenta `ListItem`:

```jsx
const ListItem = ({ item }) => {
  return (
    <div className="list__item">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
};
```

Vzor _zobrazení seznamu_ najdeme téměř v každé webové aplikaci, ať už zobrazujeme seznam článků, produktů, uživatelů, zpráv, položek menu atd. Všechny tyto seznamy mají společné to, že je potřeba je nejprve stáhnout ze serveru a poté je zobrazit. Než data ze serveru dorazí, zobrazíme nějaký indikátor načítání.
