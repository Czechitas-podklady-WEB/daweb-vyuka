---
title: Piškvorky dokončení
demand: 3
---

Nyní už si můžeme troufnout dokončit naši hru s piškvorkami. Zbývá nám naučit náš program ropoznat situaci, kdy některý z hráčů vytvořil na hracím plánu vyhrávací vzor. K tomu nám velmi pomůže kartézský součin polí z předchozího příkladu. Představte si například takovýto hrací plán.

<!-- prettier-ignore -->
```js
const gamePlan = [
   1, -1,  1,  1,
   0,  1,  0, -1,
  -1, -1,  0,  0,
  -1,  0,  0,  0,
];
```

Vezměme nyní pole, které vypadá takto.

<!-- prettier-ignore -->
```js
const pattern = [
   1,  1,  1,  1,
   0,  0,  0,  0,
   0,  0,  0,  0,
   0,  0,  0,  0,
];
```

Rozmysleme si, jak by dopadl kartézský součin polí `gamePlan` a `pattern`. Ihned vidíme, že nás zajímají pouze první čtyri prvky. Násobení nulou je vždy nula, zbylé prvky pole tedy výsledek nijak neovlivní.

Všimněte si, že pokud jsou první čtyři prvky v poli `gamePlan` jedničky, kartézský součin bude přesně 4. Pokud by byly první čtyři prvky -1, výsledek bude -4. Ve všech ostatních případech bude výsledek něco mezi -4 a 4. Takto jsme tedy rovnou získali test na to, jestli někdo z hráčů má čtveřici na prvním řádku. Pokud kartézský součin vyjde 4, vyhrál hráč s křížkem. Pokud vyjde -4, vyhrál hráč s kolečkem. Pokud vyjde něco jiného, žádný z hráčů nemá v prvním řádku čtveřici.

Pomocí pole `pattern` jsem tak vyzkoušeli první řádek. Zbývá nám vyzkoušet všechnyh ostatní možnosti, tedy ostatní řádky, sloupce, diagonály a tak dále. Pro každou z těchto možností potřebujeme jedno pole, které, podobně jako pole `pattern` výše, udává, na jaká políčka na hracím plánu zrovna kontrolujeme.

K dokončení hry postupujte podle následujicích instrukcí.

1. Sestavte pole `patterns`, které obsahuje všechny pole udávající výherní kombinace ve hře. Nerad bych váš připravil a zábavu při hledání všech možností. Pro kontrolu však vězte, že je jich dohromady 23.
1. Vytvořte funkci `score`, která jako svůj vstup dostane hrací plán a vrátí v jakém stavu se zrovna hra nachází. Výsledek 1 znamená, že vyhrál křížek, výsledek -1, že vyhrálo kolečko, výsledek 0, že nastala remíza a výsledek `null`, že hra se ještě hraje. Pokud si nejste jistí, jak funkci napsat, postupujte následujícím postupem.
   1. Funkce nejprve zkontroluje, zda již někdo vyhrál. Musí tedy v cyklu projít všechny výherní vzory a zkontrolovat, jestli skalární součin herního plánu s nekterým vzorem vyjde 4 nebo -4. V takovém případě vrátím z funkce rovnou 1 nebo -1.
   1. Pokud skalární součin ani jednou nevyšel 4 nebo -4, znamaná to, že hra je ještě v běhu nebo že nastala remíza. Remíza nastala tehdy, když na hracím plánu již není žádné volné políčko. V takovém případě vraťte číslo 0.
   1. Pokud neplatí ani jedna z předešlých možností, hra je stále v běhu. Vraťte hodnotu `null`.
1. Po provedení každého tahu si nechte pomocí funkce `score` zjistit stav hry. Podle výsledku buď nechte hru normálně pokračovat nebo zobrazte uživateli zprávu že vyhrál, prohrál nebo nastala remíza.

Hurá!! Napsali jste svoji možná úplně první počítačovou hru.
