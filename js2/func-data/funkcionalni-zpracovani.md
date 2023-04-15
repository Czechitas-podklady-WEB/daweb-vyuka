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

Nemusíme samozřejme vracet jen řetězec, ale i číslo, logickou hodnotu (boolean) a všechny ostatní typy. Pozor na to, že když chceme vrátit objekt, který se píše do složených závorek `{` a `}`, musíme jej celý vložit ještě do kulatých závorek `(` a `)`:

```js
const createPerson = (name, age, gender) => ({
  name: name,
  age: age,
  gender: gender,
});

// Výše uvedený zápis je zkrácená verze následujícího kódu:
const createPersonLong = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};
```

Kdybychom použili jen složené závorky `{` a `}`, JavaScript si bude myslet, že chceme napsat blok kódu. Proto objekt uzavřeme do kulatých závorek – jsou to ty samé závorky, které používáme pro určení přednosti při vyhodnocování [výrazů](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators),třeba `5 + (3 * 4)`. Tady je nepoužíváme pro určení přednosti (uvnitř bude jenom jeden výraz – námi vytvářený objekt), ale JavaScript díky nim bude vědět, že uvnitř nemůže být blok kódu – a pak už složené závorky nemůžou znamenat nic jiného, než vytvoření objektu.

Je dobré si dát pozor, aby náš kód zůstal čitelný. Pokud je funkce jasná a jednoduchá, zkrácení se vyplatí. Pokud pracujeme s obřími objekty, může se vyplatit napsat funkci běžným způsobem.
