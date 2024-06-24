## Prop `children`

Když vytváříme znovupoužitelné komponenty, často budeme chtít, aby si programátor mohl sám rozhodnout, co se v komponentě zobrazí. Mohli bychom například umožnit zobrazit uvnitř komponenty `Alert` nějaký složitější obsah, než pouze textový řetězec.

Například bychom chtěli mít možnost zobrazit v komponentě `Alert` několik odstavců textu:

```jsx
<Alert type="warning" title="Warning!">
  <p>Something went a tiny bit wrong.</p>
  <p>But don't worry, it's not a big deal yet.</p>
</Alert>
```

Naše vlastní komponenty jsme zatím vždy používali jako nepárové značky, do kterých jsme posílali pouze props. Teď však najednou posíláme do komponenty `Alert` několik potomků. Abychom tyto potomky mohli zobrazit, musíme v komponentě `Alert` použít prop `children`.

V Reactu je v každé komponentě k dispozici speciální prop nazvaná `children`, která obsahuje všechny do komponenty vnořené potomky, tedy jakékoli JSX prvky, které se nacházejí uvnitř značky komponenty.

Obsah prop `children` pak můžeme přímo vložit do JSX komponenty na místo, kde se nám to hodí. V našem případě do elementu `.alert__body`.

```jsx
export const Alert = ({ type, title, children }) => {
  return (
    <div className={`alert alert--${type}`}>
      <div className="alert__head">
        <i className={`alert__icon fas ${selectFaIcon(type)}`}></i>
        <span className="alert__title">{title}</span>
      </div>
      <div className="alert__body">{children}</div>
    </div>
  );
};
```

Prop `children` budeme využívat vždy, když budeme potřebovat napsat komponentu, která má obsahovat další prvky nebo komponenty, ale my dopředu nevíme, jaké to budou.

Časté použití jsou například znovupoužitelné komponenty jako různá dialogová okna, sidebary, nastylované boxy, ve kterých může být libovolný obsah, nebo obecné komponenty, které například řídí rozložení prvků na stránce.
