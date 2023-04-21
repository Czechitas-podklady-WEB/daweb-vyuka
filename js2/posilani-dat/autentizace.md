## Základy autentizace

Při práci s aplikací _Hlasování_ jste se mohli podivit, že si kdokoliv jen tak může zahlasovat pod jakýmkoliv jménem. Toto byla spíš výjimečná situace. Pokud nám má nějaký server dovolit, abychom na něj posílali data, rozhodně nám to nedovolí dělat anonymně. Prozovozání serveru nikdy není zadarmo a za používání aplikací a jejich API se většinou platí. Každý uživatel nějaké služby tak musí mít založený účet, který používá pak používá k práci s API. Pokud chce uživatel přistoupit ke svým datům, musí prokázat, že je to skutečně on. Tomuto procesu se říká odborně říká :term{cs="autentizace" en="authentication"}. My v této lekci probereme způsob autentizace pomocí takzvaných _tokenů_.

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

### Autentizace proti kodim.cz

Abyste si nemuseli ve všemožných cvičných aplikacích neustále zakládat nové účty, jako jednotné autentizační místo použijeme přímo tento server, na kterém si právě čtete tyto materiály a účet už zde máte založený. Když jste přihlášeni na server kodim.cz, můžete si pod svým účtem vyzvednout token pro autentizaci do všech cvičných aplikací, které budeme používat. 

::fig[Token pro aplikace]{src=assets/token.png}
