Naše cesta Reactem pokračuje k další z velmi důležitých dovedností. Téměř každá webová aplikace zobrazuje nějaký seznam, ať už to je nákupní košík, seznam divadelních představení, jídelní lístek nebo třeba seznam nepřečtených e-mailů. V této lekci si ukážeme jak v Reactu zařídit zobrazení seznamu uloženého v nějakém JavaScriptovém poli.

## Opakování metody map

Na zobrazování seznamů budeme v Reactu používat metodu `map`, kterou již znáte z kapitoly o pokročílém JavaScriptu. Jistě se nám vyplatí si tuto metodu připomenout a zopakovat.

Metoda `map` slouží k tomu, abychom z jednoho JavaScriptového pole vyrobili pole jiné pomocí nějaké tranformační funkce. Takto například vyrobíme e-maily pro seznam uživatelů.

```js
const names = ['petr', 'jana', 'marek', 'eva', 'lenka', 'ondra'];
const emails = names.map((name) => {
  return `${name}@mejlik.cz`;
});
```

Jistě si také vzpomenete, že jsme při zápisu takovýchto transformací používali zkrácený zápis arrow funkcí.

```js
const names = ['petr', 'jana', 'marek', 'eva', 'lenka', 'ondra'];
const emails = names.map((name) => `${name}@mejlik.cz`);
```

Zkracování funkcí nám však pomůže i v psaní Reactových komponent.

### Zkrácený zápis delších funkcí

Při práci v Reactu budeme často mít komponentu, která nedělá nic jiného, než že vrací nějaké JSX. Takové JSX se nám většinou nevejde na jeden řádek. Přesto můžeme funkci s komponentu šikovně zkrátit.

Mejmě následující komponentu.

<!-- prettier-ignore -->
```js
const Time = (props) => {
  const { hours, minutes } = props;
  return (
    <div className="time">
      <span className="time__hours">{props.hours}</span>
      :
      <span className="time__mins">{props.minutes}</span>
    </div>
  );
}
```

Tuto komponentu bychom mohli převést na zkrácený zápis, ale vadí nám tam řádek s destrukturováním. Destrukturování se však v JavaScriptu dá přesunout přímo do parametru funkce.

<!-- prettier-ignore -->
```js
const Time = ({ hours, minutes }) => {
  return (
    <div className="time">
      <span className="time__hours">{props.hours}</span>
      :
      <span className="time__mins">{props.minutes}</span>
    </div>
  );
}
```

Takovýto zápis je pro nás novinka, ale v praxi se běžně používá, takže je drobé jej dostat pod kůži. Nyní už komponenta nedělá nic jiného, než že vrací JSX element. Můžeme ji proto převést na zkrácený zápis. Sluší se ale v zápise ponechat kulaté závorky pro lepší čítelnost.

<!-- prettier-ignore -->
```js
const Time = ({ hours, minutes }) => (
  <div className="time">
    <span className="time__hours">{hours}</span>
    :
    <span className="time__mins">{minutes}</span>
  </div>
);
```

Pokud je komponenta malá, klidně se bez závorek obejdeme.

```js
const User = ({ login }) => <div className="user__login">{login}</div>;
```

Všimněte si, že pomocí takovéto komponenty bychom například mohli vyrobit pole JSX elementů z našeho pole uživatelů.

```js
const names = ['petr', 'jana', 'marek', 'eva', 'lenka', 'ondra'];
names.map((name) => <User login={name} />);
```

Z tohoto bodu zbývá už jen malý krůček, abychom takovéto pole JSX komponent dokázali zobrazit na naší stránce. To si však necháme až na druhou část lekce.
