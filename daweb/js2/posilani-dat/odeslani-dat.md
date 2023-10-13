## Odeslání dat na server

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

```js
const data = {
  /*…*/
};
const handleSubmit = async (event) => {
  const resp = await fetch('…', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  const result = await resp.json();
};

document.querySelector('.submit').addEventListener('click', handleSubmit);
```
