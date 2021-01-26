Do této chvile jsme se naučili psát jednoduché JavaScriptové programy a komunikovat s uživatelem. Naše programy ovšem byly velmi jednoduché a moc toho neuměly. V této lekci se naučíme mnoho užitéčných technik pro práci s řetězci a naučíme se pomocí podmínek větvit běh programu tak, aby dokázal provádět rozhodnutí. 

## Vlastnosti a metody

Z předchozí lekce už víme, jak vytvářet jednoduché objekty a jak do nich přidávat vlastnosti. Za velkou pozornost však stojí fakt, že mnoho hodnot v JavaScriptu jsou samy o sobě také objekty. Například každý řetězec je pod kličkou objekt a my můžeme přistupovat k jeho vlastnostem stejně, jako u objektů, které jsme vytvořili sami. 

U řetězců je situace v celku jednoduchá, protože mají pouze jednu vlastnost. Jmenuje se `length` a udává počet znaků v řetězci.

```jscon
> 'martin'.length
6
> 'm'.length
1
> ''.length
0
```

Uvnitř objektů však kromě vlastností najdeme i takzvané metody, což jsou funkce, které jsou uzavřené uvnitř objektu. V praxi se často stává, že některé funkce se hodí na práci pouze s jedním typem hodnoty. Například bychom mohli mít funkci `toUpperCase`, která by převedla všechna písmena v řetězci na velká písmena. Kdyby taková funkce existovala, mohli bychom ji
volat třeba takto

```jscon
> toUpperCase('martin')
'MARTIN'
```

Je pochopitelné, že taková funkce funguje pouze pro řetězce. Pro ostatní
hodnoty nedává smysl. Těžko si představit, co by taková funkce měla vrátit
například v takovémto případě.

```jscon
> toUpperCase(3.14)
```

Funkce, které pracují pouze na jednom typu objektu můžeme svázat přímo s tímto objektem. Můžeme tedy říct, že funkce `toUpperCase` patří pouze řetězcům. Máme-li funkci, která patří pouze typu řetězec, voláme ji pomocí už známé tečkové notace.

```jscon
> 'martin'.toUpperCase()
'MARTIN'
```

Funkcím jako výše, které patří jen konkrétním typům hodnot, říkáme <term cs="metody" en="methods">. Všimněte si, že metoda `toUpperCase` v JavaScriptu skutečně existuje, takže výše uvedený kód bude opravdu fungovat. Podobně existuje například metoda
`toLowerCase`. Vyzkoušejte si ji!

## Užitečné metody na řetězcích

Na řetězcích máme v JavaScriptu spoustu metod, které nám umožňují provádět mnoho užitečných operací. Zde pro začátek vybereme pár z nich.

`toUpperCase()`
: Převede všechna písmena na velká.

```jscon
> 'popokatepetl'.toUpperCase()
'POPOKATEPETL'
```

`toLowerCase()`
: Převede všechna písmena na malá.

```jscon
> 'Popokatepetl'.toLowerCase()
'popokatepetl'
```

`trim()`
: Odstraní bílé znaky ze začátku a konce.

```jscon
> '  popokatepetl '.trim()
'popokatepetl'
```

`slice(start, end)`
: Vyřízne z řetězce kus podle zadaných pozic začátku a konce. U této metody poprvé narážíme na jednu programátorskou výstřednost, kterou budeme potkávat pořád znovu a znovu: **programátoři vždy počítají od nuly**, nikoliv od jedničky jako běžní lidé. V řetězci `'martin'` je tedy písmenko `'m'` na pozici nula, písmenko `'a'` na pozici 1 a tak dále. Metoda `slice` navíc bere dolní mez **včetně**, kdežto horní mez se bere **vyjma**.

```jscon
> 'popokatepetl'.slice(4, 7)
'kat'
> 'popokatepetl'.slice(0, 3)
'pop'
```

`indexOf(value)`
: Vyhledá řetězec zadaný v parametru `value` uvnitř řetězce, na kterém tuto metodu voláme. Vrací pozici prvního výskytu nebo -1 pokud se obsah `value` v 5et2zci nenachází.

```jscon
> 'popokatepetl'.indexOf('kat')
4
> 'popokatepetl'.indexOf('po')
0
> 'popokatepetl'.indexOf('t')
6
> 'popokatepetl'.indexOf('katka')
-1
```

`padStart(targetLength, padString)`
: Prodlouží řetězec na zadanou délku tak, že na začátek přidá opakování řetězce `padString`. Hodí se na zarovnávání nebo na formátování čísel.

```jscon
> '12'.padStart(4, '0')
'0012'
> '12'.padStart(4, ' ')
'  12'
> '12'.padStart(3, ' ')
' 12'
> '12'.padStart(2, ' ')
'12'
```

Možná vám nyní vrtá hlavou, jestli funkce `Math.round` nebo `console.log` nejsou náhodou metody, když používají tečkovou notaci. Je to skutečně tak. `Math` i `console` jsou speciální JavaScriptové objekty, která sdružují metody pro matematické výpočty nebo pro práci s konzolí. 

## Interpolace řetězců

Když chceme v JavaScriptu vytvořit nějaký kus textu, například nějakou zprávu pro uživatele, často potřebujeme do tohoto textu vložit obsah několika různých proměnných.

```js
const order = {
  id: 37214,
  product: 'pěnová matrace',
  delivery: '21.8.2021',
};

const { id, product, delivery } = order;

document.write(
  '<h2>Objednávka: ' + id + '</h2>',
  '<p>Zboží ' + product + ' bude doručeno ' + delivery + '.',
);
```

Abychom se ze všeho toho sčítání a uvozovek nezbláznili, moderní JavaScript nabízí nový zápis řetězců, kterému se odborně říká <term cs="interpolace řetězců" em="string interpolation">. V tomto zápisu se místo obyčejný nebo dvojitých uvozovek používá takzvaný zpětný apostrof &#96;. Pomocí tohoto zápisu můžeme obsah proměnných vložit do řetězce pomocí znaku `$` a složených závorek.

```js
document.write(
  `<h2>Objednávka: ${id}</h2>`,
  `<p>Zboží ${product} bude doručeno ${delivery}.',
);
```

Uvnitř složených závorek otevíráme jakési JavaScriptové okno, do kterého můžeme vepsat nejen proměnnou, ale zcela libovolný výraz, jehož výsledek bude automaticky zkonvertován na řetězec.

```js
document.write(
  `<h2>Objednávka: ${String(id).padStart(8, '0')}</h2>`,
  `<p>Zboží ${product} bude doručeno ${delivery}.`,
);
```

Díky interpolaci řetězců se náš kód stává mnohem čitelnějším a budeme ji tedy používat všude, kde to půjde.

### Víceřádkové řetězce a escape sekvence

Když v JavaScriptu vytváříme HTML, které chceme vložit do stránky, časti potřebujeme vygenerovat dlouhý řetězec, který se nám nevejde na jeden řáděk. V JavaScriptu ovšem nelze zapsat běžný řetězec na více řádků. Následující kód by bohužel nefungoval.

```js
const content = '
  <header>
    <h1>Název stránky</h1>
  </header>
  <main>Obsah srtánky</main>
  <footer>Patička</footer>
';
```

Abychom takový řetězec sestavili, musíme si pomoct sčítáním řetězců.

```js
const content = (
  '<header>' + 
  '  <h1>Název stránky</h1>' + 
  '</header>' + 
  '<main>Obsah stránky</main>' + 
  '<footer>Patička</footer>'
);
```

Tento zápis je ovšem dost neohrabaný a po čase nás začne vytáčet. Interpolace řetězců nás ale zachrání, neboť řetězce v uvozovkách nové řádky obsahovat mohou.

```js
const content = `
  <header>
    <h1>Název stránky</h1>
  </header>
  <main>Obsah stránky</main>
  <footer>Patička</footer>
`;
```

Navíc můžeme do takového řetězce snadno zakomponovat proměnné a vytvořit tak obsah stránky opravdu profesionálně. 

```js
const order = {
  id: 37214,
  product: 'pěnová matrace',
  delivery: '21.8.2021',
};

const { id, product, delivery } = order;

const content = `
  <header>
    <h1>Objednávka: ${String(id).padStart(8, '0')}</h1>
  </header>
  <main>
    <p>Zboží ${product} bude doručeno ${delivery}.</p>
  </main>
  <footer>www.matrace-a-syn.cz</footer>
`;

document.write(content);
```

@exercises ## Cvičení - práce s řetězci [

- vlastnosti-metody
- email
- dorucovani
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
false
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

<!-- prettier-ignore -->
```js
if(age>=18){document.write('Nalej si');} 
else{document.write('Žádné chlastání!');}
```

Věřím, že uznáte, že první varianta je mnohem čitelnější než druhá. Způsobů, jak formátovat kód existuje vícero a můžete se tak účastnit nekonečných hospodských disputací o tom, jestli odsazovat pomocí dvou mezer nebo čtyř, jestli otvírací složenou závorku psát na konec řádku nebo na začátek nového a tak dále.

<!-- prettier-ignore -->
```js
if ( age >= 18 ) 
{
    document.write('Nalej si');
} 
else 
{
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

Takto můžeme vytvářet relativně komplikované rozhodování. Se zanořováním podmínek je ale dobré to příliš nepřehánět. Málokdo se dokáže snadno zorientovat v temných hlubínách pětkrát zanořené podmínky. Později se naučíme strategie, jak se takovým hlubokým zanořením vyhnout.

@exercises ## Cvičení - podmínky [

- registrace-na-ockovani
- cena-vstupenky
  ]@

@exercises ## Doporučené úložky na doma [

- slevy
- superhruba
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
