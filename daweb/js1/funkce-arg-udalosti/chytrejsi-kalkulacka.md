## Chytřejší kalkulačka

Abychom funkce jako argumenty viděli z více úhlů pohledu, ukážeme si ještě jeden příklad, který navazuje cvičení Kalkulačka z minulé lekce. Zadání bylo vytvořit funkci `calc`, která spočítá výsledek operace zadané jako řetězec. Přímočaré řešení by mohlo vypadat například takto.

```js
const calc = (num1, op, num2) => {
  if (op === '+') {
    return num1 + num2;
  }
  if (op === '-') {
    return num1 - num2;
  }
  if (op === '*') {
    return num1 * num2;
  }
  if (op === '/') {
    return num1 / num2;
  }

  return null;
};
```

Možná si říkáte, jestli by tato funkce nešla napsat nějak šikovněji a úsporněji. Například zkusit předat funkci operaci tak nějak přímo a naše funkce by ji jen vykonala. Něco ve stylu

```jscon
> calc(2, +, 3)
5
```

Pokud přemýšlíte tímto směrem, jste na správné stopě. Jen na to musíme jít trošku od lesa. Nejprve si vyrobíme funkce, které provádějí jednotlivé operace.

```js
const plus = (num1, num2) => {
  return num1 + num2;
};

const minus = (num1, num2) => {
  return num1 - num2;
};

const times = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};
```

Jelikož každá takováto funkce je hodnota, můžeme ji předat jako vstup do funkce `calc`. Ta pak obdrženou funkci pouze zavolá.

```js
const calc = (num1, op, num2) => {
  return op(num1, num2);
};
```

Funkci `calc` pak použijeme velmi přímočaře.

```jscon
> calc(2, plus, 3)
5
> calc(4, times, 5)
20
```

Ze začátku se vám možná z takovýchto triků malinko točí hlava. Pojďme si proto zopakovat následující fakta, abychom získali zpět ztracenou rovnováhu.

1. V parametru `op` nyní není řetězec, jako tomu bylo dříve, nýbrž celá funkce.
1. Funkce `calc` funkci `op` zavolá, aniž by věděla, co je tato funkce vlastně zač. Prostě vezme cokoliv, co jí dáme na vstup, a zavolá to.
1. Když voláme funkci `calc` a na vstupu je například funkce `plus`, všimněte si, že funkci `plus` nevoláme. Za proměnnou `plus` nejsou kulaté závorky. Funkci pouze předáváme jako hodnotu, podobně, jako bychom předávali číslo, řetězec apod.

Funkcím, které berou jiné funkce jako svůj vstup nebo vracejí funkce jako svůj výstup, se v teorii programování říká :term{cs="funkce vyšších řádů" en="higher order functions"}. Je to velmi důležitý koncept, který má spoustu využítí a budeme jej používat v mnoha různých situacích.
