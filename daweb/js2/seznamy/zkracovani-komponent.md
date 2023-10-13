## Zkrácený zápis komponent

Všimněte si, že všechny naše komponenty psané v JSX jsou vlastně funkce, které rovnou vracejí hodnotu. Můžeme je tedy také zkrátit pomocí zkráceného zápisu funkcí, který jsme probrali v souvislosti s používáním metody `map`.

Mějme následující komponentu:

<!-- prettier-ignore -->
```js
const Time = (props) => {
  const { hours, minutes } = props;
  return (
    <div className="time">
      <span className="time__hours">{hours}</span>
      :
      <span className="time__mins">{minutes}</span>
    </div>
  );
}
```

Tuto komponentu bychom mohli převést na zkrácený zápis, ale vadí nám tam řádek s destrukturováním. Z dřívějška už ovšem víme, jak destrukturování použít přímo v parametru funkce.

<!-- prettier-ignore -->
```js
const Time = ({ hours, minutes }) => {
  return (
    <div className="time">
      <span className="time__hours">{hours}</span>
      :
      <span className="time__mins">{minutes}</span>
    </div>
  );
}
```

Nyní už komponenta nedělá nic jiného, než že vrací JSX element. Můžeme ji proto převést na zkrácený zápis. Sluší se ale v zápise ponechat kulaté závorky pro lepší čítelnost.

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

Pokud je komponenta tak malá, že se vejde na jeden řádek, klidně se bez závorek obejdeme.

```js
const User = ({ login }) => <div className="user__login">{login}</div>;
```

Všimněte si, že pomocí takovéto komponenty bychom například mohli vyrobit pole JSX elementů z našeho pole uživatelů.

```js
const names = ['petr', 'jana', 'marek', 'eva', 'lenka', 'ondra'];
const users = names.map((name) => <User login={name} />);
```

Z tohoto bodu zbývá už jen malý krůček, abychom takovéto pole JSX komponent dokázali zobrazit na naší stránce.
