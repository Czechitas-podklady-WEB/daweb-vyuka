Pokud ve své aplikaci používáme data z nějakého veřejného API, většinou je stahujeme pouze ke čtení. Málokterý veřejný server by nám jen tak dovolil na něm data upravovat. Pokud však píšeme aplikaci, ve které pužíváme vlastní data, většinou si vytvoříme vlastní databázi a vlastní API, do kterého pak můžeme i zapisovat. V této lekci si ukážeme, jak můžeme pomocí dotazů na API data měnit.

## Typy dotazů na server

V minulé lekci jsme posílali dotazy na API tímto způsobem.

```js
fetch('https://api.abalin.net/today?country=cz');
```

Tímto způsobem se posílá základní typ dotazu, kterému říkáme GET. Tento dotaz má za úkol získat nějaká data ze serveru. Typů dotazů však existuje více.

POST
: Poslat data na server

PUT
: Přidat prvek do nějaké kolekce

DELETE
: Odstranit prvek z nějaké kolekce

Pokud chceme pomocí funkce `fetch` poslat jiný dotaz než GET, musíme specifikovat několik věcí:

- typ dotazu, například `POST`,
- takzvaný `Content-Type`, tedy v jakém formátu data na server posíláme. Nejčastěji to bude JSON.
- tělo dotazu, tedy samotná data ve formátu JSON.

Tělo dotazu se na server posíká jako řetězec obsahující JSON. Pokud tedy chceme na server odeslat JavaScriptový objektu, musíme si jej převést na řetězec. K tomu použijeme funkci `JSON.stringify`. Vyzkoušíme si ji v konzoli.

```jscon
> JSON.stringify({name: 'Petr', age: 25})
"{"name":"Petr","age":25}"
```

Takto si můžeme z jakéhokoliv objektu připravit řetězec, který pak můžeme poslat na server.

Představme si zatím fiktivní stránku `https://it-seznamka.cz`, která by mohla mít API endpoint `register`, kde bychom pomocí POST mohlit zaregistrovali nového uživatele. Výslední kód by vypadal takto.

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
