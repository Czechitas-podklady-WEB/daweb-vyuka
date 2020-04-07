Do této chvíle jsme si s runtimem JavaScriptu povídali pouze skrze konzoli. Vždy jsme posílali jeden příkaz a rovnou na něj dostali odpověď. Nyní je čas začít psát programy, tedy nechat náš prohlížeč spustit více příkazů najednou.

## První program

Naše JavaScriptové programy budou vždy součástí nějaké webové stránky. Založíme si proto složku s jedním HTML souborem, který prozatím bude obsahovat jen nadpis.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>První program</title>
  </head>
  <body>
    <h1>První program</h1>
  </body>
</html>
```

Podobně jako jste zvyklí u CSS stylů, pro JavaScriptový kód budeme také vždy vytvářet oddělený soubor. Nyní mu dáme název `index.js`. Jeho obsah bude vypadat takto.

```js
'use strict';

document.write('Moc nečum!');
```

Pokud chceme JavaScriptový program propojit se stránku, vložíme odkaz na konec značky `body`.

```html
<body>
  <h1>První program</h1>
  <script src="index.js"></script>
</body>
```

Pokud nyní soubor `index.html` otevřete v prohlížeči, měli byste pod nadpisem vidět text, který jsme předali funkci `document.write`. To je funkce, která dokáže na konec naší stránky vložit libovolný řetězec. Takto může náš jednoduchý program komunikovat s uživatelem.

Všimněte si, že náš program začíná direktivou `use strict`. Ta je pro nás velmi důležitá obzvlášť na úplném začátku kurzu, protože nás chrání před různými začátečníckými chybami. Zakazuje JavaScript runtimu například vytvářet nové proměnné bez použití `let`, `const` nebo `var`. Vždy, když přiřadíte hodnotu do neexistující proměnné, obdržíte chybovou hlášku místo toho, aby runtime vytvořil novou proměnnou, jako by se nechumelilo. Tuto direktivu budeme používat ve všech našich programech, abychom si usnadnili lovení chyb.

### Středníky

Další důležitá věc je, že téměř každý příkaz v JavaScriptu končí středníkem. Tím JavaScript runtime pozná, kde končí jeden příkaz a začíná jiný. Inu, ve skutečnosti by to JavaScript většinou poznal i bez středníků a ve skutečnosti bychom je ani psát nemuseli. Zakopaný pes je však ve slovíčku <i>většinou</i>. Pokud středníky nepíšeme, v některých situacích se může stát, že runtime pochopí náš kód špatně. Abychom si nepřidělávali takto ze začátku starosti, budeme vkládat středníky všude.

## Vstup a výstup

Každý program musí být schopen nějakým způsobem komunikovat s uživatelem. Zatím jsme viděli, jak může náš program provést jednoduchý výstup pomocí funkce `document.write`. Později uvidíme mnohem zajímavější způsoby jak uživateli něco sdělit. Nyní ale potřebujeme od uživatele taky získat nějaký vstup. K tomu budeme pro tuto chvíli používat funkci `prompt`. Zkusme napsat program, který bude řešit naši ultramaratonskou úlohu z minulé lekce.

```js
'use strict';

const start = 15;
const delka = prompt('Zadej délku závodu:');
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
'use strict';

const start = 15;
const delka = Number(prompt('Zadej délku závodu:'));
const konec = (start + delka) % 24;
document.write(konec);
```

Z tohoto příklady plyne do budoucna velmi důležité poučení. Vždycky si dávejte dobrý pozor na to, s jakými typy hodno pracujete. Pokud například chcete s používat výstup funkce `prompt` jako číslo, vždycky jej explicitně převeďte na číslo. Dáte tak i čtenářům vašeho programu najevo, co je vaším záměrem a oni tak nebudou muset smysl vašeho programu rozplétat jako detektivní zápletku.

To, že JavaScript pro nás některé konverze dělá automaticky, můžeme využít k tomu, abychom uživateli vypsali nějakou hezčí zprávu, než jen holé číslo.

```js
document.write('Běžec dorazí v ' + konec + 'h');
```

## Metody a vlastnosti

Než se vhrnete do víru psaní vlastních programů, ukážeme si ještě jeden důležitý nástroj, který nám otevře mnoho zajímavých možností, a tím jsou <term cs="metody" en="methods"> a <term cs="vlastnosti" en="properties">. Metodu si můžeme představit jako speciální druh funkce, která se používá pouze ve spojení s konkrétním typem hodnoty. Představme si, že chcete například změnit všechna písmenka nějakého řetězce na velká. Na něco takového by mohla existovat funkce například s názvem `toUpperCase`.

```jscon
> toUpperCase('martin')
'MARTIN'
```

Takováto funkce v JavaScriptu ve skutečnosti neexistuje. Když se ale nad ní malinko zamyslíte, zjistíte, že by fungovala pouze na řetězcích. Těžko si představit, co by taková funkce měla dělat například s číslem -0.46. V takovém případě můžeme říct, že naše funkce je <term cs="metodou na řetězcích" en="string method"> a zavoláme ji pomocí tečkové notace.

```jscon
> 'martin'.toUpperCase()
'MARTIN'
```

Tento kód už v JavaScriptu funguje a dělá přesně to, co bychom čekali. Kromě `toUpperCase` mají řetězce mnoho dalších užitečných metod. Například metoda `toLowerCase`, která naopak převádí všechna písmenka na malá. Máme ale i metody, které vyžadují další vstupy. Například metoda `substring`, která umí vyříznout část řetězce podle zadaných mezí.

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

Už víme, že metody jsou něco jako funkce, které přísluší k nějakému typu hodnoty, například řetězci. <term cs="Vlastnosti" en="Properties"> jsou něco jako proměnné, které patří k určitému typu hodnoty. Používá se u nich stejná tečková notace jako u metod. Řetězce například mají vlastnost `length`, která udává délku řetězce.

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

Ve zbývající části lekce se vrhneme na podmínky a umožníme naším programům se rozhodovat. Před tím si ale musíme trošku připravit půdu a ukázat si nový typ hodnoty. Zatím jsme viděli čísla a řetězce, nyní přichází takzvané <term cs="pravdivostní hodnoty" en="boolean values">. Čísel a řetězců je nekonečně mnoho, pravdivostní hodnoty jsou však jen dvě: `true` a `false`. Používají se k tomu, abychom vyjádřili, zda je něco pravda nebo není. Například:

```jscon
> const pristupPovolen = false
> const vstupJeCislo = true
> const mobilniProhlizec = true
```

K tomu, abychom mohli v našich programech činit rozhodnutí budeme také potřebovat výrazy, které vrací pravdivostní hodnoty. Ty můžeme sestavit pomocí takzvaných <term cs="porovnávacích operátorů" en="comparison operators">.

```jscon
> const age = 21
> age > 18
true
> age > 21
false
> age >= 21
true
> age === 21
true
> age !== 21
true
```

Kompletní sada porovnávacích operátorů vypadá takto.

<table>
  <thead>
    <th>Operátor</th>
    <th>Popis</th>
  </thead>
  <tbody>
    <tr><td><strong><code>></code></strong></td><td>větší než</td></tr>
    <tr><td><strong><code>>=</code></strong></td><td>větší nebo rovno</td></tr>
    <tr><td><strong><code><</code></strong></td><td>menší než</td></tr>
    <tr><td><strong><code><=</code></strong></td><td>menší nebo rovno</td></tr>
    <tr><td><strong><code>===</code></strong></td><td>rovno</td></tr>
    <tr><td><strong><code>!==</code></strong></td><td>nerovno</td></tr>
  </tbody>
</table>

V JavaScriptu můžete narazit i na operátory `==` a `!=`. Ty však nebudeme nikdy používat, protože v některých případech mohou zanést do našeho programu nechtěné chyby.

## Podmínky

Nyní se konečně dostáváme k tématu, na které jsme se tak dlouho připravovali. Doposud všechny naše programy vypadaly jako sekvence příkazů vykonávané jeden za druhým. Pro komplikovanější problémy ale budeme potřebovat umožnit, aby se některé části programu vykonaly jen za určitých podmínek.

Pro jednoduchý příklad se opět vraťme k našemu ultramaratonskému běhu. Závod začiná ve tři hodiny odpoledne a počítáme s tím, že závodníci doběhnou někdy příští den ráno. Nebudeme ale v cíli čekat na každého dědulu, který to celé poběží 20 hodin. Řekněme, že organizátoři mají padla druhý den v poledne. Potřebujeme tedy do naší stránky zakomponovat informaci o tom, jestli trasu dokážeme uběhnout do 12 hodin.

```js
'use strict';

const start = 15;
const delka = Number(prompt('Zadej délku závodu:'));
const konec = (start + delka) % 24;

if (konec > 12) {
  document.write('Překročena maximální délka závodu!');
} else {
  document.write('Konec závodu ve ' + konec + ' hodin');
}
```

Toto je příklad velmi jednoduché podmínky se dvěm větvemi. V závorkách po klíčovém slovu `if` musí vždy být výraz, který vrací pravdivostní hodnotu. Podle toho, jestli je výsledek výrazu `true` nebo `false` se buď vykoná kód v prvních složených závorkách nebo kód v závorkách za slovem `else`. Tady se proprvé potkáváme s takzvanými `bloky kódu`, které jsou téměř nezbytnou ingrediencí všech programů.

### Bloky kódu

Pokud nějaké řádky kódu uzavřeme do složených závorek, vytváříme takzvaný blok. JavaScript každý blok chápe jako samostatnou jednotku, která se vykoná za určité situace. Taková situace muže být například splnění nebo nesplnění výrazu v podmínce. Později uvidíme další situace, kde se spouštěnjí bloky kódu.

Aby se nám kód dobře četl, odsazujeme řádky uvnitř bloku o kus doprava. V tomto kurzu budeme používat dvě mezery. Pokud máte VS Code nastavené podle naších doporučení, při psaní se vám řádky budou automaticky odsazovat. Stisknutím tabulátoru [[Tab]] pak můžete odsazení vložit sami. Stisknutím [[Shift]]+[[Tab]] jej naopak zrušíte. To se hodí pokud chcete například odsadit velký kus kódu najednou. Stačí jej vybrat myší a stiknout [[Tab]] nebo [[Shift]]+[[Tab]].

Je dobré mít na paměti, že odsazování a obecně většina bílých znaků je především pro nás lidi, tedy pro čtenáře kódu. Počítači, tedy přesnějí JavaScript runtimu, jsou bílé znaky jedno. Můžeme si je tady dávat kam chceme. Následující dva zápisy jsou z hlediska runtimu zcela stejné.

```js
if (age >= 18) {
  document.write('Nalej si');
} else {
  document.write('Žádné chlastání!');
}
```

```js
if (age >= 18) {
  document.write('Nalej si');
} else {
  document.write('Žádné chlastání!');
}
```

Věřím, že uznáte, že první varianta je mnohem čitelnější než druhá. Způsobů, jak formátovat kód existuje vícero a můžete se tak účastnit nekonečných hospodských disputací o tom, jestli odsazovat pomocí dvou mezer nebo čtyř, jestli otvírací složenou závorku psát na konec řádku nebo na začátek nového a tak dále.

```js
if (age >= 18) {
  document.write('Nalej si u nás');
} else {
  document.write('Žádné chlastání!');
}
```

Nakonec je však důležité hlavně si nějaká pravidla stanovit a ta pak dodržovat. V tomto směru existuje [několik manuálů](https://codeburst.io/5-javascript-style-guides-including-airbnb-github-google-88cbc6b2b7aa), kterým se říká _style guide_. Ty kodifikují určitá pravidla formátování kódu tak, abyste je nemuseli vždy od nuly vymýšlet sami. Ve firmě nebo v programátorském týmu pak stačí říct, že používáme takový nebo onaký style guide a předejít tak nekonečným diskuzím o tom, kde mají být mezery a kde ne. V tomto kurzu používáme [AirBnB style guide](https://github.com/airbnb/javascript). Pokud máte dobře nastavený VS Code, při každém uložení souboru se váš kód automaticky přeformátuje podle těchto pravidel. Můžete se tak místo na počty mezer soustředit na to, aby váš program skutečně fungoval.

### Podmínky s více větvemi

Zatím jsme viděli podmínky se dvěma větvemi. Není ovšem problém mít podmínku například jen s jednou větví.

```js
if (age >= 18) {
  document.write('Nalej si');
}
```

Pokud je výraz v podmínce `false`, blok kódu se prostě přeskočí. Občas ale naopak potřebujeme podmínky s vícero větvemi. Uvažte například situaci, kdy se snažíme ohodnotit písemku známkami A až F podle dosaženého počtu budů.

```js
let znamka = '';
if (body >= 90) {
  znamka = 'A';
} else if (body >= 80) {
  znamka = 'B';
} else if (body >= 70) {
  znamka = 'C';
} else if (body >= 60) {
  znamka = 'D';
} else if (body >= 50) {
  znamka = 'E';
} else {
  znamka = 'F';
}
```

V takto rozvětvené podmínkce JavaScript runtime prochází jednotlivé výrazy dokud nenarazí na ten, který se vyhodnotí jako `true`. Vykoná příšlušný blok a kódu a **zbylé větve přeskočí.** Vykoná se tak pouze první větev, která se vyhodnotí jako `true`. Pokud by byly všechny výrazy `false`, vykoná se větev `else`. Jak už víme, větev `else` přítomná být nemusí. Výše udovedný kód bychom tedy mohli malinko zkrátit takto.

```js
let znamka = 'F';
if (body >= 90) {
  znamka = 'A';
} else if (body >= 80) {
  znamka = 'B';
} else if (body >= 70) {
  znamka = 'C';
} else if (body >= 60) {
  znamka = 'D';
} else if (body >= 50) {
  znamka = 'E';
}
```

### Vnořené podmínky

Každý blok kódu může obsahovat libovolné příkazy, tedy i další podmínky. Můžeme tak snadno vnořovat podmínky do sebe.

```js
if (age >= 18) {
  document.write('Nalej si');
} else {
  const remains = 18 - age;
  if (remains < 2) {
    document.write('Ještě si chvíli počkej');
  } else if (remains < 5) {
    document.write('Co to tady zkoušíš?');
  } else {
    document.write('Utíkej za mamkou!');
  }
}
```

Takto můžeme vytvářet relativně komplikované rozhodování. Se zanořováním podmínek je ale dobré to příliš nepřehánět. Málokdo se dokáže snadno zorientovat v temných hlubínách pětkrát zanořené podmínky. Později se naučímte strategie, jak se takovým hlubokým zanořením vyhnout.

@exercises ## Cvičení - podmínky [

- prihlaseni
- cena-vstupenky
  ]@

@exercises ## Povinná úloha na doma [

- superhruba
- slevy
  ]@

@exercises ## Doporučené úložky na doma [

- slevy
  ]@

## Povinné čtení na doma - logické operátory

V matematice jsme zvyklí na takzvané aritmetické operátory, tedy plus, mínus apod. Takové operátory obecně vyrábějí z čísel jiná čísla, například

```jscon
> 2 + 3
5
```

Logika má však také své operátory, kterým se (logicky) říká <em>logické operátory</em>. Tyto operátory místo čísel pracují s pravdivostními hodnotami. Můžeme tak použít například operátor `&&`.

```jscon
> true && true
true
> true && false
false
> false && true
false
> false && false
false
```

Tento operátor v podstatě znamená **a zároveň**. Tedy pokud jsou obě hodnoty `true`, výsledek je také `true`. Jinak je výsledek `false`.

Můžeme také použít operátor **nebo** který se píše jako dvě roury `||`.

```jscon
> true || true
true
> true || false
true
> false || true
true
> false || false
false
```

Operátor `||` vrací `true` v případě, že alespoň jedna z hodnot je `true`. Jako poslední máme operátor negace, který se píše jako vykřičník `!`. Ten jen vrací opak zadané pravdivostní hodnoty.

```jscon
> !true
false
> !false
true
```

Tyto logické operátory můžeme s výhodou využít v našich podmínkách. Například bychom mohli chtít zkontrolovat, že věk uživatele je mezi 15 a 18. Chceme tedy logicky říct že věk je <i>větší nebo roven 15</i> **a zároveň** <i>menší nebo roven 18</i>. Kombinujeme tak vlastně dva logické výrazy do jednoho.

```js
if (age >= 15 && age <= 18) {
  document.write('Jsi mladistvým intelektuálem');
}
```

V jiném případě můžeme chtít zkontrolovat, že věk uživatele je menší než 18 nebo větší či roven 65.

```js
if (age < 18 || age >= 65) {
  document.write('Nemusíš pracovat');
}
```

Tutéž podmínku bychom mohli napsat pomocí negace.

```js
if (!(age >= 18 && age < 65)) {
  document.write('Nemusíš pracovat');
}
```

Takovýto výraz už je však trochu hůře k přečtení. Logické operátory jsou užiteční pomocníci, v praxi je však dobré s nimi šetřit. Pokud výraz ve vaší podmínce obsahuje více než jeden logický operátor, váš kód se stává těžko čitelným a pochopitelným. Držte se proto při používání logickách operátor pri zemi. Vaši budoucí kolegová vás za to budou mít rádi.

@exercises ## Volitelné úložky na doma [

- ruleta
- prestupny-rok
- prestupny-rok-2
- prestupny-rok-3
  ]@
