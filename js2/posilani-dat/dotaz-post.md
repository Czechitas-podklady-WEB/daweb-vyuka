## Dotaz POST

Pokud ve své aplikaci používáme data z nějakého veřejného API, většinou je stahujeme pouze ke čtení. Málokterý veřejný server by nám jen tak dovolil na něm data upravovat. Pokud však píšeme aplikaci, ve které pužíváme vlastní backend, většinou si vytvoříme vlastní databázi a vlastní API, do kterého pak můžeme i zapisovat. V této lekci si ukážeme, jak můžeme pomocí dotazů na API data měnit.

V minulé lekci jsme posílali dotazy na API tímto způsobem.

```js
fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5');
```

Takto se posílá základní typ dotazu, kterému říkáme GET. Tento dotaz má za úkol získat nějaká data ze serveru. Typů dotazů však existuje více, například POST, PUT, DELETE apod. Tyto většinou slouží ke změně dat na serveru. My se v tomto kurzu budeme zabývat pouze dotazem POST.

### Data jako řetězec

Na začátek je důležité si uvědomit, že formát JSON je textový formát. Ze serveru nám tedy data vždy chodí jako text a my je také jako text musíme posílat. V JavaScriptové mluvě tedy musíme na server vždy odeslat textový řetězec. Pokud bychom chtěli na server poslat například takovýto objekt

```js
{
  name: 'Petr',
  age: 25,
}
```

musíme na příslušný API endpoint odeslat takovýto řetězec.

```js
'{ "name": "Petr", "age": 25 }'
```

K převodu objektů na řetezce nám pomůže funkce `JSON.stringify`.

```jscon
> JSON.stringify({ name: 'Petr', age: 25 })
"{"name":"Petr","age":25}"
```

Nyní už máme všechny ingredience a můžeme sestavit nějaký POST dotaz.

### Odeslání POST dotazu

Dotazy POST se posílají opět pomocí funkce `fetch`. Musíme však specifikovat několik věcí navíc:

- typ dotazu, v našem případě `POST`,
- takzvaný *Content-Type*, tedy v jakém formátu data na server posíláme. My posíláme JSON, takže *Content-Type bude `application/json`,
- tělo dotazu, tedy samotná JSON data zapsaná jako řetězec.

Představme si zatím fiktivní stránku `https://it-seznamka.cz`, která by mohla mít API endpoint `register`, kde bychom pomocí POST mohli zaregistrovali nového uživatele. Výslední kód by vypadal takto:

```js
fetch('https://it-seznamka.cz/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Petr',
    age: 25,
  }),
});
```

Toto je zatím jakási šablona, které se budeme do budoucna vždy držet. Praktický příklad si vyzkoušíme hned v následující sekci.
