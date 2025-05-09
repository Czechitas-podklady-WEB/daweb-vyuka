## Efekty se závislostmi

Zatím jsme viděli efekty, které se spouštějí pouze jednou, tedy ve chvíli, kdy se komponenta poprvé objeví na stránce. Občas však potřebujeme efekt, který se spustí pokaždé, když se změní nějaká stavová proměnná nebo _prop_. Takový efekt vyrobíme tak, že do hranatých závorek napíšeme stavovou proměnnou nebo _prop_, na kterou má efekt reagovat, nebo-li na které má spuštění efektu záviset.

```js
const Komponenta = () => {
  const [datum, setDatum] = useState('2022-05-14');

  useEffect(() => {
    console.log(`Hodnota stavové proměnné datum je ${datum}.`);
  }, [datum]);

  // …
};
```

Tato technika se nám hodí nejčastěji ve chvíli, kdy chceme stáhnout nějaká data z API ve chvíli, kdy komponenta změní svůj stav. V našem příkladu si stáhneme z API jméno, které má svátek v den, který uživatel vybere v kalendáři.

```jsx
export const HomePage = () => {
  const [name, setName] = useState('');
  const [datum, setDatum] = useState('2022-11-11');

  useEffect(() => {
    const fetchName = async () => {
      const [rok, mesic, den] = datum.split("-");
      const response = await fetch(
        `https://nameday.abalin.net/api/V2/date?day=${den}&month=${mesic}`
      );
      const responseData = await response.json();
      setName(responseData.data.cz);
    };

    fetchName();
  }, [datum]);

  return (
    <>
      <div className="container">
        <h1>Svátky</h1>
        <label>
          Vyberte datum:{" "}
          <input
            type="date"
            value={datum}
            onChange={(event) => setDatum(event.target.value)};
          />
        </label>
        <div className="nameday">V tento den má svátek {name}</div>
      </div>
    </>
  );
};
```
