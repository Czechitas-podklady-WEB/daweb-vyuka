## Podmíněné zobrazení.

Do této chvíle jsme na základě vstupních props komponenty měnili pouze její stylování. Často však narazíme na situaci, kdy chceme změnit i samotný obsah komponenty. Představme si, že máme například komponentu `Product`, která umožňuje vložit produkt v e-shopu do košíku.

```js
const Product = (props) => {
  return (
    <div className="product">
      <div className="product__name">{props.name}</div>
      <img className="product__img" src={props.img} />
      <button>Vložit do košíku</button>
    </div>
  );
};
```

Pokud už je však produkt objednaný, chtěli bychom zobrazit tlačítko s jiným nápisem. K tomuto můžeme s výhodou použít náš oblíbený podmíněný operátor.

<!-- prettier-ignore -->
```js
const Product = (props) => {
  return (
    <div className="product">
      <div className="product__name">{props.name}</div>
      <img className="product__img" src={props.img} />
      {
        props.ordered ? <button>Zrušit objednávku</button> : <button>Vložit do košíku</button>
      }
    </div>
  );
};
```

Všimněte si, že na místě, kde chceme provést rozhodnutí, otevřeme pomocí složených závorek JavaScriptové okno, abychom mohli použít náš podmíněný operátor. Ten pak dle hodnoty uložné v prop s názvem `ordered` vrátí příslušný kus JSX.

Pokud v podmíněném operátoru pracujeme s obsáhlejším JSX, často se nám celý výraz nevejde na jeden řádek. Pak je ve zvyku formátovat kód komponenty takto.

```js
const Product = (props) => {
  return (
    <div className="product">
      <div className="product__name">{props.name}</div>
      <img className="product__img" src={props.img} />
      {props.ordered ? (
        <button>Zrušit objednávku</button>
      ) : (
        <button>Vložit do košíku</button>
      )}
    </div>
  );
};
```

Občas se nám stane, že v jednom z případů podmínky nechcem zobrazit nic. Dejme tomu, že nechceme uživateli umožnit zrušit objednávku přímo u daného produktu. V takovém případě můžeme vrátit hodnotu `null`, která pro React znamená, že nemá zobrazit nic.

```js
const Product = (props) => {
  return (
    <div className="product">
      <div className="product__name">{props.name}</div>
      <img className="product__img" src={props.img} />
      {props.ordered ? null : <button>Vložit do košíku</button>}
    </div>
  );
};
```
