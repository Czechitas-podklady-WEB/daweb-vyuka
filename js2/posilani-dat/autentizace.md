## Základy autentizace

Pokud nám má nějaký server dovolit, abychom na něm upravovali data, rozhodně nám to nedovolí dělat anonymně. Prozovozání serveru nikdy není zadarmo a za používání aplikací a jejich API se většinou platí. Každý uživatel nějaké služby tak musí mít založený účet, který používá k dotazování na API. Pokud chce uživatel přistoupit ke svým datům, musí prokázat, že je to skutečně on. Tomuto procesu se říká odborně říká :term{cs="autentizace" en="authentication"}. My v této lekci probereme způsob autentizace pmocí takzvaných _tokenů_.

### Autentizační token

Autentizace pomocí tokenu funguje tak, že se nejprve k dané službě přihlásíme nejčastěji pomocí jména a hesla. Na oplátku od serveru obdržíme takzvaný _autentizační token_. To je často velká nesrozumitelná změť písmen a číslic, která může vypadat například takto:

```
k6nHCNQNSdSOEEwFYXery4lEhOq2qMsA4iFdC_CQoZ_FNH9ujuAl
```

Toto je jakési naše dočasné heslo, podle kterého server pozná, že jsme to my. Můžeme jej tak použít k autentizaci všech našich API dotazů. Ve většině případá to probíhá tak, že spolu s každým požadavkem na server pošleme hlavičku `Authorization` s naším tokenem za slovem `Bearer`. Náš doat POST na profil seznamky by pak vypadal takto:

```js
fetch('https://it-seznamka.cz/me/profile', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer k6nHCNQNSdSOEEwFYXery4lEhOq2qMsA4iFdC_CQoZ_FNH9ujuAl',
  },
  body: JSON.stringify({
    name: 'Petr Laskavý',
    text: 'Hledám někoho, kdo rozumí mé lásce k programování a pomůže mi s debugováním mého křehkého srdce',
    age: 25,
  }),
});
```

Toto je zatím jakási šablona, které se budeme do budoucna vždy držet při vytváření požadavků, které nějak mění data na serveru. Praktický příklad s reálným serverem si vyzkoušíme v následující sekci.
