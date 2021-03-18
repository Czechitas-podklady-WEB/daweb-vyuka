Jak už jsme viděli do této chvíle, jazyk JavaScript nabízí spoustu funkcí a metod, které jsou připravené pro všemožné účely. Máme funkce na práci s řetězci, na práci s DOMem, na matematické výpočty, na vstup a výstup a tak dále. Webové stránky jsou však neskutečně bohatý svět plný tolika možností a problémů, že jazyk JavaScript nikdy nemůže obsáhnout všechny funkce, které budeme při vývoji potřebovat. Zde ke slovu přichází takzvané <term cs="knihovny" en="libraries">. 

## Knihovny

Knihovna je v podstatě jakýsi balíček funkcí, které se týkají nějaké konkrétní oblasti. Máme knihovny na

- práci s datumem a časem,
- stahování dat ze serveru,
- ověřování vstupu od uživatele,
- práci s mapami,
- zpracování dat,
- spouštění animací,
- psaní her
- a stovky dalších možností. 

Různých knihoven se na internetu nachází tísíce a tísíce. Pokud během vývoje narazíte na nějaký problém, který potřebujete ve svém program vyřešit, je obrovská šance, že tentýž problém už někdo řešil před vámi a vyrobil na jeho řešení knihovnu. Často tedy stačí šikovně pogooglovat, najít tu správnou knihovnu a máte vystaráno. 

### Kontrola vstupu

Jeden z velmi častých problémů, které při vývoji potkáme, je kontrola vstupu od uživatele. Téměř každá větší stránka umožňuje přihlašování, a tak často musíme vytvořit nějaký formulář, kam uživatel zadává svůj e-mail. Jak ale poznáme, že uživatel do políčka pro e-mail zadal opravdu e-mail a ne nějaký nesmysl? 

Zkontrolovat správný formát e-mailu v žádném případě není jednoduchá úloha. Rozhodně nastačí zkontrolovat, že obsahuje zavináč. Na [wikipedii](https://en.wikipedia.org/wiki/Email_address#Examples) si můžete pro zajímavost přečíst, co všechno se považuje za validní e-mail a co naopak ne. 

Zároveň ověřování e-mailu je tak častý programátorský úkon, že na to jistě musí existovat knihovna. My použíjeme knihovnu, která se jmenuje [validator.js](https://github.com/validatorjs/validator.js).

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/validator/13.5.2/validator.min.js"></script>
  <title>Moje stránka</title>
</head>
```

Knihovnu do naší stránky přidáme tak, že její adresu vložíme do hlavičky stránky pomocí tagu `script`. Každá knihovna má svoje pravidla fungování, která vyčteme z dokumentace. Knihovna `validator.js` nám ve stránce vytvoří objekt `validator`, který má mnoho užitečných metod, mezi nimi i metodu `isEmail`, která umí ověřit, zda je zadaný řetězec platný e-mail. Tuto metodu můžeme použít ve svém JavaScriptovém programu nebo si ji vyzkoušet rovnou v konzoli, když naši stránku otevřeme v prohlížeči. 

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

Mezi další užitečné funkce mohou patřit například

- `isCreditCard` pro ověření čísla platební karty,
- `isPassportNumber` pro oveření čísla pasu pro danou zemi,
- `isPostalCode` pro ověření PSČ dle dané země.

Pro kompletní výčet všch funkcí nahlédněte do [dokumentace knihovny](https://github.com/validatorjs/validator.js/#validators).


### Práce s datem a časem

Práce datem a časem je velmi častým úkolem v mnoha různých aplikacích. Zároveň je to jeden z nejtěžších programovacích problémů, protože datum a čas se řídí neuvěřitelně složitými pravidly, která mimo mnohé další zahrnují

- fakt, že každý měsíc má jiný počet dní,
- přestupné roky,
- časové zóny,
- letním a zimním časem v různých zemích,
- různé kalendáři v různých zemích,
- různé formáty zápisu data a času v různých zemích,
- a tak dále. 

Z toho všecho je jasné, že na práci s datem a časem budeme potřebovat nějakou knihovnu. Těch na internetu existuje vícero. My si vyzkoušíme knihovnu s názvem `dayjs`. Do naší stránky ji vložíme následujícím skriptem. 

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.4/dayjs.min.js" ></script>
```

Knihovna `dayjs` toho umí opravdu hodně, například

- formátovat a parsovat datum i čas v různých formátech,
- manipulace jako přidat den, ubrat dva týdny apod.,
- porovnávat, který datum je dřív nebo později.

My si zde vyzkoušíme pouze pár dákladních věci. Aktuální datum a čas získáme zavoláním funkce `dayjs`.

```js
const now = dayjs();
```

Todo datum pak můžeme vypsat do konzole v námi zvoleném formátu.

```js
console.log(now.format('MM/DD/YYY'));
```

Můžeme také zcela konkrétní datum vyrobit, například 

```js
const stedryDen = dayjs('2021-12-24')
```

Pomocí metody `isAfter` pak můžeme vyzkoušet, jestli už jsme propásli Štědrý den 2021 nebo nás teprve čeká. 

```js
const stedryDen = dayjs('2021-12-24')
const dnes = dayjs();

if (dnes.isAfter(stedryDen)) {
  console.log('Musíš počkat na příští rok');
} else {
  console.log('Už brzy přijde Ježíšek!');
}  
```

Pro ty, kdo se chtějí o knihovně `dayjs` dozvědět více, přikládáme opět [odkaz na dokumentaci](https://day.js.org/docs/en/installation/installation).


[[[ excs Cvičení: Knihovny
- kreditni-karta
- nouzovy-stav
]]]

## Vlastní funkce

Funkce jsou jednou z nejdůležitějších součástí programování. Všimněte si, jak často vaše programy sestávají z volání různých funkcí. Ve všech programovacích jazycích je již od začátku mnoho funkcí rovnou k dispozici. Často ale potřebujeme funkci, která dělá něco specifického, důležitého pouze pro náš program. V takovém případě nám nezbývá, než si takovou funkci naprogramovat samí.

Představme si například, že vyměřujeme pozemek a chceme spočítat plochu pozemku, který má tvar pravoúhlého trojúhelníka o šířce `width` a výšce `height` jako na obrázku.

![Pozemek](assets/fields.svg)

Naše funkce tedy bude mít dva vstupy - šířku a výšku. Ze školy si pamatujeme, že plochu prvoúhlého trojúhelníka spočítáme tak, že vynásobíme šířku výškou a výsledek vydělíme dvěma. Už tedy víme, co má funkce dělat a zbývá nám tento postup zapsat v JavaScritpu.

```js
(width, height) => {
  return (width * height) / 2;
};
```

Zápis funkce se dělí na definici <term cs="vstupů" en="inputs"> (před šipkou) a <term cs="tělo" en="body"> (za šipkou). Jako vstupy v kulatých závorkách vidíme dvě slova `width` a `height`. To jsou speciální proměnné, kterým říkáme <term cs="parametry" en="parameters">.

Ve složených závorkách pak máme takzvané tělo funkce. To obsahuje kód, který se má vykonat, když funkci zavoláme. Úkolem naší funkce je vrátit nějaký výsledek. Speciální slovíčko `return` proto říká, co má být výsledkem naší funkce.

Zbývá ukázat, jak naší funkci zavoláme. Zde přichází jedno z nejdůležitějších uvědomění, které v JavaScriptu kdy zažijete.

**Funkce je hodnota, podobně jako číslo nebo řetězec!**

Funkci můžeme uložit do proměnné stejně jako každou jinou hodnotu. Uložením do proměnné tak funkci dáme jméno. Všimněte si, že jde o stejný postup jako s jakoukoliv jinou hodnotou.

```js
const age = 25;
const user = 'robert';
const married = false;
const element = document.querySelector('.card');
const landArea = (width, height) => {
  return (width * height) / 2;
};
```

Jakmile máme funkci takto hezky uloženou v proměnné, můžeme jí zavolat známým způsobem.

```js
landArea(5, 3);
```

Jakmile funkci takto zavoláme, například s hodnotami 5 a 3, JavaScript tyto hodnoty uloží do parametrů `width` a `height` a v těle funkce pak parametry použjeme jako normální proměnné pro náš výpočet.

## Složitější funkce

Ne každá funkce je tak přímočará, jako výpočet obsahu. Často se stane, že potřebujeme ve funkci provést nějaké rozhodování, výpočet sestávají z více kroků apod. Mějme například funkci, která rozhodne, zda máme dostatečně bezpečné heslo. Heslo budeme považovat za bezpečné, pokud je delší než 12 znkaů. V takovéto funkci tedy potřebujeme použít podmínky. Tělo funkce proto bude obsahovat více příkazů, které se nám už nevejdou na jeden řádek. V takovém případě bude tělo funkce blok kódu podobně jako to už známe u podmínek.

```js
const isSafe = (password) => {
  if (password.length >= 12) {
    return true;
  } else {
    return false;
  }
};
```

Všimněte si, že v této funkci máme vícero slovíček `return`, protože funkce v různých situacích vrací různé výsledky. Ve chvíli, kdy JavaScript runtime při vykonává funkce narazí na `return`, vykonávání funkce se ukončí a program se vrací na místo, odkud byla funkce volána. Vrácená hodnota pak bude na tomto místě výsledkem naší funkce. Ten si pak můžeme uložit třeba do proměné.

```js
const result = isSafe('popokatepetl');
```

Vzhledem k tomu, že příkazem `return` se průběh funkce ukončuje, můžeme funkci `isSafe` napsat také takto.

```js
const isSafe = (password) => {
  if (password.length >= 12) {
    return true;
  }
  return false;
};
```

Proč není `else` potřeba? Zde je nuté oprášit logické uvažování. Pokud byla délka hesla dotatečná, funkce skončila u prvního `return` a k druhému se vůbec nedostala. Pokud se tedy vykonávání funkce dostalo až k druhému `return`, znamená to, heslo kontrolou neprošlo. Jinak by totiž funkce skončila mnohem dřív a sem bychom se vůbec nedostali. Nemusíme už tedy říkat žádné `else` a prostě vrátíme `false`.

Této strategii se říká <term cs="časný návrat" en="early return"> a zkušení programátoři jej používají velmi často. Je proto dobré si na tento způsob zápistu zvyknout už od samého začátku.


[[[ excs Cvičení: Vlastní funkce
- obsah-elipsy
- maximum-ze-dvou
- rodne-cislo
- ramecek
]]]

## Dobrovolné čtení na doma - alternativní zápis funkcí

V různých výukových materiálech se můžete setkat s alternativním zápisem funkce. Ten by pro naši obarvovací funkci vypadal takto.

```js
function colorHeading(colorName) {
  const headingElm = document.querySelector('h1');
  headingElm.style.color = colorName;
}
```

Mezi těmito dvěma zápisy jsou co do významu drobné rozdíly. V tuto chvíli však ještě nemáme dostatečný aparát k tomu, abychom dobře vysvětlili, v čem přesně rozdíly mezi takto zapsanými funkcemi spočívají. Navíc v žádném tématu probíraném v rámci celé akademie se rozdíly mezi těmito zápisy neprojeví. Pro účely našeho kurzu tedy stačí si vybrat jeden zápis a toho se držet. My si vybereme ten první, kterému se odborně říká _arrow funkce_. Výhody tohoto zápisu spočívají v tom, že

1. názorně ukazuje, že funkce se ukládá do proměnné, a je to tedy hodnota jako každá jiná,
2. arrow funkce fungují uvnitř jednodušeji než funkce zapsané pomocí `function`,
3. zápis arrow funkcí je většinou kratší a méně ukecaný.

[[[ excs Doporučené úložky na doma
- parsovani-data
- formatovani-data
- python-round
]]]

[[[ excs Dobrovolné úložky na doma
- maximum-ze-tri
]]]
