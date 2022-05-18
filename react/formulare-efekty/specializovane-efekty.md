## Specializované efekty

Zatím jsme viděli efekty, které se spouštějí pouze jednou, tedy ve chvíli, kdy se komponenta poprvé objeví na stránce. Občas však potřebujeme efekt, který se spustí pokaždé, když se změní nějaká stavová proměnná nebo prop. Takový efekt vyrobíme tak, že do hranatých závorek napíšeme stavovou proměnnou nebo prop, na kterou má efekt reagovat.

```js
const Komponenta = () => {
  const [datum, setDatum] = useState('2022-05-14');

  useEffect(() => {
    console.log(`Hodnota stavové proměnné datum je ${datum}.`);
  }, [datum]);

  // …
};
```

Tato technika se nám hodí nejčastějí ve chvíli, kdy chceme stáhnout nějaká data z API ve chvíli, kdy komponenta změní svůj stav.

V [Codesandboxu zde](https://codesandbox.io/s/da-web-svatky-v-den-xuj8oc?file=/src/App.jsx) si můžeš prohlédnout komponentu, která zobrazuje, kdo má svátek v den, který si zvolí uživatel.
