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
