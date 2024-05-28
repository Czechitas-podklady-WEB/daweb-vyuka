## Úvod do Typescriptu

Co je to Typescript? Proč ho používat a proč ho milují davy FE vývojářů?
Mohli bychom říci, že je prostě boží. Ovšem my jsme zvídaví vývojáři, zajímá nás jak věci fungují a potřebujeme daleko lepší zdůvodnění než, že je něco boží.

### Co je to Typescript a proč ho používat?

Typescript je nadstavba nad Javascriptem, která přidává statický typový systém a další pokročilou funkcionalitu pro zvýšení bezpečnosti a efektivnosti při vývoji softwaru.

To například znamená, že nám nedovolí do proměnné typu string uložit hodnotu typu number.

```js
> let city: string = 'Praha';
> city = 125;
ERROR: Type 'number' is not assignable to type 'string'.
```

Proč se Typescript používá:

1. Statická typová kontrola:
   Typescript umožňuje vyhledávání chyb v průběhu vývoje.

2. Zlepšená čitelnost a dokumentace kódu:
   Jasně definované typy poskytují vývojářům detailnější dokumentaci kódu a zjednodušují jeho čtení.

3. Inteligentní doplňování kódu:
   TypeScript poskytuje vývojářům nápovědu a automatickou dokončovací funkcionalitu.

4. Lepší refaktorování:
   Bezpečnější refaktorování díky statickým typům.

5. Kompatibilita s existujícím JavaScriptem.

6. Frameworky a knihovny:
   TypeScript je dobře integrován s moderními frameworky jako React, Angular a Vue.

## Základní datové typy

**number:**
reprezentuje čísla, včetně celých čísel a desetinných čísel.

```js
let count: number = 42;
```

**string:**
reprezentuje textové řetězce.

```js
let message: string = "Hello, TypeScript!";
```

**boolean:**
reprezentuje logické hodnoty true nebo false.

```js
let isLogged: boolean = true;
```

**null a undefined:**
null a undefined jsou hodnoty, které reprezentují neexistující nebo neznámé hodnoty.

```js
let data: null = null;
let value: undefined = undefined;
```

**object:**
reprezentuje jakýkoliv objekt.

```js
let user: object = {
  name: "John",
  age: 30,
};
```

**Array:**
reprezentuje pole hodnot určitého typu.

```js
let numbers: number[] = [1, 2, 3, 4];
let fruits: Array<string> = ["apple", "banana", "orange"];
```

**any:**
typ any umožňuje proměnným nabývat hodnot jakéhokoliv typu. Používejte s opatrností, protože ztrácíte typovou kontrolu.

```js
let dynamicValue: any = "This can be anything.";
```

**void:**
reprezentuje absenci hodnoty. Používá se obvykle pro funkce, které nic nevracejí.

```js
const logMessage = (): void => {
  console.log("This is a log message.");
};
```

**Promise<T>:**
reprezentuje hodnotu, která bude k dispozici v budoucnosti, obvykle po dokončení asynchronní operace. Nejčastěji se používá při načítání dat z API. `<T>` představuje typ dat nebo datovou strukturu, kterou funkce vrací.
```js
const myAsynFunction = async (url: string): Promise<T> => {
  const { data } = await fetch(url);
  return data;
};
```

### Interface

Interface, případně se můžete setkat s českým označením rozhraní, slouží k definování struktury dat objektů, kdy se prostřednictvím interface určí jména a datové typy jejich vlastností. Používá se při definici props v komponentách a nebo při definování návratových hodnot funkcí.

```js
interface Person {
  name: string;
  age: number;
};
```
