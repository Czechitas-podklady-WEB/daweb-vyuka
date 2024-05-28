## API v Typescriptu

Dostáváme se do závěrečné fáze naší malé aplikace. Máme komponentu `Form`, která sbírá data od uživatele a máme komponentu `Activity`, která nám zobrazí vygenerovanou aktivitu. Nezbývá než vše dát dohromady a vytvořit funkci pro vygenerování activity. Proto si ukážeme, jak používat api volání v typescritpu.

Vytvoříme si asynchronní funkci `fetchData`, která na vstupu bude očekávat informaci, o jakou aktivitu má uživatel zájem. Tuto informaci pak předáme v metodě fetch v url adrese. Funkce by nám na základě typu, měla vrátit jednu náhodnou aktivitu.

```js
const fetchData = async (type: string) => {
  const res = await fetch(`http://www.boredapi.com/api/activity?type=${type}`);
  const data = await res.json();
  console.log(data);
};
```

Takto získaná data musíme uložit do stavu, abychom s nimi mohli dál pracovat. Ovšem jakého budou datového typu? V reálném životě byste dostali strukturu dat od svých Backend kolegů, ale pro náš případ bude stačit, když se podíváme do konzole, co nám naše funkce `fetchData` vrátí. Vidíme, že je to objekt tvořený několika vlastnostmi, takže si stačí podle nich vytvořit interface.

```js
interface ActivityDataStructure {
  accessibility:  number
  activity: string;
  key: string;
  link: string;
  participants: number;
  price: number;
  type: string;
}
...
const [activityData, setActivityData] = useState<ActivityDataStructure>();
```

Upravíme naši funkci `fetchData`, aby ukládala data do stavu.

```js
const fetchData = async (type: string) => {
  const res = await fetch(`http://www.boredapi.com/api/activity?type=${type}`);
  const data = await res.json();
  setActivityData(data);
};
```

Zbývají poslední dvě věci a to vytvořit si funkci, která z formuláře obdrží data od uživatele a odešleje pomocí Fetche. A pak už jen musíme zobrazit data, které obdržíme v odpověďi našeho volání.

```js
const handleSubmitForm = (data: FormDataStructure) => {
  fetchData(data.type);
};
```

Výsledný kód v souboru `App.tsx` pak bude vypadat takto:

```js
import { useState } from 'react';
import { Activity } from './components/activity';
import { Form, FormDataStructure } from './components/form';
import './App.css';

interface ActivityDataStructure {
  accessibility:  number
  activity: string;
  key: string;
  link: string;
  participants: number;
  price: number;
  type: string;
}

function App() {
  const [activityData, setActivityData] = useState<ActivityDataStructure>();

  const fetchData = async (type: string) => {
    const res = await fetch(`http://www.boredapi.com/api/activity?type=${type}`);
    const data = await res.json();
    setActivityData(data);
  }

  const handleSubmitForm = (data: FormDataStructure) => {
    fetchData(data.type);
  };

  return (
    <>
      <Form
        onSubmitForm={handleSubmitForm}
      />
      {activityData && (
        <Activity
          nameOfActivity={activityData.activity}
          type={activityData.type}
          participants={activityData.participants}
          price={activityData.price}
        />
      )}
    </>
  )
}

export default App
```
