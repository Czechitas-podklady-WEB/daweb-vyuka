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

### Local Storage

V kódu ovedeném výše máme autentizační token vložený přímo v kódu. Pokud takový kód commitneme do veřejného GitHub repozitáře, prozradíme svůj tajný token celému internetu. To rozhodně nechceme. Místo toho si token uložíme do takzvané _local storage_. To je speciální úložiště rezervované prohlížečem pro naši stránku, které uchovává informace i když refreshneme stránku. Sem si můžeme uložit v podstatě co se nám zlíbí. Nejčastějí do local storage vkládáme tokeny a jiné věci, které mají přežít refresh stránky.

Local storage pro naši stránku si zobrazíme v _dev tools_ v záložce _Application_. Zde v sekci _Storage_ rozklíkneme položku _Local Storage_. Otevře se nám tabulka, do které vložíme náš token pod klíč `token`.

::fig[Local Storage]{src=assets/local-storage.png}

V JavaScriptu si pak token můžeme vyzvednout pomocí příkazu

```js
localStorage.getItem('token');
```

Hlavičky naších dotazů na API pak budou vypadat následovně:

```js
headers: {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token')}`,
},
```

Takový kód můžeme pak bez starostí pushnout na GitHub aniž bychom se museli bát o své tokeny.
