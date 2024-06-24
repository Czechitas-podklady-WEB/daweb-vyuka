## Vzor: výběr položky

Pokud zobrazujeme nějaký seznam, často chceme, aby v něm uživatel mohl jednu nebo více položek označit jako vybrané. Každý z těchto případů, tedy vybírání pouze jedné položky a vybírání více položek, má svá Reactová úskalí.

### Výběr více položek

V obou výše zmíněných případech budeme mít komponenty `List` a `ListItem` pro zobrazení seznamu a jednotlivých položek. Nejjednodušší případ nastává, když chceme umožnit výběr několik položek a komponenta `List` nepotřebuje znát stav výběru. V tomto případě může mít každá komponenta `ListItem` vlastní stav, který bude obsahovat informaci o tom, zda je položka vybraná nebo ne.

Diagram komponent pro tento případ vypadá takto:

::fig{src="assets/diagram02.png" size="40"}

```jsx
import { useState } from 'react';

export const ListItem = ({ item }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`list__item${selected ? ' list__item--selected' : ''}`}
      onClick={toggleSelected}
    >
      {item.name}
    </div>
  );
};
```

Komponenta `List` může zůstat stejná jako při zobrazení seznamu bez výběru.

### Výběr jedné položky

Výběr jedné položky je kupodivu složitější. V tomto případě musí komponenta `List` znát stav výběru, aby zajistila, že lze vybrat pouze jednu položku. To zařídíme tak, že komponenta `List` bude mít stav `selectedId`, kde si bude pamatovat `id` vybrané položky. Musíme pak zajistit komunikaci od položky smerem k rodiči, aby se komponenta `List` dozvěděla o změně výběru. Také musí komponenta `List` říct každé položce, zda je vybraná nebo ne.

Nejdříve se podívejme na diagram komponent:

::fig{src="assets/diagram03.png" size="60"}

Kód komponenty `List` bude vypadat takto:

```jsx
import { useState } from 'react';

export const List = ({ items }) => {
  const [items, setItems] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/items');
      const data = await response.json();
      setItems(data.result);
    };

    fetchItems();
  }, []);

  if (items === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="list">
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          selected={item.id === selectedId}
          onSelect={setSelectedId}
        />
      ))}
    </div>
  );
};
```

Komponenta `ListItem` už tedy nebude potřebovat stav, protože informaci o tom, zde je vybraná nebo ne, dostane jako prop od rodiče.

```jsx
export const ListItem = ({ item, selected, onSelect }) => {
  return (
    <div
      className={`list__item${selected ? ' list__item--selected' : ''}`}
      onClick={() => onSelect(item.id)}
    >
      {item.name}
    </div>
  );
};
```
