Naše cesta Reactem pokračuje k další z velmi důležitých dovedností. Téměř každá webová aplikace zobrazuje nějaký seznam, ať už to je nákupní košík, seznam divadelních představení, jídelní lístek nebo třeba seznam nepřečtených e-mailů. V této lekci si ukážeme jak v Reactu zařídit zobrazení seznamu uloženého v nějakém JavaScriptovém poli.

## Opakování metody map

Na zobrazování seznamů budeme v Reactu používat metodu `map`, kterou již znáte z kapitoly o pokročílém JavaScriptu. Jistě se nám vyplatí si tuto metodu připomenout a zopakovat.

Metoda `map` slouží k tomu, abychom z jednoho JavaScriptového pole vyrobili pole jiné pomocí nějaké tranformační funkce. Takto například vyrobíme e-maily pro seznam uživatelů.

```js
const names = ['petr', 'jana', 'marek', 'eva', 'lenka', 'ondra'];
names.map((name) => {
  return `${name}@mejlik.cz`;
});
```

Jistě si také vzpomenete, že jsme při zápisu takovýchto transformací používali zkrácený zápis arrow funkcí.

```js
const names = ['petr', 'jana', 'marek', 'eva', 'lenka', 'ondra'];
names.map((name) => `${name}@mejlik.cz`);
```

### Zkrácený zápis se závorkami

Občas se nám stane, že funkce sice nedělá nic jiného, než že vrací hodnotu, ale tato hodnota se nevejde na jeden řádek. Příkladem budiž například Reactová komponenta.

<!-- prettier-ignore -->
```js
const Time = (props) => {
  return (
    <div className="time">
      <span className="time__hours">{props.hours}</span>
      :
      <span className="time__mins">{props.minutes}</span>
    </div>
  );
}
```

Tuto komponent nedělá nic jiného, než že vrací JSX element. Můžeme ji proto převést na zkrácený zápis. Sluší se ale v zápise ponechat kulaté závorky pro lepší čítelnost.

<!-- prettier-ignore -->
```js
const Time = (props) => (
  <div className="time">
    <span className="time__hours">{props.hours}</span>
    :
    <span className="time__mins">{props.minutes}</span>
  </div>
);
```

Pokud je komponenta malá, klidně se bez závorek obejdeme.

```js
const User = (username) => <div className="user__name">{username}</div>;
```

Všimněte si, že pomocí takovéto komponenty bychom například mohli vyrobit pole JSX elementů z našeho pole uživatelů.

```js
const names = ['petr', 'jana', 'marek', 'eva', 'lenka', 'ondra'];
names.map((name) => <User username={name} />);
```

Z tohoto bodu zbývá už jen malý krůček, abychom takovéto pole JSX komponent dokázali zobrazit na naší stránce. To si však necháme až na druhou část lekce.
