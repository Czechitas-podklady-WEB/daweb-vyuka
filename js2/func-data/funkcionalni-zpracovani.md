## Funkcionální zpracování dat

V praxi často narazíme na potřebu zpracovat větší množství dat, která jsme například vytáhli z databáze v naší aplikaci. Chceme provádět vyhledávání, datazování, transformace či agregace. K takovému účelu se často použije nějaká forma cyklu. Z předchozího kurzu již známe cyklus `forEach`. Brzy však narazíme na mnoho často se opakující situací a konstrukcí, pro které má JavaScript připravené specializované metody.

Vyhledávání a dotazování:

- `Array.find`
- `Array.findIndex`
- `Array.every`
- `Array.some`

Transformace:

- `Array.map`
- `Array.filter`

Agregace:

- `Array.join`

### Zkracování arrow funkcí

Předtím, než se podíváme na samotné metody, ukážeme si, jak se dají zkrátit arrow funkce. Pokud arrow funkce nedělá nic jiného, než že vrací nějakou hodnotu, je možné vynechat složené závorky a klíčové slovo `return`. Obě níže napsané funkce budou fungovat a vrátí nám řetězec s pozdravem.

```js
const greetFunction = (name) => {
  return `Hi, ${name}`;
};

const shortGreetFunction = (name) => `Hi, ${name}`;

console.log(greetFunction('Alex'));
console.log(shortGreetFunction('Alex'));
```

Nemusíme samozřejme vracet jen řetězec. 

```js
const createPerson = (name, age, gender) => ({
  name: name,
  age: age,
  gender: gender,
});
```

Je dobré si dát pozor, aby náš kód zůstal čitelný. Pokud je funkce jasná a jednoduchá, zkrácení se vyplatí. Pokud pracujeme s obřími objekty, může se vyplatit napsat funkci běžným způsobem.
