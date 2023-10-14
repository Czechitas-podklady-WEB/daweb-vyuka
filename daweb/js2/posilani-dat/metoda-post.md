## Metoda POST – odesílání dat

Pokud ve své aplikaci používáme data z nějakého veřejného API, většinou je stahujeme pouze ke čtení. Málokterý veřejný server by nám jen tak dovolil na něm data upravovat. Pokud však píšeme aplikaci, ve které používáme vlastní backend, většinou si vytvoříme vlastní databázi a vlastní API, do kterého pak můžeme i zapisovat. V této lekci si proto ukážeme, jak můžeme pomocí dotazů na API měnit data na serveru.

V lekci o komunikaci se serverem jsme posílali dotazy na API tímto způsobem.

```js
fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5');
```

Takto se posílá základní typ dotazu, kterému říkáme GET. Tento dotaz má za úkol získat pro čtení nějaká data ze serveru. Typů dotazů však existuje více. Říkáme jim _HTTP metody_ a patří mezi ně například POST, PUT, DELETE a další. Tyto metody většinou slouží k zápisu či změně dat na serveru. Začneme dotazem POST, který slouží ke vkládání nových dat.

## Formát JSON

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

```js
const text = JSON.stringify({ name: 'Petr', age: 25 });
// v proměnné text bude uložen text:
// "{"name":"Petr","age":25}"
```

Nyní už máme všechny ingredience a můžeme sestavit nějaký POST dotaz.
