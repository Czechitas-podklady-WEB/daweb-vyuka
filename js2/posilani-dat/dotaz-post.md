## Dotaz POST

Pokud ve své aplikaci používáme data z nějakého veřejného API, většinou je stahujeme pouze ke čtení. Málokterý veřejný server by nám jen tak dovolil na něm data upravovat. Pokud však píšeme aplikaci, ve které používáme vlastní backend, většinou si vytvoříme vlastní databázi a vlastní API, do kterého pak můžeme i zapisovat. V této lekci si proto ukážeme, jak můžeme pomocí dotazů na API měnit data na serveru.

V minulé lekci jsme posílali dotazy na API tímto způsobem.

```js
fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5');
```

Takto se posílá základní typ dotazu, kterému říkáme GET. Tento dotaz má za úkol získat pro čtení nějaká data ze serveru. Typů dotazů však existuje více. Říkáme jim _HTTP metody_ a patří mezi ně například POST, PATCH, DELETE a další. Tyto většinou slouží k zápisu či změně dat na serveru. Začneme dotazem POST, kterým slouží ke vkládání nových data.

### Data jako řetězec

Na začátek je důležité si uvědomit, že formát JSON, který používáme k reprezentaci dat, je textový formát. Ze serveru nám tedy data vždy chodí jako text a my je také jako text musíme posílat. V JavaScriptové mluvě tedy musíme na server vždy odeslat textový řetězec. Pokud bychom chtěli na server poslat například takovýto objekt:

```js
{
  name: 'Petr',
  age: 25,
}
```

musíme na příslušný API endpoint odeslat takovýto řetězec:

```json
{ "name": "Petr", "age": 25 }
```

K převodu objektů na řetezec nám pomůže funkce `JSON.stringify`.

```jscon
> JSON.stringify({ name: 'Petr', age: 25 })
"{"name":"Petr","age":25}"
```

Nyní už máme všechny ingredience a můžeme sestavit nějaký POST dotaz.

### Odeslání POST dotazu

Dotazy POST se posílají opět pomocí funkce `fetch`. Musíme však specifikovat několik věcí navíc:

- typ dotazu, v našem případě `POST`,
- takzvaný _Content-Type_, tedy v jakém formátu data na server posíláme. My posíláme JSON, takže _Content-Type_ bude `application/json`,
- tělo dotazu, tedy samotná JSON data zapsaná jako řetězec.

Představme si zatím fiktivní stránku `https://it-seznamka.cz`, která by mohla mít API endpoint `/me/profile`, kde bychom pomocí POST mohli poslat nějaké základní informace do svého profilu.

```js
fetch('https://it-seznamka.cz/me/profile', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Petr Laskavý',
    text: 'Hledám někoho, kdo rozumí mé lásce k programování a pomůže mi s debugováním mého křehkého srdce',
    age: 25,
  }),
});
```

Toto je zatím jakási šablona, které se budeme do budoucna vždy držet při vytváření požadavků, které nějak mění data na serveru. Praktický příklad s reálným serverem si vyzkoušíme v následující sekci.
