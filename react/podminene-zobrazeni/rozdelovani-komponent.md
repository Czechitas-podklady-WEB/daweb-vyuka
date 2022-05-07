## Rozdělování komponent

Jakmile začneme používat podmíněné zobrazení, brzy se dostaneme do situace, že naše podmíněné výrazy narostou do větších rozměrů, například takto.

```js
const Product = (props) => {
  const { name, img, isAvailable } = props;

  return (
    <div className="product">
      <div className="product__name">{name}</div>
      <img className="product__img" src={img} />
      {isAvailable ? (
        <div className="order-controls">
          <button className="btn order-btn">
            <i className="btn__icon icon-order" />
            <span className="btn__text">Vložit do košíku</span>
          </button>
          <button className="btn order-now-btn">
            <i className="btn__icon icon-order-now" />
            <span className="btn__text">Koupit ihned</span>
          </button>
        </div>
      ) : (
        <div className="not-available">
          <p>Nedostupné</p>
          <p>Sledujte dostupnost produktu</p>
          <button className="btn">
            <i className="btn__icon icon-watch" />
            <span className="btn__text">Sledovat</span>
          </button>
        </div>
      )}
    </div>
  );
};
```

Pokud začiná být kód komponenty takto obsáhlý, čtenář se v něm začne snadno ztrácet. V takovém případě často přistoupíme k tomu, že jednu velkou komponentu rozdělíme na několik menších. Můžeme například vytvořit komponenty `OrderControls` a `NotAvailable`.

```js
const OrderControls = () => {
  return (
    <div className="order-controls">
      <button className="btn order-btn">
        <i className="btn__icon icon-order" />
        <span className="btn__text">Vložit do košíku</span>
      </button>
      <button className="btn order-now-btn">
        <i className="btn__icon icon-order-now" />
        <span className="btn__text">Koupit ihned</span>
      </button>
    </div>
  );
};
```

```js
const NotAvailable = () => {
  return (
    <div className="not-available">
      <p>Nedostupné</p>
      <p>Sledujte dostupnost produktu</p>
      <button className="btn">
        <i className="btn__icon icon-watch" />
        <span className="btn__text">Sledovat</span>
      </button>
    </div>
  );
};
```

Všimněte si, že tyto komponenty nemají žádné props, protože zatím nepotřebují žádná data zvenku. Komponenta `Product` pak bude vypadat takto.

```js
import { OrderControls } from '../OrderControls';
import { NotAvailable } from '../NotAvailable';

const Product = (props) => {
  const { name, img, isAvailable } = props;

  return (
    <div className="product">
      <div className="product__name">{name}</div>
      <img className="product__img" src={img} />
      {isAvailable ? <OrderControls /> : <NotAvailable />}
    </div>
  );
};
```

Tímto se nám komponenta hezky pročistila a je mnohem jasnější, co dělá a k čemu slouží.
