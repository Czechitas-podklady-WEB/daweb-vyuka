## Podmíněné zobrazení

Pro účely následujícího výkladu si představme jednoduchou komponentu `Product`, která zobrazuje jednoduchý produkt v nějakém e-shopu.

```js
const Product = (props) => {
  const { name, img } = props;

  return (
    <div className="product">
      <div className="product__name">{name}</div>
      <img className="product__img" src={img} />
      <button>Vložit do košíku</button>
    </div>
  );
};
```

Tato komponenty hezky ukazuje, kam všude můžeme do JSX vložit JavaScriptovou hodnotu pomocí složených závorek. Říkáme tomu "otevírání JavaScriptového okna".

Za prvé můžeme JavaScriptové okno otevřít, když předáváme hodnotu nějaké prop.

```js
<img className="product__img" src={img} />
```

Zároveň také můžeme okno otevřít, když chceme vytvořit obsah nějakého elementu.

```js
<div className="product__name">{name}</div>
```

Obsah elementu však může být mnohem složitejší než pouze hodnota uvnitř jedné proměnné.
Představme si, že pokud je produkt nedostupný, chceme místo tlačítka zobrazit element se zprávou. Přidáme tedy do komponenty novou prop `isAvailable` a použijeme náš oblíbený podmíněný operátor.

```js
const Product = (props) => {
  const { name, img, isAvailable } = props;

  return (
    <div className="product">
      <div className="product__name">{name}</div>
      <img className="product__img" src={img} />
      {isAvailable ? <button>Vložit do košíku</button> : <div>Nedostupné</div>}
    </div>
  );
};
```

Všimněte si, že na místě, kde chceme provést rozhodnutí, otevřeme JavaScriptové okno, abychom mohli použít náš podmíněný operátor. Ten pak dle hodnoty v prop `isAvailable` vrátí příslušný kus JSX.

Pokud v podmíněném operátoru pracujeme s obsáhlejším JSX, často se nám celý výraz nevejde na jeden řádek. Pak je ve zvyku pomoci si v ternárním operátoru kulatými závorkami.

```js
const Product = (props) => {
  const { name, img, isAvailable } = props;

  return (
    <div className="product">
      <div className="product__name">{name}</div>
      <img className="product__img" src={img} />
      {isAvailable ? (
        <button>Vložit do košíku</button>
      ) : (
        <div className="not-available">Nedostupné</div>
      )}
    </div>
  );
};
```

Občas se nám stane, že v jednom z případů podmínky nechcem zobrazit nic. Dejme tomu, že nechceme uživateli zobrazovat zprávu o nedostupnosti, ale chceme pouze vynechat objednávací tlačítko. V takovém případě můžeme vrátit hodnotu `null`, která pro React znamená, že nemá zobrazit nic.

```js
const Product = (props) => {
  const { name, img, isAvailable } = props;

  return (
    <div className="product">
      <div className="product__name">{props.name}</div>
      <img className="product__img" src={props.img} />
      {isAvailable ? <button>Vložit do košíku</button> : null}
    </div>
  );
};
```
