Jak už jsme viděli do této chvíle, jazyk JavaScript nabízí spoustu funkcí a metod, které jsou připravené pro všemožné účely. Máme funkce na práci s řetězci, na práci s DOMem, na matematické výpočty, na vstup a výstup a tak dále. Webové stránky jsou však neskutečně bohatý svět plný tolika možností a problémů, že jazyk JavaScript nikdy nemůže obsáhnout všechny funkce, které budeme při vývoji potřebovat. Zde ke slovu přichází takzvané :term{cs="knihovny" en="libraries"}.

## Knihovny

Knihovna je v podstatě jakýsi balíček funkcí, které se týkají nějaké konkrétní oblasti. Máme knihovny na

- práci s časem a datem (chybně česky _datumem_),
- stahování dat ze serveru,
- ověřování vstupu od uživatele,
- práci s mapami,
- zpracování dat,
- spouštění animací,
- psaní her
- a stovky dalších možností.

Různých knihoven se na internetu nachází tisíce a tisíce. Pokud během vývoje narazíte na nějaký problém, který potřebujete ve svém program vyřešit, je obrovská šance, že tentýž problém už někdo řešil před vámi a vyrobil na jeho řešení knihovnu. Často tedy stačí šikovně _pogooglovat_, najít tu správnou knihovnu a máte vystaráno.

### Kontrola vstupu

Jeden z velmi častých problémů, které při vývoji potkáme, je kontrola vstupu od uživatele. Téměř každá větší stránka umožňuje přihlašování, a tak často musíme vytvořit nějaký formulář, kam uživatel zadává svůj e-mail. Jak ale poznáme, že uživatel do políčka pro e-mail zadal opravdu e-mail a ne nějaký nesmysl?

Zkontrolovat správný formát e-mailu v žádném případě není jednoduchá úloha. Rozhodně nestačí zkontrolovat, že obsahuje zavináč. Na [Wikipedii](https://en.wikipedia.org/wiki/Email_address#Examples) si můžete pro zajímavost přečíst, co všechno se považuje za validní e-mail a co naopak ne.

Zároveň ověřování e-mailu je tak častý programátorský úkon, že na to jistě musí existovat knihovna. My použíjeme knihovnu, která se jmenuje [validator.js](https://github.com/validatorjs/validator.js).

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Moje stránka</title>

  <script src="https://unpkg.com/validator@latest/validator.min.js"></script>
</head>
```

Knihovnu do našeho programu přidáme tak, že její adresu vložíme do hlavičky stránky pomocí tagu `script`. Každá knihovna má svoje pravidla fungování, která vyčteme z dokumentace. Knihovna `validator.js` nám ve stránce vytvoří objekt `validator`, který má mnoho užitečných metod. Mezi nimi je i metoda `isEmail`, která umí ověřit, zda je zadaný řetězec platný e-mail. (Metoda ověří, zda by vstup __mohl__ být e-mail – neumí zjistit, zda takový e-mail skutečně existuje.) Tuto metodu můžeme použít ve svém JavaScriptovém programu nebo si ji vyzkoušet rovnou v konzoli, když naši stránku otevřeme v prohlížeči.

```jscon
> validator.isEmail('pepa.novak@seznam.cz')
true
> validator.isEmail('žbrblymrmly@prdy.com')
true
> validator.isEmail('martin@home')
false
> validator.isEmail('C5dMFFegdK4RX&iL')
false
```

Knihovna `validator.js` má desítky ověřovacích funkcí pro mnoho různých situací. Mezi nimi například funkci pro ověřování mobilních čísel pro různé země.

```jscon
> validator.isMobilePhone('723 313 256', 'cs-CZ')
true
> validator.isMobilePhone('723 313 25', 'cs-CZ')
false
```

Mezi další užitečné funkce mohou patřit například:

- `isCreditCard` pro ověření čísla platební karty,
- `isPassportNumber` pro oveření čísla pasu pro danou zemi,
- `isPostalCode` pro ověření PSČ dle dané země.

Pro kompletní výčet všech funkcí nahlédněte do [dokumentace knihovny](https://github.com/validatorjs/validator.js/#validators).

### Práce s datem a časem

Práce datem a časem je velmi častým úkolem v mnoha různých aplikacích. Zároveň je to jeden z nejtěžších programovacích problémů, protože datum a čas se řídí neuvěřitelně složitými pravidly jako například:

- fakt, že každý měsíc má jiný počet dní,
- přestupné roky, přestupné sekundy,
- časové zóny,
- letní a zimní čas v různých zemích,
- různé kalendáře v různých zemích,
- různé formáty zápisu data a času v různých zemích,
- a spoustu dalších.

Z toho všeho je jasné, že na práci s datem a časem budeme potřebovat nějakou knihovnu. Takových na internetu existuje vícero. My si vyzkoušíme knihovnu s názvem [Day.js](https://day.js.org). Do naší stránky ji vložíme následujícím skriptem:

```html
<script src="https://unpkg.com/dayjs@latest/dayjs.min.js"></script>
```

Knihovna `Day.js` toho umí opravdu hodně, například:

- formátovat a parsovat (tj. převést z obyčejného textu na objekt, který obsahuje spoustu údajů) datum i čas v různých formátech,
- manipulace jako přidat den, ubrat dva týdny apod.,
- porovnávat, které datum je dřív nebo později.

My si zde vyzkoušíme pouze pár základních věci. Aktuální datum a čas získáme zavoláním funkce `dayjs`.

```js
const now = dayjs();
```

Toto datum pak můžeme vypsat do konzole v námi zvoleném formátu:

```js
console.log(now.format('MM.DD.YYYY'));
```

Můžeme také zcela konkrétní datum vyrobit, například:

```js
const stedryDen = dayjs('2023-12-24');
```

Pomocí metody `isAfter` pak můžeme vyzkoušet, jestli už jsme propásli Štědrý den 2023 nebo nás teprve čeká.

```js
const stedryDen = dayjs('2023-12-24');
const dnes = dayjs();

if (dnes.isAfter(stedryDen)) {
  console.log('Musíš počkat na příští rok');
} else {
  console.log('Už brzy přijde Ježíšek!');
}
```

Pro ty, kdo se chtějí o knihovně `Day.js` dozvědět více, přikládáme opět odkaz na [dokumentaci Day.js](https://day.js.org/docs/en/installation/installation).
