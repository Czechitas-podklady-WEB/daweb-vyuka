## Vzor: detail položky

Dalším z velmi častých vzorů je zobrazení detailu nějaké položky. Může se jednat o detail produktu v e-shopu, detail článku na blogu, detail události v kalendáři, ale také třeba o zobrazení rozbalovacího menu, zobrazení jedné ze záložek nebo přechod na jinou stránku pomocí navigace.

Tento vzor má dvě základní varianty. Buď v detailu zobrazujeme data, která už máme stažená, nebo si je komponenta zobrazující detail musí stáhnout sama.

### Zobrazení dat, která už máme stažená

Opět potřebujeme dvě komponenty, jednu nazveme `Main` a druhou `Detail`. Komponenta `Main` bude zobrazovat nějakou položku, na kterou se dá kliknout pro zobrazení detailu. Vzhledem k tomu, že tato komponenta bude mít data stažená ve stavu, stačí přidat další stav, který bude obsahovat informaci o tom, zda je detail zobrazený nebo ne.

```jsx
export const Main = () => {
  const [item, setItem] = useState(null);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch('http://localhost:4000/api/items/0');
      const data = await response.json();
      setItem(data.result);
    }

    fetchItem();
  }, []);
  
  if (item === null) {
    return <p>Loading...</p>;
  }

  const toggleOpened = () => {
    setOpened(!opened);
  }

  return (
    <>
      <div
        className="panel"
        onClick={toggleOpened}
      >
        {item.name}
      </div>
      <Detail opened={opened} description={item.description} />
    </>
  );
};
```

Komponenta `Detail` bude zobrazovat detail položky. Komponenta `Main` předá stažená data do komponenty `Detail` pomocí props. Komponenta `Detail` pak už jen potřebuje prop `opened`, která řekne, zda má být detail zobrazený nebo ne.

```jsx
export const Detail = ({ description, opened }) => {
  if (!opened) {
    return null;
  }
  
  return (
    <div className="box">
      {description}
    </div>
  );
};
```

### Zobrazení dat, která si komponenta stáhne sama

V tomto případě budeme data stahovat v komponentě `Detail`. Budeme tedy pobřebovat `useEffect`, který bude záviset na prop `opened`. Když se `opened` změní na `true`, stáhneme data a uložíme je do stavu. Když se `opened` změní na `false`, pouze schováme detail.

```jsx
export const Detail = ({ opened }) => {
  const [item, setItem] = useState(null);
  
  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch('http://localhost:4000/api/items/0');
      const data = await response.json();
      setItem(data.result);
    }
  
    if (opened) {
      fetchItem();
    }
  }, [opened]);

  if (!opened || item === null) {
    return null;
  }
  
  return (
    <div className="box">
      {item.description}
    </div>
  );
};
```

Komponenta `Main` pak bude obsahovat pouze stav `opened`:

```jsx
export const Main = () => {
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => {
    setOpened(!opened);
  };

  return (
    <>
      <div
        className="panel"
        onClick={toggleOpened}
      >
        Chřest
      </div>
      <Detail opened={opened} />
    </>
  );
};
```
