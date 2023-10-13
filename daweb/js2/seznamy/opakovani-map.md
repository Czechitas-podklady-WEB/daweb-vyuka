Naše cesta tvorbou webových aplikací pokračuje k další z velmi důležitých dovedností. Téměř každá webová aplikace zobrazuje nějaký seznam, ať už to je nákupní košík, seznam divadelních představení, jídelní lístek nebo třeba seznam nepřečtených e-mailů. V této lekci si ukážeme, jak v JSX zařídit zobrazení seznamu uloženého v nějakém JavaScriptovém poli.

## Opakování metody map

Když jsme ještě neměli k dispozici JSX, používali jsme na zobrazení seznamů metodu `forEach`, V JSX je však výhodnější místo `forEach` používat metodu `map`, kterou již znáte z kapitoly o funkcionálním zpracování dat. Jistě se nám vyplatí si tuto metodu připomenout a zopakovat.

Metoda `map` slouží k tomu, abychom z jednoho JavaScriptového pole vyrobili pole jiné pomocí nějaké transformační funkce. Takto například vyrobíme e-maily pro seznam uživatelů.

```js
const names = ['petr', 'jana', 'marek', 'eva', 'lenka', 'ondra'];
const emails = names.map((name) => {
  return `${name}@mejlik.cz`;
});
```

## Zkracování funkcí

Do metody `map` často posíláme funkce, které jsou relativně krátké. V takovém případě JavaScript nabízí možnost je ještě více zkrátit a trochu víc tak náš kód učesat. 

Pokud funkce nedělá nic jiného, než že vrací nějakou hodnotu, je možné vynechat složené závorky a klíčové slovo `return`. Obě níže napsané funkce budou fungovat a vrátí nám řetězec s pozdravem.

```js
const pozdrav = (name) => {
  return `Ahoj ${name}`;
};

const zkracenyPozdrav = (name) => `Ahoj ${name}`;
```

Nemusíme samozřejme vracet pouze řetězec. Často z funkcí vracíme číslo, pravdivostní hodnotu (boolean) a všechny ostatní typy hodnot. Pozor však na to, že když chceme vrátit z funkce objekt, který se píše do složených závorek `{` a `}`, musíme jej celý vložit ještě do kulatých závorek `(` a `)`:

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

Kdybychom použili jen složené závorky `{` a `}`, JavaScript si bude myslet, že chceme napsat blok kódu. Proto objekt musíme ještě obalit do kulatých závorek – jsou to ty samé závorky, které používáme pro určení přednosti při vyhodnocování [výrazů](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators), třeba `5 + (3 * 4)`. Tady je nepoužíváme pro určení přednosti (uvnitř bude jenom jeden výraz – námi vytvářený objekt), ale JavaScript díky nim bude vědět, že uvnitř nemůže být blok kódu – a pak už složené závorky nemůžou znamenat nic jiného, než vytvoření objektu.

Je dobré si dát pozor, aby náš kód zůstal čitelný. Pokud je funkce jasná a jednoduchá, zkrácení se vyplatí. Pokud pracujeme s obřími objekty nebo dlouhým kódem, spíše se vyplatí napsat funkci běžným způsobem.

## Zracování v `map`

Zkracování anonymních funkcí se velmi hodí právě při používání metody `map`. Tam totiž časo děláme právě to, že předávaná funkce rovnou vrací nějakou hodnotu. 

Náš dřívější příklad bez zkracování

```js
const names = ['petr', 'jana', 'marek', 'eva', 'lenka', 'ondra'];
const emails = names.map((name) => {
  return `${name}@mejlik.cz`;
});
```

pak můžeme přepsta takto:

```js
const emails = names.map((name) => `${name}@mejlik.cz`);
```
