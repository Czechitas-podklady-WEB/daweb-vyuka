## Specializované efekty

Zatím jsme viděli efekty, které se spouštějí pouze jednou, tedy ve chvíli, kdy se komponenta poprvé objeví na stránce. Občas však potřebujeme efekt, který se spustí pokaždé, když se změní nějaká prop. Takový efekt vyrobím tak, že do hranatých závorek napíšeme název prop, na kterou efekt reagovat.

```js
const Komponenta = ({ nejakaProp }) => {
  useEffect(() => {
    console.log('nejakaProp se změnila', nejakaProp);
  }, [nejakaProp]);
};
```

Tato technika se nám hodí nejčastějí ve chvíli, kdy chceme stáhnout nějaká data z API ve chvíli, kdy komponenta dostane jinou hodnotu v props.
