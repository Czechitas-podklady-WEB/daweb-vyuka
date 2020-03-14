Do této chvíle jsme si s runtimem JavaScriptu povídali pouze skrze konzoli. Vždy jsme posílali jeden příkaz a rovnou na něj dostali odpověď. Nyní je čas začít psát programy, tedy nechat náš prohlížeč spustit více příkazů najednou.

## První program

Naše JavaScriptové programy budou vždy součástí nějaké webové stránky. Založíme si proto složku s jedním HTML souborem, který prozatím bude obsahovat jen nadpis.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>První program</title>
</head>
<body>
  <h1>První program</h2>
</body>
</html>
```

Podobně jako jste zvyklí u CSS stylů, pro JavaScriptový kód budeme také vždy vytvářet separátní soubor. Nyní mu dáme název `index.js`. Jeho obsah bude vypadat takto.

```js
"use strict";

document.write("Moc nečum!");
```

Pokud chceme JavaScriptový program propojit se stránku, vložíme odkaz na konec značky `body`.

```html
<body>
  <h1>První program</h2>
  <script src="index.js"></script>
</body>
```

Pokud nyní soubor `index.html` otevřete v prohlížeči, měli byste pod nadpisem vidět text, který jsme předali funkci `document.write`. To je funkce, která dokáže na konec naší stránky vložit libovolný řetězec. Takto může náš jednoduchý program komunikovat s uživatelem.

Všimněte si, že náš program začíná direktivou `use strict`. Ta je pro nás velmi důležitá obzvlášť na úplném začátku kurzu, protože nás chrání před různými začátečníckými chybami. Zakazuje JavaScript runtimu například vytvářet nové proměnné bez použití `let`, `const` nebo `var`. Vždy, když přiřadíte hodnotu do neexistující proměnné obdržíte chybovou hlášku místo toho, aby runtime vytvořil novou proměnnou jako by se nechumelilo. Tuto direktivu budeme používat ve všech našich programech abychom si usnadnili lovení chyb.

### Středníky

Další důležitá věc je, že téměř každý příkaz v JavaScriptu končí středníkem. Tím JavaScript runtime pozná, kde končí jeden příkaz a začíná jiný. Inu, ve skutečnosti by to JavaScript většinou poznal i bez středníků a ve skutečnosti bychom je ani psát nemuseli. Zakopaný pes je však ve slovíčku <i>většinou</i>. Pokud středníky nepíšeme, v některých situacích se může stát, že runtime pochopí náš kód špatně. Abychom si nepřidělávali takto ze začátku starosti, budeme vkládat středníky všude.

## Vstup a výstup

Každý program musí být schopen nějakým způsobem komunikovat s uživatelem. Zatím jsme viděli, jak může náš program provést jednoduchý výstup pomocí funkce `document.write`. Později uvidíme mnohem zajímavější způsoby jak uživateli něco sdělit. Nyní ale potřebujeme od uživatele taky získat nějaký vstup. K tomu budeme pro tuto chvíli používat funkci `prompt`. Zkusme napsat program, který bude řešit naši ultramaratonskou úlohu z minulé lekce.

```js
"use strict";

const start = 15;
const delka = prompt("Zadej délku závodu:");
const konec = (start + delka) % 24;
document.write(konec);
```

Tento program vypadá velmi přímočaře. Zadáme-li mu však v dobré víře na vstup délku 10 dočkáme se odpovědi nesprávné odpovědi 22. Abychom odhalili, kde je zakopaný pes, musíme si povědět něco o konverzi hodnot.

## Konverze hodnot

Úplně na začátku je šikovné všimnout si rozdílu mezi hodnotami jako `12` a `'12'`. Jedna představuje číslo dvanáct, druhá představuje řetězec obsahující znaky 1 a 2. Proto můžeme čekat, že aritmetické operace s těmito hodnotami dopadnou jinak podle toho zda jde o číslo nebo o řetězec.

```jscon
> 12 + 5
17
> '12' + '5'
'125'
```

JavaScript se nám (občas k naší škodě) snaží udělat život jednodušší a tak za nás v určitých případech provádí automatickou konverzi.

```jscon
> '12' + 5
'125'
> 12 + '5'
'125'
> 1 + 2 + 3 + '4'
'64'
> '1' + 2 + 3 + 4
'1234'
```

Tato konverze funguje i pro jiné operátory, napříkad násobení

```jscon
> 12 * 5
60
> '12' * 5
60
> 12 * '5'
60
> '12' * '5'
60
```

nebo zbytek po dělení.

```jscon
> 12 % 5
2
> '12' % 5
2
> 12 % '5'
2
> '12' % '5'
2
```

Vybaveni touto zkušeností můžeme začít rozplétat, co se nám pokazilo na našem ultramaratonském programu. To nejdůležitější k zapamatování je, že funkce `prompt` **vždycky vrací vstup od uživatele jako řetězec**. I když uživatel do políčka nakrásně napíše číslo, funkce `prompt` pro nás žádnou konverzi automaticky nedělá. Pokud tedy uživatel zadal jako délku závodu číslo 10, do proměnné délka se nám uložila hodnota `'10'`. V konzoli si pak můžeme vyzkoušet, co se dělo pak.

```jscon
> const start = 15
> const delka = '10'
> start + delka
'1510'
> '1510' % 24
22
```

Abychom si s touto situací poradili, budeme potřebovat možnost provést konverzi hodnot sami, aniž by nám do toho JavaScript kecal.

### Explicitní konverze

Pokud chceme konvertovat číslo na řetězec, použijeme funkci `String`.

```jscon
> String(12)
'12'
> String(-2.48)
'-2.48'
```

Když potřebujeme obrácenou konverzi, tedy řetězec na číslo, použijeme funkci `Number`.

```jscon
> Number('12')
12
> Number('-2.48')
-2.48
> Number('-2,48')
NaN
```

Všimněte si, co se stane, když se pokusíme zkonvertovat nějaký řetězec, který na číslo převést nejde. V takovém případě obdržíme speciální hodnotu `NaN`, což je zkratka pro Not a Number - Není číslo.

Nyní už můžeme náš program přepracovat tak, aby fungoval správně.

```js
"use strict";

const start = 15;
const delka = Number(prompt("Zadej délku závodu:"));
const konec = (start + delka) % 24;
document.write(konec);
```

Z tohoto příklady plyne do budoucna velmi důležité poučení. Vždycky si dávejte dobrý pozor na to, s jakými typy hodno pracujete. Pokud například chcete s používat výstup funkce `prompt` jako číslo, vždycky jej explicitně převeďte na číslo. Dáte tak i čtenářům vašeho programu najevo, co je vaším záměrem a oni tak nebudou muset smysl vašeho programu rozplétat jako detektivní zápletku.

To, že JavaScript pro nás některé konverze dělá automaticky můžeme využít k tomu, abychom uživateli vypsali nějakou hezčí zprávu než jen holé číslo.

```js
document.write("Běžec dorazí v " + konec + "h");
```

## Metody a vlastnosti

Než se vhrnete do víru psaní vlastních programů, ukážeme si ještě jeden důležitý nástroj, který nám otevře mnoho zajímavých možností, a tím jsou _metody_ a _vlastnosti_. Metodu si můžeme představit jako speciální druh funkce, která se používá pouze ve spojení s konkrétním typem hodnoty. Představme si, že chcete například změnit všechna písmenka nějakého řetězce na velká. Na něco takového by mohla existovat funkce například s názvem `toUpperCase`.

```jscon
> toUpperCase('martin')
'MARTIN'
```

Takováto funkce v JavaScriptu ve skutečnosti neexistuje. Když se ale nad ní malinko zamyslíte, zjistíte, že by fungovala pouze na řetězcích. Těžko si představit, co by taková funkce měla dělat například s číslem -0.46. V takovém případě můžeme říct, že naše funkce je _metodou na řetězcích_ a zavoláme ji pomocí tečkové notace.

```jscon
> 'martin'.toUpperCase()
'MARTIN'
```

Tento kód už v JavaScriptu funguje a dělá přesně to, co bychom čekali. Kromě `toUpperCase` mají řetězce mnoho dalších užitečných metod. Například metoda `toLowerCase`, která naopak konvertuje všechna písmenka na malá. Máme ale i metody, které vyžadují další vstupy. Například metoda `substring`, která umí vyříznout část řetězce podle zadaných mezí.

```jscon
> 'martin'.substring(2, 4)
'rt'
> 'martin'.substring(0, 5)
'marti'
```

U metody `substring` poprvé narážíme na jednu programátorskou výstřednost, kterou budeme potkávat pořád znovu a znovu: **programátoři vždy počítají od nuly**, nikoliv od jedničky jako běžní lidé. V řetězci `'martin'` je tedy písmenko `'m'` na pozici nula, písmenko `'a'` na pozici 1 a tak dále. Metoda `substring` navíc bere dolní mez **včetně**, kdežto horní mez se bere **vyjma**.

Na řetězcích i na dalších nám zatím neznámých hodnotách najdeme mnoho a mnoho dalších metod, které budem postupně potkávat během celého kurzu.

Možná vám nyní vrtá hlavou, jestli funkce `Math.round` není také náhodou metoda, když používá tečkovou notaci. Je to skutečně tak. Nyní se ale budete chtít zeptat, co že teda je to `Math` za hodnotu a tady se dostáváme do úzkých, protože na zodpovězení této otázky ještě nemáme dost terminologie a znalostí. Takže `Math` pro nás na chvíli ještě zůstane tajemstvím.

### Vlastnosti

Už víme, že metody jsou něco jako funkce, které přísluší k nějakému typu hodnoty, například řetězci. _Vlastnosti_ jsou něco jako proměnné, které patří k určitému typu hodnoty. Používá se u nich stejná tečková notace jako u metod. Řetězce například mají vlastnost `length`, která udává délku řetězce.

```jscon
> 'martin'.length
6
> 'm'.length
1
> ''.length
0
```

Všimněte si, že za názvem vlastnosti nejsou kulatá závorky, protože vlastnosti nejsou metody, které bychom volali jako funkce. Vlastnost `length` je zatím jediná vlastnost, kterou poznáme. Později v kurzu jich však uvidíme více.

@exercises ## Cvičení - vstup, výstup, metody [

- vyplata-stranka
- email
  ]@

## Pravdivostní hodnoty

## Podmínky

Zatím všechny naše programy vypadaly jako sekvence příkazů vykonávané jeden za druhým. Pro komplikovanější problémy ale budeme potřebovat umožnit, aby se některé části programu vykonaly jen za určitých podmínek.

Pro jednoduchý příklad se opět vraťme k našemu ultramaratonskému běhu.

## Povinné čtení na doma - logické operátory
