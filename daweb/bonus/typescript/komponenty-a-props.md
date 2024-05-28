## Komponenty a jejich props

Představte si, že máte volný večer a nevíte, jakou ativitou ho vyplnit. Vytvoříme si proto aplikaci, která nám na základě vstupů od uživatele vrátí seznam možných aktivit, kterým bychom se mohli věnovat.

Naši aplikaci si vybudujeme od těch nejjednodušších částí a proto si jako první vytvoříme komponentu, která nám bude návrhy na možné aktivity zobrazovat.

V našem projektu si ve složce `src` vytvoříme složku `components` a v ní složku pro naši první komponentu v Typescriptu, kterou si pojmenujeme `Activity` a vytvoříme si v ní soubor `index.tsx`.
Protože používáme Typescript, tak naše soubory končí na `tsx` místo `jsx` a stejně tak soubory, které dříve používali čistý Javascript, tedy končily na `js`, budou v Typescriptu končit na `ts`.

V `index.tsx` bude následující kód:

```js
export const Activity = () => (
  <div>
    <h3>Name of the Activity: </h3>
    <p>Type: </p>
    <p>Participants: </p>
    <p>Price: </p>
  </div>
);
```

Každá komponenta v Typescriptu by měla mít definovaný svůj typ. My používáme funkční komponenty, takže naše komponenta bude mít typ `FunctionComponent` nebo zkráceně `FC` a jsme v Reactu, takže naše komponenta bude vypadat takto:

```js
export const Activity: React.FC = () => (
...
);
```

Naše komponenta bude také očekávat nějaké vstupy, tedy props, a i ty musíme definovat. V Typescriptu se props u komponent definují pomocí `interface`, který se následně předává komponentě jako tzv. generický parametr. Ten se uvádí za definici typu komponenty mezi `<>`.

```js
interface ActivityProps {
  nameOfActivity: string;
  type: string;
  participants: number;
  price: number;
}

export const Activity: React.FC<ActivityProps> = ({
  nameOfActivity,
  type,
  participants,
  price,
}) => (
  <div>
    <h3>Name of the Activity: {nameOfActivity}</h3>
    <p>Type:{type} </p>
    <p>Participants: {participants}</p>
    <p>Price: {price}</p>
  </div>
);
```

Takto vytvořenou komponentu si naimportujeme do souboru `App.tsx`. Všimněte si, že nám ji Typescript červeně podtrhne a vyhodí chybu:

```js
import { Activity } from "./components/activity";

function App() {
  return (
    <>
      <Activity /> // Error: Type '{}' is missing the following properties from
      type 'ActivityProps': nameOfActivity, type, participants, price ts(2739)
    </>
  );
}

export default App;
```

Typescript nám říká, že komponenta vyžaduje vstupy, které jsou `nameOfActivity`, `type`, `participants` a `price`. Je tedy nutné tyto props u komponenty uvést a vložit do nich vstupy se správným datovým typem. Typescript nám tak napovídá, co komponenta potřebuje a zároveň nás hlídá, zda jí předáváme správné údaje. Použití naší komponenty by mělo vypadat nějak takto:

```js
function App() {
  return (
    <>
      <Activity
        nameOfActivity="Learn React II."
        type="education"
        participants={40}
        price={1}
      />
    </>
  );
}
```

Teď už umíme používat Typescript v jednoduchých komponenách a v další lekci si ukážeme jak pracovat s Typescriptem, pokud očekáváme nějaký vstup od uživatele a jak tento vstup předávat mezi komponentami.
