Čím jsou naše programy větší a užitečnější v reálném životě, tím větší je objem a složitost informací, se kterými potřebují pracovat. Informacím, se kterými program pracuje říkáme data. Jednoduchá data v naších programech reprezentujeme pomocí základních hodnot jako čísla, řetězce, pravdivostní hodnoty apod. Brzy narazíme na komplexnější data, která mají nějakou složitější vnitřní strukturu. Pro uložení takových dat pak používáme pole a objekty. 

## Objekty jako data

Při práci s většími daty se často potkáváme s polem objektů. Představme si například tabulku výdajů, která má 13 řádků a tři sloupečky. 

```js
const expenses = [
  { name: 'Petr', product: 'Prací prášek', price: 240 },
  { name: 'Ondra', product: 'Savo', price: 80 },
  { name: 'Pavla', product: 'Toaleťák', price: 65 },
  { name: 'Zuzka', product: 'Mýdlo', price: 50 },
  { name: 'Pavla', product: 'Závěs do koupelny', price: 350 },
  { name: 'Libor', product: 'Pivka na kolaudačku', price: 124 },
  { name: 'Petr', product: 'Pytle na odpadky', price: 75 },
  { name: 'Míša', product: 'Utěrky na nádobí', price: 130 },
  { name: 'Ondra', product: 'Toaleťák', price: 120 },
  { name: 'Míša', product: 'Pečící papír', price: 30 },
  { name: 'Zuzka', product: 'Savo', price: 80 },
  { name: 'Petr', product: 'Tapeta na záchod', price: 315 },
  { name: 'Ondra', product: 'Toaleťák', price: 6 },
];
```

Takováto data bychom pak pomocí komponent zobrazili na naší stránce podobně, jako jste se to naučili v předchozí lekci. 

V praxi samozřejmě budeme mít data, jejichž struktura je hlubší. Budeme tedy často mít struktury jako objekty, které obsahují pole objektů a podobně. Takto bychom mohli reprezentovat například kurz Czechitas jménem :i[Úvod do programování].

```js
const course = {
  nazev: 'Úvod do programování',
  lektor: 'Martin Podloucký',
  konani: [
    {
      misto: 'T-Mobile',
      koucove: ['Dan Vrátil', 'Filip Kopecký', 'Martina Nemčoková'],
      ucastnic: 30,
    },
    {
      misto: 'MSD IT',
      koucove: ['Dan Vrátil', 'Zuzana Tučková', 'Martina Nemčoková'],
      ucastnic: 25,
    },
    {
      misto: 'Škoda DigiLab',
      koucove: ['Dan Vrátil', 'Filip Kopecký', 'Kateřina Kalášková'],
      ucastnic: 41,
    },
  ],
};
```

Všimněte si, jak objekt představující jeden kurz obsahuje pod klíčem `konani` pole dalších objektů. Každý z těchto objektů reprezentuje jedno konání kurzu a dále obsahuje například pole koučů, místo atp.
